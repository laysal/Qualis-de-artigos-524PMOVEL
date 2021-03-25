import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView } from "react-native";
import { Searchbar, RadioButton, DataTable } from "react-native-paper";

import qualisJson from "../../utils/qualis.json";

import Titulo from "../../components/Titulo";
import Botao from "../../components/Botao";

import Menu from "../../assets/menu.svg";

import { Container } from "./styles";
import { pagination } from "../../utils/pagination";

export default () => {
  const [qualis, setQualis] = useState([]);
  const [qualisFiltrado, setQualisFiltrado] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [page, setPage] = useState(1);
  const [radioChecked, setRadioChecked] = useState("sigla");
  const [searchTerm, setSearchTerm] = useState("");

  const navigation = useNavigation();

  function carregaQualis() {
    setQualis(qualisJson);
  }

  function paginateQualis(array) {
    const { data, numberOfPages: pages } = pagination(array, 5, page);
    setQualisFiltrado(data);
    setNumberOfPages(pages);
  }

  function repaginateQualis(array, currentPage) {
    const { data } = pagination(array, 5, currentPage);
    setQualisFiltrado(data);
  }

  function filterQualis(query) {
    const filtered = qualis.filter((qualis) => {
      if (radioChecked === "sigla") {
        return qualis.sigla.toLowerCase().indexOf(query.toLowerCase()) > -1;
      } else if (radioChecked === "conferencia") {
        return (
          qualis.conferencia.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
      } else {
        return null;
      }
    });

    paginateQualis(filtered);
  }

  useEffect(() => {
    carregaQualis();
    paginateQualis(qualis);
  }, [qualis]);

  return (
    <Container>
      <Botao onPress={() => navigation.openDrawer()}>
        <Menu width={24} height={24} />
      </Botao>
      <Titulo style={{ textTransform: "none" }}>Olá! :)</Titulo>
      <Searchbar
        style={{ marginTop: 20 }}
        placeholder={radioChecked.toUpperCase()}
        onChangeText={(term) => {
          setSearchTerm(term);
          filterQualis(term);
        }}
        value={searchTerm}
      />
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <RadioButton
            value="um"
            status={radioChecked == "sigla" ? "checked" : "unchecked"}
            onPress={() => {
              setRadioChecked("sigla");
            }}
            color="#2f2f2f"
          />
          <Titulo reverse style={{ fontSize: 14 }}>
            Sigla
          </Titulo>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <RadioButton
            value="dois"
            status={radioChecked == "conferencia" ? "checked" : "unchecked"}
            onPress={() => {
              setRadioChecked("conferencia");
            }}
            color="#2f2f2f"
          />
          <Titulo reverse style={{ fontSize: 14 }}>
            Conferência
          </Titulo>
        </View>
      </View>
      <ScrollView
        style={{ marginTop: 20, width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Sigla</DataTable.Title>
            <DataTable.Title>Conferência</DataTable.Title>
            <DataTable.Title></DataTable.Title>
          </DataTable.Header>
          {qualisFiltrado.map((qualis) => (
            <DataTable.Row key={qualis.id}>
              <DataTable.Cell>{qualis.sigla}</DataTable.Cell>
              <DataTable.Cell>{qualis.conferencia}</DataTable.Cell>
              <DataTable.Cell>
                <Botao
                  onPress={() =>
                    navigation.navigate("QualisFiltrado", { id: qualis.id })
                  }
                >
                  <Titulo reverse style={{ fontSize: 10 }}>
                    Ver mais...
                  </Titulo>
                </Botao>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
          <DataTable.Pagination
            page={page}
            numberOfPages={numberOfPages}
            onPageChange={(page) => {
              repaginateQualis(qualis, page + 1);
              if (page > 0) setPage(page);
            }}
            label={`Página ${page} de ${numberOfPages}`}
          />
        </DataTable>
      </ScrollView>
    </Container>
  );
};
