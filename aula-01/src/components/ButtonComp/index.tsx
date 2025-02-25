import { Text, TouchableOpacity } from "react-native";
import { PropsButton } from './type.ts';
import { styles } from "./style";

export const ButtonComp = ({ title, propsBackgroundColor, handleFunction }: PropsButton) => {

  return (
    <TouchableOpacity
      onPress={handleFunction}
      activeOpacity={0.2}
      style={[styles.styledButton, {
        backgroundColor: propsBackgroundColor ? propsBackgroundColor : "red"
      }]}
    >
      <Text style={styles.text}>{title ? title : "Entrar"}</Text>
    </TouchableOpacity>
  )
}