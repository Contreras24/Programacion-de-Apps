import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import products from "./views/Products";
import products_add from "./views/Products_add";

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="products"
        component={products}
        options={{
          title: "Listado de Productos",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="products_add" component={products_add} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
