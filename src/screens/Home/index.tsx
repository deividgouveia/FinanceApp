import React, { useEffect, useState } from 'react'
import { 
  Container,
  ViewLogo,
  ViewTitulos,
  List,
  TextNome,
  TextSaldo,
  TextList,
  ViewList
} from './styles'; 
import { useAuth } from '../../contexts/auth'
import Header from '../../components/molecules/HeaderHome';
import HistoryList from '../../components/atoms/HistoryList';
import { ScrollView } from 'react-native';
import { child, onValue, ref } from 'firebase/database';
import { db } from '../../services/firebaseConnection';

interface IDados{
  key: string | null
  tipo: string
  valor: number
  data: string
} 

export default function Home() {

  const [historico, setHistorico] = useState<IDados[]>([]);
  const [saldo, setSaldo] = useState(0);

  const {user: usuario} = useAuth();

  useEffect(()=>{
    async function loadList(){
       
      const uid = usuario.uid;
      const saldoAtual = await ref(db, 'users/' + uid);
      onValue(saldoAtual, (snapshot) => {
        let data = snapshot.val().saldo;
        setSaldo(data);
      })
    }
    loadList();  
  },[])

  return (
    <ScrollView style={{backgroundColor: "#ffffff"}}>
      <Container>
        
        <ViewLogo>
          <Header/>
        </ViewLogo>

        <ViewTitulos>
          <TextNome>Olá, {usuario && usuario.nome}</TextNome>
          <TextSaldo>
            R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
          </TextSaldo>
          <TextList>Últimas movimentações</TextList>
        </ViewTitulos>
        
        <ViewList>
        <List 
         showsVerticalScrollIndicator={false}
         data={historico}
         keyExtractor={ (item, index) => index.toString()} 
         renderItem={({item}) => (
           <HistoryList data={item}/>
         )}
        />
        </ViewList>

      </Container>
     </ScrollView>
  )
}