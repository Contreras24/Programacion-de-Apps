import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, Button } from "react-native";

const Products_add = (props) => {
  const [state, setState] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
  });

  const changeText = (key, value) => setState({ ...state, [key]: value });

  const add = () => {
    console.log(state);
    
  };
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        <TextInput
          placeholder="Nombre del producto"
          style={styles.input}
          onChangeText={(value) => changeText("nombre", value)}
        />
      </View>
      <View style={styles.view}>
        <TextInput
          placeholder="Descripción del producto"
          style={styles.input}
          onChangeText={(value) => changeText("descripcion", value)}
        />
      </View>
      <View style={styles.view}>
        <TextInput
          placeholder="Precio del producto"
          style={styles.input}
          onChangeText={(value) => changeText("precio", value)}
        />
      </View>
      <View style={styles.viewButton}>
        <Button
          title="Agregar Producto"
          color="#779000"
          backgroundColor="#ffffff"
          onPress={() => add()}
        />
      </View>
      <View style={styles.viewButton}>
        <Button
          title="Regresar"
          style={styles.button}
          color="#ff7f7f"
          onPress={() => props.navigation.navigate("products")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "#E7D4F2",
  },
  View: {
    flex: 1,
    padding: 10,
  },
  viewButton: {
    flex: 1,
    padding: 5,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 5,
    height: 40,
  },
});

export default Products_add;