import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import Greeting from '../../components/Greeting';
import { Ionicons } from '@expo/vector-icons';

export default function BluetoothScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <HeaderBar />
        <Greeting />
        <View className="px-4 py-6">
          <View className="mb-6 flex-row items-center justify-between rounded-xl bg-white p-4 shadow">
            <View>
              <Text className="text-lg font-semibold text-gray-800">Bluetooth Status</Text>
              <Text className="mt-1 text-sm text-gray-500">Disconnected</Text>
            </View>
            <Ionicons name="bluetooth" size={32} color="#3b82f6" />
          </View>
          <Text className="mb-2 text-base font-medium text-gray-700">Nearby Devices</Text>
          <View className="mb-4 rounded-lg bg-white p-3 shadow">
            <Text className="text-gray-600">No devices found. Tap scan to search.</Text>
          </View>
          <TouchableOpacity className="mt-2 items-center rounded-lg bg-blue-500 py-3">
            <Text className="font-semibold text-white">Scan for Devices</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity className="absolute bottom-6 right-6 rounded-full bg-blue-600 p-4 shadow-lg">
        <Ionicons name="refresh" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
