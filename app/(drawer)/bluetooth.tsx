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
          <View className="bg-white rounded-xl shadow p-4 mb-6 flex-row items-center justify-between">
            <View>
              <Text className="text-lg font-semibold text-gray-800">Bluetooth Status</Text>
              <Text className="text-sm text-gray-500 mt-1">Disconnected</Text>
            </View>
            <Ionicons name="bluetooth" size={32} color="#3b82f6" />
          </View>
          <Text className="text-base font-medium text-gray-700 mb-2">Nearby Devices</Text>
          <View className="bg-white rounded-lg shadow p-3 mb-4">
            <Text className="text-gray-600">No devices found. Tap scan to search.</Text>
          </View>
          <TouchableOpacity className="bg-blue-500 rounded-lg py-3 items-center mt-2">
            <Text className="text-white font-semibold">Scan for Devices</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity className="absolute bottom-6 right-6 bg-blue-600 rounded-full p-4 shadow-lg">
        <Ionicons name="refresh" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
