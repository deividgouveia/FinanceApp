import React from "react";
import { PickerView } from "./styles";
import { Picker as PickerSelect} from "@react-native-picker/picker";

interface IProps {
    tipo: string
    setTipo: (active: string) => void
}

const Picker: React.FC<IProps> = ({tipo, setTipo}) => {
 return(
    <PickerView>
        <PickerSelect
          style={{
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.10)",
          }}
          selectedValue={tipo}
          onValueChange={(itemValue) => setTipo(itemValue)}
        >
          <PickerSelect.Item label="Receita" value="receita"/>
          <PickerSelect.Item label="Despesa" value="despesa"/>
        </PickerSelect>
    </PickerView>
 );
};

export default Picker;