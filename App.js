import React from "react";
import {Home} from "./app/views/Home.js";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Contact} from "./app/views/Contact";

const Stack = createStackNavigator();

export default () =>
    (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"HomeRT"}>
                <Stack.Screen name={"HomeRT"} component={Home}/>
                <Stack.Screen name={"ContactRT"} component={Contact}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
