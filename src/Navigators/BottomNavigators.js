import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';

const Tab = createBottomTabNavigator();

const MainFlow = () => {
  return (
    <Tab.Navigator initialRouteName='TrackCreate'>
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="TrackDetail" component={TrackDetailScreen} />
      <Tab.Screen name="TrackList" component={TrackListScreen} />
      <Tab.Screen name="AccountSc" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainFlow;