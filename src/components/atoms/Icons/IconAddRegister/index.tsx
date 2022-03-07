import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";

export function IconAddRegister ({color='#004dda'}){
  return(
    <View style={{flex: 1, alignItems: "center", justifyContent: "center",}}>
      
       <Icon 
        name="plus"
        type="feather" 
        size={35}
        color={color}
        tvParallaxProperties={undefined}      
         />

    </View>
  );
}