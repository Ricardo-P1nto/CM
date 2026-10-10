// import { StyleSheet, Text, View } from "react-native";

// type cardProps = {
//   tittle: string;
//   description: string;
// };

// function Card({ tittle, description }: cardProps) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.tittle}>{tittle}</Text>
//       <Text style={styles.description}>{description}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#f8f8f8",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   tittle: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   description: {
//     fontSize: 16,
//     color: "#666",
//   },
// });

// export default Card;

import AppButton from "@/components/AppButton";
import { Text, View } from "react-native";

type CardProps = {
  title: string;
  concluida: boolean;
  onConcluir: () => void;
  onDelete: () => void;
};

const Card = ({ title, concluida, onConcluir, onDelete }: CardProps) => {
  return (
    <View
      style={{
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#2b362d",
        backgroundColor: "#79977e",
        borderRadius: 8,
      }}
    >
      <Text
        style={[
          { color: "#fff", fontWeight: "bold", fontSize: 16 },
          concluida && { textDecorationLine: "line-through" },
        ]}
      >
        {title}
      </Text>
      <Text style={{ fontWeight: "bold" }}>
        {concluida ? "Concluída" : "Pendente"}
      </Text>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 5 }}>
        <AppButton
          onPress={onConcluir}
          title={concluida ? "Desmarcar" : "Marcar concluída"}
        />
        <AppButton onPress={onDelete} title="Eliminar" />
      </View>
    </View>
  );
};

export default Card;
