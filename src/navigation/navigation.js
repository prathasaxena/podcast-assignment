import * as React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { Home } from '../component/Home';
import { ChannelDetails,PlayEpisodes } from '../component/Episodes';

const Navigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ChannelDetails" component={ChannelDetails} />
            <Stack.Screen name="PlayEpisodes" component={PlayEpisodes} />
        </Stack.Navigator>
   )
}

export default Navigation;