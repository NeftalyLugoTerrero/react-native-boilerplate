import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';

import { HelloWorld } from '_atoms';

const HomeScreen = ({ navigation }) => (
    <SafeAreaView>
        <HelloWorld />

        <TouchableHighlight onPress={() => navigation.navigate('About')}>
            <Text>Go to about</Text>
        </TouchableHighlight>
    </SafeAreaView>
);

export default HomeScreen;