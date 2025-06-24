import { View, Text, Pressable } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const actions = [
  {
    icon: (props: any) => <MaterialIcons name="chat" {...props} />,
    label: 'Send Message',
    color: 'text-blue-500',
  },
  {
    icon: (props: any) => <MaterialIcons name="sos" {...props} />,
    label: 'Broadcast SOS',
    color: 'text-red-500',
  },
  {
    icon: (props: any) => <MaterialIcons name="assignment" {...props} />,
    label: 'Report Resource Need',
    color: 'text-blue-500',
  },
  {
    icon: (props: any) => <MaterialIcons name="person" {...props} />,
    label: 'Share My Status',
    color: 'text-blue-500',
  },
  {
    icon: (props: any) => <MaterialIcons name="location-on" {...props} />,
    label: 'Nearby Alerts',
    color: 'text-blue-500',
  },
  {
    icon: (props: any) => <MaterialCommunityIcons name="map" {...props} />,
    label: 'Community Map',
    color: 'text-blue-500',
  },
];

export default function QuickActionsGrid() {
  return (
    <View className="mt-4 flex-row flex-wrap justify-between px-4">
      {actions.map((action, i) => (
        <Pressable
          key={i}
          className="m-1 aspect-square w-[30%] items-center justify-center rounded-xl bg-white shadow-md">
          {action.icon({
            size: 28,
            color: action.color === 'text-red-500' ? '#ef4444' : '#3b82f6',
          })}
          <Text className="mt-1 text-center text-xs">{action.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
