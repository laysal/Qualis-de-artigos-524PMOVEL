import React from "react";
import { useNavigation } from "@react-navigation/native";

import WecolmeSvg from "../../assets/welcome.svg";

import Botao from "../../components/Botao";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";

import { Container } from "./styles";

export default () => {
  const navigation = useNavigation();

  return (
    <Container>
      <WecolmeSvg width={"40%"} height={"40%"} />
      <Titulo>Seja bem-vindo!</Titulo>
      <Paragrafo>
        O QualisApp é um aplicativo desenvolvido com o intuito de facilitar a
        busca dos periódicos e qualis de artigos, aglomerando as informações em
        um só lugar!
      </Paragrafo>
      <Botao onPress={() => navigation.navigate("Drawer")}>
        <Titulo reverse botao>
          Continuar
        </Titulo>
      </Botao>
    </Container>
  );
};
