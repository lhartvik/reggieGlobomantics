import React from "react";
import {Home} from "./app/views/Home.js";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Contact} from "./app/views/Contact";
import {Video} from "./app/views/Video";
import {VideoDetail} from "./app/views/VideoDetail";
import {Register} from "./app/views/Register";

const Stack = createStackNavigator();

export default () =>
    (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"HomeRT"}>
                <Stack.Screen name={"HomeRT"} component={Home}/>
                <Stack.Screen name={"ContactRT"} component={Contact}/>
                <Stack.Screen name={"LessonsRT"} component={Video}/>
                <Stack.Screen name={"VideoDetailRT"} component={VideoDetail}/>
                <Stack.Screen name={"RegisterRT"} component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
