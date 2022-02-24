import React, {createContext, useContext, useState} from "react";
import { 
  getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { app, db } from "../services/firebaseConnection";
import { ref, set } from "firebase/database";
import {IAuthContext} from './types';

interface IUser {
  uid: string
  nome: string
  email: string | null
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({children}) => {

  const [user, setUser] = useState<IUser>({
    uid: '',
    nome: '',
    email: '',
  });

  const auth = getAuth(app);

  //CADASTRAR USUÁRIO---------------------------------------------------------//
  async function handleSignUp
  ({nome, email, password}:{nome:string; email:string; password:string}) {
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
      })
      console.log(user);
      console.log(user.uid);
    })
  
  }
  //--------------------------------------------------------------------------//

  return(
    <AuthContext.Provider value={{ user, handleSignUp }}>
       {children}
    </AuthContext.Provider>
  );
};

export function useAuth(){
  const { user, handleSignUp } = useContext(AuthContext);
  return(
    {user, handleSignUp}
  );
}
