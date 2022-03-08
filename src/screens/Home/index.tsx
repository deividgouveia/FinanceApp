import React, { useEffect } from 'react'
import { 
  Container,
  ViewLogo,
  ViewTitulos,
  ViewList,
  TextNome,
  TextSaldo
} from './styles'; 
import { useAuth } from '../../contexts/auth'


export default function Home() {

  const {user, handleLogout} = useAuth();
  
  return (
     <Container>
       
     </Container>
  )
}