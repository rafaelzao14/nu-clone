import React from "react";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ContainerMain from "./src/components/ContainerMain";
import Header from "./src/components/Header";
import Menu from "./src/components/Menu";
import Tabs from "./src/components/Tabs";
import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
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
  let offset: number = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );
  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened: boolean = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <SafeAreaView>
      <ContainerMain>
        <Header />
        <Content>
          <Menu translateY={translateY} />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}
          >
            <Card
              style={{
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [-350, 0, 380],
                      outputRange: [-50, 0, 380],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              }}
            >
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
          </PanGestureHandler>
        </Content>
        <StatusBar barStyle="light-content" backgroundColor={"#8b10ae"} />
        <Tabs translateY={translateY} />
      </ContainerMain>
    </SafeAreaView>
  );
}
