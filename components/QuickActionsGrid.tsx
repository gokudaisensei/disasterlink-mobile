import { View, Text, Pressable } from 'react-native';
import {
  ChatBubbleLeftIcon,
  ExclamationTriangleIcon,
  ClipboardIcon,
  UserIcon,
  MapPinIcon,
  MapIcon,
} from 'react-native-heroicons/solid';

const actions = [
  { icon: ChatBubbleLeftIcon, label: 'Send Message' },
  { icon: ExclamationTriangleIcon, label: 'Broadcast SOS', color: 'text-red-500' },
  { icon: ClipboardIcon, label: 'Report Resource Need' },
  { icon: UserIcon, label: 'Share My Status' },
  { icon: MapPinIcon, label: 'Nearby Alerts' },
  { icon: MapIcon, label: 'Community Map' },
];

export default function QuickActionsGrid() {
  return (
    <View className="mt-4 flex-row flex-wrap justify-between px-4">
      {actions.map((action, i) => (
        <Pressable
          key={i}
          className="m-1 aspect-square w-[30%] items-center justify-center rounded-xl bg-white shadow-md">
          <action.icon size={28} className={`${action.color ?? 'text-blue-500'}`} />
          <Text className="mt-1 text-center text-xs">{action.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
