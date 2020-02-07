import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, AboutScreen } from '_screens';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;