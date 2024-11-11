import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');


export const styles = StyleSheet.create({
  styledButton: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    color:'#fff',
    fontSize:20,
    fontWeight: "bold"
  },

});
