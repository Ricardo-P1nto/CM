import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

interface BotaoProps {
  text: string;
  onPress: () => void;
}

const HomeScreen = ({ onPress, text }: BotaoProps) => {
  const nome = "Afonso";
  const idade = 25;
  const [email, setEmail] = useState<string>("" as string); // 2 formas de tipificar
  const [curso, setCurso] = useState("Engenharia Informatica");

  console.log(email);
  return (
    <View>
      <Text>{nome}</Text>
      <Text>{idade + 10}</Text>
      {/* <Text>{text}</Text> */}
      <Text>{curso}</Text>
      <Text>{email}</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o email"
      />
      <Button onPress={() => setCurso("Novo Curso")} title={"Botao 1"} />
    </View>
  );
};

export default HomeScreen;
