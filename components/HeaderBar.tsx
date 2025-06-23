import { View, Text, Image } from 'react-native';

export default function HeaderBar() {
  return (
    <View className="flex-row items-center justify-between px-4 pt-4">
      <Text className="text-lg font-bold text-blue-700">DisasterLink</Text>
      <View className="flex-row items-center space-x-2">
        <Text className="text-xs text-green-600">● Mesh active</Text>
        <Image source={require('../assets/icon.png')} className="h-8 w-8 rounded-full" />
      </View>
    </View>
  );
}
