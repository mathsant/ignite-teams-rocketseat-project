import { registerRootComponent } from "expo";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import { Groups, NewGroup, Players } from "@screens/index";
import { Loading } from "@components/Loading";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}

registerRootComponent(App);
