import { ScrollView, View } from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import Greeting from '../../components/Greeting';
import LocationSelector from '../../components/LocationSelector';
import QuickActionsGrid from '../../components/QuickActionsGrid';
import CommunityFeed from '../../components/CommunityFeed';
import FloatingActionButton from '../../components/FloatingActionButton';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <HeaderBar />
        <Greeting />
        <LocationSelector />
        <QuickActionsGrid />
        <CommunityFeed />
      </ScrollView>
      <FloatingActionButton />
    </View>
  );
}
