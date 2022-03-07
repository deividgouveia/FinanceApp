import React, { useContext, useMemo, useState } from "react";
import { useAuth } from "../contexts/auth";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import Preload  from "../screens/Preload";

export function Routes(){
  
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useMemo(() => {
    setIsLoading(() => true);
    setTimeout(() => {
      setIsLoading(() => false);
    }, 1500);
  },[]);

  if(isLoading){
    return <Preload/>
  }

  return !user.uid ? <AuthRoutes/> : <AppRoutes/> 
  
};