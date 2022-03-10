import React from "react";
import { Icon } from "react-native-elements";
import { 
  Container,
  IconView,
  Tipo,
  TipoText,
  ValorText,
  IconDelete
} from "./styles";
import { IDados } from "../../../interfaces";

const HistoryList: React.FC<{data:IDados, deleteItem:Function}> = ({data , deleteItem}) => {
  return(
    <Container>

      <Tipo>
        <IconView tipo={data.tipo}>
           <Icon 
            name={data.tipo === "receita" ? "arrow-up-bold" : "arrow-down-bold"}
            type="material-community"
            color="#fff"
            size={20}
            tvParallaxProperties={undefined}
           />
        <TipoText>{data.tipo}</TipoText>
        </IconView>
        <ValorText>R$ 900</ValorText>
      </Tipo>

      <IconDelete onPress={()=>deleteItem(data)}>
        <Icon 
         name="delete"
         type="material-community"
         color="#1c1c1c"
         size={30}
         tvParallaxProperties={undefined}
        />
      </IconDelete>

    </Container>
  )
}

export default HistoryList;