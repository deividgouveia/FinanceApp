import React, {createContext, useContext, useState} from "react";
import { 
  getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { app, db, dbRef } from "../services/firebaseConnection";
import { ref, set, get, child } from "firebase/database";
import {IAuthContext} from './types';
import { ToastAndroid } from "react-native";

interface IUser {
  uid: string
  nome: string
  email: string | null
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({children}) => {

  const [user, setUser] = useState<IUser>({
    uid: '',
    nome: '',
    email: '',
  });
  const [loading, setLoadign] = useState(false);

  const auth = getAuth(app);

  //LOGAR USUÁRIO-------------------------------------------------------------//
  async function handleSignIn
  ({email, password}:{email:string; password:string}){
    setLoadign(true);

    await signInWithEmailAndPassword(auth, email, password)
    .then(async(value)=>{
      let userId = value.user.uid;
      let userEmail = value.user.email;
      await get(child(dbRef, `users/${userId}`))
      .then((snapshot)=>{
        console.log(snapshot.val().nome)
         let data = {
           uid: userId,
           nome: snapshot.val().nome,
           email: userEmail
         };
         setUser(data);
         setLoadign(false);
      })
    })
    .catch((error)=>{
      ToastAndroid.show('Error:',error.code)
    })
  }
  //--------------------------------------------------------------------------//

  //CADASTRAR USUÁRIO---------------------------------------------------------//
  async function handleSignUp
  ({nome, email, password}:{nome:string; email:string; password:string}) {
    setLoadign(true);

    await createUserWithEmailAndPassword(auth, email, password)
    .then(async(value)=>{
      let userId = value.user.uid;
      let userEmail = value.user.email;
      await set(ref(db, 'users/' + userId),{
        nome: nome,
        saldo: 0
      })
      .then(()=>{
        let data = {
          uid: userId,
          nome: nome,
          email: userEmail
        };
        setUser(data);
        setLoadign(false);
      })
    })
    .catch((error)=>{
      ToastAndroid.show('Error:',error.code);
    });
  
  }
  //--------------------------------------------------------------------------//

  return(
    <AuthContext.Provider 
    value={{ 
      user, 
      handleSignUp, 
      handleSignIn,
      loading 
      }}>
       {children}
    </AuthContext.Provider>
  );
};

export function useAuth(){
  const { 
    user, 
    handleSignUp, 
    handleSignIn, 
    loading } = useContext(AuthContext);
  return(
    {user, handleSignUp, handleSignIn, loading}
  );
}
