import React from "react";
import { Icon } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native";
import { 
  Container,
  IconView,
  Tipo,
  TipoText,
  ValorText,
} from "./styles";

interface IDados{
  key: string | null
  tipo: string
  valor: string
  data: string
} 

const HistoryList: React.FC<{
  data:IDados, 
  deleteItem: Function
}> = ({data, deleteItem}) => {

  return(
    <TouchableWithoutFeedback onLongPress={() => deleteItem(data)}>
      <Container>
        <Tipo>
          <IconView tipo={data.tipo}>
            <Icon 
              name={data.tipo === "receita" ? 
              "arrow-up-bold" : "arrow-down-bold"}
              type="material-community"
              color="#fff"
              size={20}
              tvParallaxProperties={undefined}
            />
          <TipoText>{data.tipo}</TipoText>
          </IconView>
          <ValorText>R$ {data.valor}</ValorText>
        </Tipo>
      </Container>
    </TouchableWithoutFeedback>
  )
}

export default HistoryList;