import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const AuthStack = createNativeStackNavigator();

export function AuthRoutes(){
  return(
    <AuthStack.Navigator
       initialRouteName="SignIn"
       screenOptions={{
         headerShown:false
       }}
    >
       <AuthStack.Screen name="Preload" component={Preload}/>
       <AuthStack.Screen name="SignIn" component={SignIn}/>
       <AuthStack.Screen name="SignUp" component={SignUp}/>
    </AuthStack.Navigator>
  );
}