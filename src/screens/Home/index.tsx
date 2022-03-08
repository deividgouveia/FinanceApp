import React, { useState } from 'react'
import { 
  Container,
  ViewLogo,
  ViewTitulos,
  List,
  TextNome,
  TextSaldo,
  TextList
} from './styles'; 
import { useAuth } from '../../contexts/auth'
import Header from '../../components/molecules/HeaderHome';


export default function Home() {

  const [historico, setHistorico] = useState([
    {key: '1', tipo:'receita', valor:1200},
    {key: '2', tipo:'despesa', valor:200},
    {key: '3', tipo:'receita', valor:40},
    {key: '4', tipo:'receita', valor:100},
    {key: '5', tipo:'despesa', valor:89.62}
  ]);

  const {user} = useAuth();

  return (
     <Container>
        
        <ViewLogo>
          <Header/>
        </ViewLogo>

        <ViewTitulos>
          <TextNome>Olá, {user.nome}</TextNome>
          <TextSaldo>R$ 000000</TextSaldo>
          <TextList>Últimas movimentações</TextList>
        </ViewTitulos>
 
        <List 
         showsVerticalScrollIndicator={false}
         data={historico}
         keyExtractor={ (item, index) => index.toString()} 
         renderItem={undefined}
        />

     </Container>
  )
}