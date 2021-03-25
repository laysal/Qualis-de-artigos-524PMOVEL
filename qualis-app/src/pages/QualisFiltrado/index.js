import React, { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

import Titulo from "../../components/Titulo";
import Botao from "../../components/Botao";

import qualisJson from "../../utils/qualis.json";

import { Container } from "./styles";

export default function QualisFiltrado() {
  const { params } = useRoute();
  const navigation = useNavigation();

  const { id } = params;

  const [qualis, setQualis] = useState([]);
  const [qualisResult, setQualisResult] = useState({});

  function carregaQualis() {
    new Promise(function (resolve, reject) {
      resolve(setQualis(qualisJson));
    }).then(() => {
      const result = qualis.filter((qualis) => qualis.id == id);
      setQualisResult(result[0]);
    });
  }

  useEffect(() => {
    carregaQualis();
  }, [qualis]);

  return (
    <Container>
      <Botao
        style={{ position: "absolute", top: 40, left: 20 }}
        onPress={() => {
          navigation.goBack();
          navigation.reset({ index: 0, routes: [{ name: "Qualis" }] });
        }}
      >
        <Titulo reverse botao style={{ margin: 0 }}>
          {"←"}
        </Titulo>
      </Botao>
      {qualisResult && id && (
        <>
          <Titulo>{`Sigla: ${qualisResult.sigla}`}</Titulo>
          <Titulo reverse>{`Conferência: ${qualisResult.conferencia}`}</Titulo>
          <Titulo>{`Categoria: ${qualisResult.categoria}`}</Titulo>
          <Titulo
            reverse
          >{`Qualis Final: ${qualisResult.qualis_final}`}</Titulo>

          <Titulo>
            Link:{" "}
            <Titulo href={qualisResult.link}>
              {qualisResult.link && qualisResult.link.slice(0, 50) + "..."}
            </Titulo>
          </Titulo>
        </>
      )}
      {!id && <Titulo>Nada para mostrar... ;-;</Titulo>}
    </Container>
  );
}
