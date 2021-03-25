import React, { Component } from "react";
import { ScrollView } from "react-native";

import Titulo from "../../components/Titulo";
import Botao from "../../components/Botao";
import DuvidaBox from "../../components/DuvidaBox";
import Subtitulo from "../../components/Subtitulo";
import Paragrafo from "../../components/Paragrafo";

import Menu from "../../assets/menu.svg";

import { Container } from "./styles";

export default class Duvidas extends Component {
  render() {
    return (
      <Container>
        <Botao onPress={() => this.props.navigation.openDrawer()}>
          <Menu height={24} width={24} />
        </Botao>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Titulo style={{ textAlign: "left" }}>Dúvidas</Titulo>
          <DuvidaBox>
            <Subtitulo>O que é qualis capes?</Subtitulo>
            <Paragrafo duvida dark>
              O Qualis Capes é um sistema que faz a classificação da produção
              científica dos programas de pós-graduação brasileiros, no que diz
              respeito aos artigos publicados em diversos periódicos, revistas,
              anais e livros científicos, englobando todas as áreas do
              conhecimento. O método de análise foi criado para classificar a
              qualidade dos artigos stricto sensu e das pesquisas científicas.
              Como resultado, uma lista com a classificação é disponibilizada e
              pode ser acessada por quem deseja conhecer os periódicos que
              apresentam um bom conteúdo. Isso significa que, consequentemente,
              o Qualis também tem o objetivo de garantir uma maior qualidade à
              formação de mestres e doutores do País. Além de identificar
              assimetrias regionais e de áreas estratégicas para criar e
              expandir programas de pós-graduação no Brasil. Para isso, foi
              desenvolvida uma ferramenta com critérios de avaliação dessa
              produção científica.
            </Paragrafo>
          </DuvidaBox>
          <DuvidaBox>
            <Subtitulo>Como funciona a classificação?</Subtitulo>
            <Paragrafo duvida dark>
              A classificação ainda é feita pelos comitês compostos por
              consultores de cada área de avaliação. Os critérios são
              previamente definidos pela área e aprovados pelo Conselho
              Técnico-Científico da Educação Superior (CTC-ES). Para isso, os
              membros buscam refletir a importância relativa dos diversos
              periódicos para uma determinada área. Todos os critérios, tanto os
              específicos quanto os gerais, usados em cada campo de avaliação
              são fornecidos nos respectivos Documentos de Área da Capes. Todo
              ano, a classificação Qualis passa por um processo de atualização.
              Isso é importante porque, com frequência, aparecem novos
              periódicos, das mais diversas áreas. Porém, existe uma
              categorização básica, que varia de acordo com indicativos de
              qualidade. Esses indicadores vão de A1 — mais elevado —, passando
              por A2, B1, B2, B3, B4, B5, até C — com peso zero. O Qualis Capes
              para periódicos é caracterizado e estratificado da seguinte forma:
              A1 e A2: contempla periódicos de excelência internacional; B1 e
              B2: abrange os periódicos de excelência nacional; B3, B4, e B5:
              considera os periódicos de média relevância; C: contempla
              periódicos de baixa relevância, ou seja, considerados não
              científicos e inacessíveis para avaliação.
            </Paragrafo>
          </DuvidaBox>
          <DuvidaBox>
            <Subtitulo>
              Quais são os critérios de avaliação para um periódico?
            </Subtitulo>
            <Paragrafo duvida dark>
              Os critérios usados para avaliar um periódico são: Qualidade dos
              artigos: é necessário ter relevância para a sociedade,
              originalidade, um bom nível científico e ser bem escrito;
              Periodicidade: periódicos e revistas mais antigos no mercado
              passam mais credibilidade. Além disso, a frequência das
              publicações também ajuda a melhorar a classificação; Qualidade do
              corpo editorial: esse ponto é relativo à equipe que analisa os
              artigos publicados no periódico; Diversidade de origens do
              trabalho: para receber uma classificação melhor, o periódico deve
              ter de autores institucionais e internacionais; Difusão e
              popularidade da revista: quanto mais conhecido, melhor para o
              periódico, pois passa uma maior credibilidade; Indexação: esse
              ponto faz com que os dados e informações sejam facilmente
              recuperados, caso alguém faça uma pesquisa em um sistema de
              informação. Para ter uma boa indexação, é importante que o
              periódico seja acessível e de qualidade.
            </Paragrafo>
          </DuvidaBox>
        </ScrollView>
      </Container>
    );
  }
}
