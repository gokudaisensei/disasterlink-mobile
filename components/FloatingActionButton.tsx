import { View, Pressable } from 'react-native';
import { PlusIcon } from 'react-native-heroicons/solid';
import { useRouter } from 'expo-router';

export default function FloatingActionButton() {
  const router = useRouter();

  return (
    <View className="absolute bottom-6 right-6 z-50">
      <Pressable
        onPress={() => router.push('/(drawer)/sos')}
        className="rounded-full bg-blue-600 p-4 shadow-lg active:bg-blue-700">
        <PlusIcon color="white" size={24} />
      </Pressable>
    </View>
  );
}
