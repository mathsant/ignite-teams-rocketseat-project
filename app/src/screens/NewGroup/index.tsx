import { useState } from "react";
import { Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Container, ContainerSafe, Content, Icon } from "./styles";
import { Button, Header, Highlight, Input } from "../../components";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  function handleNew() {
    return navigation.navigate("players", { group });
  }

  return (
    <ContainerSafe>
      <Container
        enabled={Platform.OS === "ios" ? true : false}
        behavior="padding"
      >
        <Header showBackButton />

        <Content>
          <Icon />
          <Highlight
            title="Nova turma"
            subTitle="Crie a turma para adicionar as pessoas"
          />

          <Input placeholder="Nome da turma" onChangeText={setGroup} />

          <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
        </Content>
      </Container>
    </ContainerSafe>
  );
}
