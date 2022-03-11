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
    right: 75
   }}
   buttonStyle={{
    marginTop: 15, 
    padding: 15, 
    width: "150%",
    borderRadius: 10,
    backgroundColor: color
   }}
   loadingStyle={{}}
   onPress={()=>onPress()}
   loading={loading}
  />
);

export default ModalButtons;