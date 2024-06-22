import { useState } from "react";
import { Alert, Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Container, ContainerSafe, Content, Icon } from "./styles";
import { Button, Header, Highlight, Input } from "../../components";
import { groupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/AppError";

export function NewGroup() {
  const navigation = useNavigation();

  const [groupName, setGroupName] = useState("");

  async function handleNew() {
    try {
      if (groupName.trim().length <= 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma.");
      }

      await groupCreate(groupName);
      navigation.navigate("players", { group: groupName });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possivel criar um novo grupo.");
        console.log(error);
      }
    }
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

          <Input placeholder="Nome da turma" onChangeText={setGroupName} />

          <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
        </Content>
      </Container>
    </ContainerSafe>
  );
}
