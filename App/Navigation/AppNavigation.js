import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Containers/Splash';
import SongsList from '../Containers/SongsList';
import SongDetails from '../Containers/SongDetails';

const MainStack = createStackNavigator();

class AppNavigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <MainStack.Navigator initialRouteName="Splash">
                    <MainStack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <MainStack.Screen name="SongsList" component={SongsList} options={{ headerShown: false }} />
                    <MainStack.Screen name="SongDetails" component={SongDetails} options={{ headerShown: false }} />
                </MainStack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AppNavigation;