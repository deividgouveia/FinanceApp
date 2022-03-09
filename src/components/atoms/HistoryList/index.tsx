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

const HistoryList: React.FC = () => {
  return(
    <Container>

      <Tipo>
        <IconView>
           <Icon 
            name="arrow-up-bold" 
            type="material-community"
            color="#fff"
            size={20}
            tvParallaxProperties={undefined}
           />
        <TipoText>Receita</TipoText>
        </IconView>
        <ValorText>R$ 900</ValorText>
      </Tipo>

      <IconDelete>
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