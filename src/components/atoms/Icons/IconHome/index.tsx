import React from "react";
import { View } from "react-native";
import { Icon, Text } from "react-native-elements";

export function IconHome ({color='#ffffff'}){
  return(
    <View style={{alignItems: "center", justifyContent: "center",}}>
       <Icon 
        name="home"
        type="material-community" 
        size={25}
        color={color}
        tvParallaxProperties={undefined}      
         />

         <Text
         style={{
           fontSize: 12,
           color: color
         }}>
            HOME
          </Text>
    </View>
  );
}