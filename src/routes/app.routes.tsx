import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import PostScreen from "../screens/PostScreen";

import { IconHome } from "../components/atoms/Icons/IconHome";
import { IconProfile } from "../components/atoms/Icons/IconProfile";
import { IconAddRegister} from "../components/atoms/Icons/IconAddRegister";
import { AddRegister } from "../components/atoms/Buttons/AddRegister";
import ModalRegister from "../components/atoms/ModalRegister";

const Tab = createBottomTabNavigator();

export function AppRoutes(){
   return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,       
        tabBarStyle:{
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 5,
          backgroundColor: '#004dda',
          borderRadius: 15,
          height: 75,
        }
      }}
    >
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#a9a9a9',
        tabBarIcon: ({color}:{color:string})=>(
          <IconHome color={color}/>
        ),
      }}
      />
      <Tab.Screen 
      name="Post" 
      component={PostScreen} 
      options={{
        tabBarButton: () => (<AddRegister />)
      }}
      />
      <Tab.Screen 
      name="ProFile" 
      component={Profile}
      options={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#a9a9a9',
        tabBarIcon: ({color}:{color:string})=>(
          <IconProfile color={color}/>
        )
      }}
      />
    </Tab.Navigator>
   );
}