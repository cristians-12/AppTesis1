import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { servo } from "../api/api";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>App Dosificador</Text>
      <Text style={styles.color}>Programar hora para dosificación</Text>
      <View style={styles.contInputs}>
        <TextInput style={styles.input} autoComplete="" />
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity
        style={styles.boton}
        onPress={async (e) => {
          e.preventDefault();
          try {
            const response = await servo(1);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Text style={styles.botonText}>Mover servo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  botonText: {
    fontWeight: "bold",
    // fontFamily: "Poppins",
    color: "white",
    textAlign:'center'
  },
  boton: {
    backgroundColor: "#7B78AA",
    padding: "10px",
    marginTop: "10px",
    borderRadius: 10,
    marginTop:10,
    width:100,
    textAlign:"center"
  },
  Titulo: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: "5%",
    fontSize: 30,
    // fontFamily: "Poppins",
  },
  container: {
    flex: 1,
    backgroundColor: "#19173D",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    // fontFamily: "Poppins",
  },
  color: {
    color: "white",
    // fontFamily: "Poppins",
  },
  input: {
    backgroundColor: "#7B78AA",
    padding: "10px",
    borderWidth: 1,
    borderColor: "white",
    width: 50,
    borderRadius: 10,
    marginTop:5,
  },
  contInputs: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "20px",
    gap: 2,
  },
});
