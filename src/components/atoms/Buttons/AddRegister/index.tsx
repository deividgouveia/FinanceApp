import React from "react";
import { TouchableOpacity, View } from "react-native";

export const AddRegister: React.FC = ({children},{onPress}) => {
  return(
    <TouchableOpacity
     style={{
       top: -30,
       justifyContent: 'center',
       alignItems: 'center'
     }}
     onPress={onPress}
    >
      <View
       style={{
         width: 70,
         height: 70,
         borderRadius: 35,
         backgroundColor: '#ffffff',
         borderWidth: 4,
         borderColor: '#004dda',
         elevation: 8
       }}
      >
        {children}
      </View>
    </TouchableOpacity>
  )
}