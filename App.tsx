import React from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ContainerMain from "./src/components/ContainerMain";
import Header from "./src/components/Header";
import Tabs from "./src/components/Tabs";
import {
  Annotation,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Content,
  Description,
  SafeAreaView,
  Title,
} from "./styleApp";

export default function App() {
  return (
    <SafeAreaView>
      <ContainerMain>
        <Header />
        <Content>
          <Card>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>

            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 5.678,09</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                Transfêrencia de R$ 5.678.00 recebido de Nota Paraná
              </Annotation>
            </CardFooter>
          </Card>
        </Content>
        <StatusBar barStyle="light-content" backgroundColor={"#b10aeb"} />
        <Tabs />
      </ContainerMain>
    </SafeAreaView>
  );
}
