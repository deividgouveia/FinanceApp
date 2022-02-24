import React, { FunctionComponent } from "react";
import { Button } from "react-native-elements";

const SignButtons: FunctionComponent<{
  title: string;
  loading: boolean;
  onPress: Function;
}> = ({
  title,
  loading,
  onPress
}) => (
  <Button
  title={title}
  titleStyle={{fontWeight:"bold", fontSize: 15}}
  buttonStyle={{
    marginTop: 15, 
    padding: 15, 
    backgroundColor:"#004aad"}}
  loading={loading}
  onPress={() => onPress()}
  />
);

export default SignButtons;