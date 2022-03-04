import React, {createContext, useContext, useEffect, useState} from "react";
import { 
  getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { app, db, dbRef } from "../services/firebaseConnection";
import { ref, set, get, child } from "firebase/database";
import {IAuthContext} from './types';
import { ToastAndroid } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      .then(async(snapshot)=>{
        console.log(snapshot.val().nome)
         let data = {
           uid: userId,
           nome: snapshot.val().nome,
           email: userEmail
         };
         await AsyncStorage.setItem('@FinanceApp:User', JSON.stringify(data));
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
      .then(async()=>{
        let data = {
          uid: userId,
          nome: nome,
          email: userEmail
        };
        await AsyncStorage.setItem('@FinanceApp:User', JSON.stringify(data));
        setUser(data);
        setLoadign(false);
      })
    })
    .catch((error)=>{
      ToastAndroid.show('Error:',error.code);
    });
  
  }
  //--------------------------------------------------------------------------//

  //DESLOGAR USUÁRIO----------------------------------------------------------//
  async function handleLogout(){
     await signOut(auth)
     await AsyncStorage.clear()
     .then(()=>{
       setUser({
         uid: '',
         nome: '',
         email: ''
       });
     })
  }  
  //--------------------------------------------------------------------------//

  useEffect(()=>{
      async function loadStorage(){
        const storageUser = await AsyncStorage.getItem('@FinanceApp:User');
        
        if(storageUser){
           setUser(JSON.parse(storageUser));   
        }
      }
      loadStorage();
  },[]);

  return(
    <AuthContext.Provider 
    value={{ 
      user, 
      handleSignUp, 
      handleSignIn,
      handleLogout,
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
    handleLogout,
    loading 
  } = useContext(AuthContext);
  return(
    {user, handleSignUp, handleSignIn, handleLogout, loading}
  );
}
