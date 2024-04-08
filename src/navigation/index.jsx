import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpMain from "../screens/SignupScreen/SignUpMain";
import LoginMain from "../screens/LoginScreen/LoginMain";
import WelcomeMain from "../screens/WelcomeScreen/WelcomeMain";
import ForgotPwdMain from "../screens/ForgotPwdScreen/ForgotPwdMain";
import { NAVIGATION } from "../utils/constants";

const Stack = createNativeStackNavigator();
function StackNavigation () {
    return (
        <Stack.Navigator initialRouteName={NAVIGATION.LOGIN_HOME} 
        // screenOptions={{headerShown:false}} 
        >
            <Stack.Screen name={NAVIGATION.LOGIN_HOME} component={LoginMain} />
            <Stack.Screen name={NAVIGATION.SIGNUP} component={SignUpMain} />
            <Stack.Screen name={NAVIGATION.WELCOME} component={WelcomeMain} />
            <Stack.Screen name={NAVIGATION.FORGOTP} component={ForgotPwdMain} />

        </Stack.Navigator>
    )
}

export default StackNavigation;

