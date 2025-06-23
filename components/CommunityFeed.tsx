import { View, Text } from 'react-native';

export default function CommunityFeed() {
  const feed = [
    { type: 'SOS', time: '12:05', message: 'Injured at Main Rd.' },
    { type: 'Group', time: '12:03', message: 'Water available at School' },
    { type: 'Official', time: '11:01', message: 'Riya marked indoors, Storm alert!' },
  ];

  return (
    <View className="mt-6 px-4">
      <Text className="mb-2 text-base font-bold">Community Feed</Text>
      {feed.map((item, i) => (
        <View
          key={i}
          className="flex-row items-center justify-between border-b border-gray-200 py-2">
          <Text
            className={`text-xs ${item.type === 'SOS' ? 'font-bold text-red-500' : 'text-gray-700'}`}>
            {item.type === 'SOS' ? '🆘 ' : ''}
            {item.time}
          </Text>
          <Text className="mx-2 flex-1 text-sm font-medium">{item.message}</Text>
          <Text className="text-xs text-gray-400">{item.type}</Text>
        </View>
      ))}
    </View>
  );
}
