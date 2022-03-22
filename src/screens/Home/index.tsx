import React, { useEffect, useState } from 'react'
import { 
  Container,
  ViewLogo,
  ViewTitulos,
  List,
  TextNome,
  TextSaldo,
  TextList,
  ViewList,
  ViewTituloList,
  CalendarIcon
} from './styles';
import { 
  child,
  equalTo, 
  limitToFirst, 
  onValue, 
  orderByChild, 
  query, 
  ref, 
  remove,
  update
} from 'firebase/database'; 
import { useAuth } from '../../contexts/auth'
import Header from '../../components/molecules/HeaderHome';
import HistoryList from '../../components/atoms/HistoryList';
import { Alert, ScrollView } from 'react-native';
import { format, isBefore } from 'date-fns';
import Toast from 'react-native-toast-message';
import { db } from '../../services/firebaseConnection';
import { Icon } from 'react-native-elements';
import DatePicker from 'react-native-date-picker';

interface IDados{
  key: string | null
  tipo: string
  valor: string 
  data: string
} 

export default function Home() {

  const [historico, setHistorico] = useState<IDados[]>([]);
  const [saldo, setSaldo] = useState(0);
  const [newDate, setNewDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const {user: usuario} = useAuth();

  useEffect(()=>{
    async function loadList(){
     
    //MOSTRAR SALDO EM TEMPO REAL---------------------------------------------//
      const uid = usuario.uid;
      const saldoAtual = await ref(db, 'users/' + uid);
      onValue(saldoAtual, (snapshot) => {
        let data = snapshot.val().saldo;
        setSaldo(data);
      });
    //------------------------------------------------------------------------//

    //MOSTRAR LISTA DE MOVIMENTAÇÕES------------------------------------------//
      const historicoAtual = 
      await query(ref(db, 'historico/' + uid), 
      limitToFirst(10),
      orderByChild('date'),
      equalTo(format(newDate, 'dd/MM/yyyy')));
      onValue(historicoAtual, (snapshot) => {
         if(snapshot.exists()){
           setHistorico([]);
           snapshot.forEach((chilItem)=>{
            let hisData = {
              key: chilItem.key,
              tipo: chilItem.val().tipo,
              valor: chilItem.val().valor,
              data: chilItem.val().date
            };
            setHistorico(oldArray => [...oldArray, hisData].reverse());
           })
         }
      });
    //------------------------------------------------------------------------//  
    }
    loadList();  
    console.log(newDate)
  },[newDate])
  
  function handleDelete(data:IDados){

    //Pegando data do item:
    const [diaItem, mesItem, anoItem] = data.data.split('/');
    const dataItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);

    //Pegando data de hoje:
    const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
    const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
    const dataHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`);

    if(isBefore(dataItem, dataHoje)){
      //Se a data do registro for anterior a data atual
      Alert.alert("Excluir","Você não pode excluir um registro antigo!")
      return;
    };

    Alert.alert(
      "Excluir",
      `Você deseja excluir: ${data.tipo} - Valor: ${data.valor}`,
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Continuar', onPress: () => handleDeleteSuccess(data)}
      ]
      )
  };
  
  //EXCLUIR REGISTRO----------------------------------------------------------//
  async function handleDeleteSuccess(data:IDados){
     
     const uid = usuario.uid;
     await remove(child(ref(db), 'historico/' + uid + '/' + data.key))
     .then(async()=>{
       
       //ATUALIZAR SALDO APÓS EXCLUIR UM REGISTRO-----------------------------// 
       let saldoAtual = saldo;
       data.tipo === 'despesa' ? 
       saldoAtual += parseFloat(data.valor) 
       : 
       saldoAtual -= parseFloat(data.valor);

       await update(ref(db, 'users/' + uid + '/'),{
         saldo: saldoAtual
       })

       const findHistorico = historico.filter(item => item.key != data.key)
       setHistorico(findHistorico);

       Toast.show({
        type: 'info',
        position: 'bottom',
        text1: 'Valor excluído com sucesso!',
        text2: 'check-circle'
      })
      //----------------------------------------------------------------------//
     })
     .catch((error)=>{console.log(error)})
  };
  //--------------------------------------------------------------------------//
  
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
        </ViewTitulos>
        
        <ViewList>
          <ViewTituloList>
            <TextList>Últimas movimentações</TextList> 
            <CalendarIcon onPress={() => setOpen(true)}>
              <Icon 
               name='calendar-week'
               type='material-community'
               size={30} 
               color="#fff"
               tvParallaxProperties={undefined}              
              />
            </CalendarIcon> 
          </ViewTituloList>
          <List 
          showsVerticalScrollIndicator={false}
          data={historico}
          keyExtractor={ (item, index) => index.toString()} 
          renderItem={({item}) => (
            <HistoryList data={item} deleteItem={handleDelete}/>
          )}
          />
        </ViewList>

        <>
        <DatePicker
        modal
        open={open}
        date={newDate}
        onConfirm={(date) => {
          setOpen(false)
          setNewDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        />
        </>

      </Container>
     </ScrollView>
  )
}