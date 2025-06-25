import { View, Text, Pressable, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { create } from 'zustand';
import { useEffect } from 'react';

// Extend Zustand store for last updated state
type LocationState = {
  locationName: string;
  setLocationName: (name: string) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  lastUpdated: string | null;
  setLastUpdated: (timestamp: string | null) => void;
};

export const useLocationStore = create<LocationState>((set) => ({
  locationName: 'Kolkata',
  setLocationName: (name) => set({ locationName: name }),
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
  lastUpdated: null,
  setLastUpdated: (timestamp) => set({ lastUpdated: timestamp }),
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
  const isLoading = useLocationStore((state) => state.isLoading);
  const setLoading = useLocationStore((state) => state.setLoading);
  const lastUpdated = useLocationStore((state) => state.lastUpdated);
  const setLastUpdated = useLocationStore((state) => state.setLastUpdated);

  useEffect(() => {
    handleUpdateLocation();
  }, []);

  const handleUpdateLocation = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Location permission is required to update your location.');
      setLoading(false);
      return;
    }

    try {
      const loc = await Location.getCurrentPositionAsync({});
      const city = await getCityNameFromCoords(loc.coords.latitude, loc.coords.longitude);
      setLocationName(city);
      setLastUpdated(new Date().toLocaleString());
    } catch (e) {
      Alert.alert('Error', 'Could not fetch location.');
      setLastUpdated(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="mx-4 mt-4 rounded-xl border border-gray-200 bg-white p-3">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center space-x-1">
          <MaterialIcons name="location-on" color="#F97316" size={20} />
          {isLoading ? (
            <ActivityIndicator size="small" color="#F97316" />
          ) : (
            <Text className="text-base font-medium">{locationName}</Text>
          )}
        </View>
        <Pressable className="rounded-lg bg-gray-100 px-3 py-1" onPress={handleUpdateLocation} disabled={isLoading}>
          <Text className="text-sm font-semibold">{isLoading ? 'Updating...' : 'Update'}</Text>
        </Pressable>
      </View>
      {lastUpdated && (
        <Text className="text-xs text-gray-500 mt-2">Last updated: {lastUpdated}</Text>
      )}
    </View>
  );
}
