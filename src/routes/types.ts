import { NativeStackNavigationProp } from "@react-navigation/native-stack"

type AuthStackParamsList = {
  Preload: undefined
  SignIn: undefined
  SignUp: undefined
}

export type AuthNavigationProps = NativeStackNavigationProp<AuthStackParamsList>