import { Alert, Image, ImageBackground, Text, View } from "react-native";
import { ButtonComp } from "../../components/ButtonComp";
import AvatarImage from '../../../assets/Rodrigo.jpg';
import BackgroundImage from '../../../assets/teteu.jpg';
import { styles } from "./style";
import React from "react";

export const Login = () => {

  const hanldeLogin = () => {
    Alert.alert("Botão para realizar login");
    console.log('Pegando informações')
  }

  const handleRegister = () => {
    Alert.alert("Botão cadastrar");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={BackgroundImage}
        alt="Imagem de fundo"
      >

        <Image style={styles.avatarImage} source={AvatarImage} alt="Avatar de perfil" />
        <Text style={styles.estiloTexto}>
          Login
        </Text>

        <View style={styles.boxForms}>
          <ButtonComp handleFunction={hanldeLogin} title="Login" propsBackgroundColor="#5689" />
          <ButtonComp handleFunction={handleRegister} title="Cadastrar" propsBackgroundColor="#5689" />
        </View>

        {/* <Button title="Botão native" color="red" /> */}
      </ImageBackground>
    </View>
  )
}