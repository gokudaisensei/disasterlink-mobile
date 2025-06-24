import { View, Text, Pressable, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { create } from 'zustand';

// Zustand store for location
type LocationState = {
  locationName: string;
  setLocationName: (name: string) => void;
};

export const useLocationStore = create<LocationState>((set) => ({
  locationName: 'Kolkata',
  setLocationName: (name) => set({ locationName: name }),
}));

// Helper to reverse geocode coordinates to a city name
async function getCityNameFromCoords(latitude: number, longitude: number): Promise<string> {
  try {
    const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
    if (geocode && geocode.length > 0) {
      // Prefer city, fallback to region or country
      return geocode[0].city || geocode[0].region || geocode[0].country || 'Unknown';
    }
    return 'Unknown';
  } catch {
    return 'Unknown';
  }
}

export default function LocationSelector() {
  const locationName = useLocationStore((state) => state.locationName);
  const setLocationName = useLocationStore((state) => state.setLocationName);

  // Optionally, on mount, try to get location permission and update location
  // useEffect(() => {
  //   handleUpdateLocation();
  // }, []);

  const handleUpdateLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Location permission is required to update your location.');
      return;
    }

    try {
      const loc = await Location.getCurrentPositionAsync({});
      const city = await getCityNameFromCoords(loc.coords.latitude, loc.coords.longitude);
      setLocationName(city);
    } catch (e) {
      Alert.alert('Error', 'Could not fetch location.');
    }
  };

  return (
    <View className="mx-4 mt-4 flex-row items-center justify-between rounded-xl border border-gray-200 bg-white p-3">
      <View className="flex-row items-center space-x-1">
        <MaterialIcons name="location-on" color="#F97316" size={20} />
        <Text className="text-base font-medium">{locationName}</Text>
      </View>
      <Pressable className="rounded-lg bg-gray-100 px-3 py-1" onPress={handleUpdateLocation}>
        <Text className="text-sm font-semibold">Update</Text>
      </Pressable>
    </View>
  );
}
