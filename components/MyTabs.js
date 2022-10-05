import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomTab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <BottomTab.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#3c0a6b' },
        headerTintColor: 'white',
        tabBarActiveTintColor: '#3c0a6b'
    }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
