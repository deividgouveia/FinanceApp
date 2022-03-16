import React, { FunctionComponent } from "react";
import { Button } from "react-native-elements";

const ModalButtons: FunctionComponent<{
  title: string;
  loading: boolean;
  onPress: Function;
  color: string
}> = ({
  title,
  loading,
  onPress,
  color
}) => (
  <Button 
   title={title}
   titleStyle={{
    fontWeight:"bold", 
    fontSize: 15,
   }}
   buttonStyle={{ 
    padding: 15, 
    backgroundColor: color,
    borderRadius: 10
   }}
   loadingStyle={{}}
   onPress={()=>onPress()}
   loading={loading}
  />
);

export default ModalButtons;