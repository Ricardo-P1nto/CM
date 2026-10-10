import { RootStackParamList } from "@/navigation/types";
import { NativeStackScreenProps } from "expo-router/build/react-navigation/native-stack";
import { Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Tarefas">;

const TarefaScreen = () => {
  return (
    <View>
      <Text>Tarefa Screen</Text>
    </View>
  );
};

export default TarefaScreen;
