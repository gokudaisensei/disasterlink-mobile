import { View, Text, Pressable } from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/solid';

export default function LocationSelector() {
  return (
    <View className="mx-4 mt-4 flex-row items-center justify-between rounded-xl border border-gray-200 bg-white p-3">
      <View className="flex-row items-center space-x-1">
        <MapPinIcon color="#F97316" size={20} />
        <Text className="text-base font-medium">Kolkata</Text>
      </View>
      <Pressable className="rounded-lg bg-gray-100 px-3 py-1">
        <Text className="text-sm font-semibold">Update</Text>
      </Pressable>
    </View>
  );
}
