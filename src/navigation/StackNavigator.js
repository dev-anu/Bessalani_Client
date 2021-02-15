import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Registration from "../screens/Registration";
import ForgotPassword from "../screens/ForgotPassword";
import VerifyOtp from "../screens/VerifyOtp";
import ResetPassword from "../screens/ResetPassword";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" component={Login}></Stack.Screen>
        <Stack.Screen
          name="registration"
          component={Registration}
        ></Stack.Screen>
        <Stack.Screen
          name="forgotpassword"
          component={ForgotPassword}
        ></Stack.Screen>
        <Stack.Screen
          name="verifyotp"
          component={VerifyOtp}
        ></Stack.Screen>
        <Stack.Screen
          name="resetpassword"
          component={ResetPassword}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
