import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Button, Alert, ImageBackground} from "react-native";
import { BlurView } from 'expo-blur';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from "./firebase-config";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const uri ='https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'
const profilePicture = 'https://lh3.googleusercontent.com/a/ALm5wu1ZpFltUgM2HaYSihPIlrM5lUq33WrGItgUS6BBag=s288-p-rw-no'
const tiendaPicture= 'https://pr1.nicelocal.com.mx/HJ79-0Arv0LoKHyXIATJcA/640x360,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYn6TCoOlYg22SZg8-SNWJAyJnx2lfSeJsq7fi0PPbjfkkAaSWXsEzc7YwdgUaE2ewvcJ7wJp6Q6pbOSoCJl1PPb236eZYJILbmubTqz4PqJKlBP2W5c3jbUIlZSNOskwJ3lUCAZv0_m-e40Qw9bEScEeOf2V-Mhf3RTaFISY_X0pzZSgMP6NMLHWK67bNkwuxV5CkX2YplV26SQW5hAYcIA3T6-oZV66Qo3pxHP5ymy4De42cpEvT7ozaYaQkfJdtg'
const fondo= 'https://fondosmil.com/fondo/70888.jpg'

function LoginScreen() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

  const app= initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Cuenta Creada!')
      const user = userCredential.user;
      console.log (user)
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Inicio de sesion!')
      const user = userCredential.user;
      console.log (user)
      navigation.navigate('Home');
    })
    .catch(error => {
      console.log(error)
    })
  }
    return (
      <View style={styles.container}>
        <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]}/>
        <View style={{width: 130, height: 130, backgroundColor: '#33FFCE', top: 185, borderRadius:100, position: 'absolute'}}></View>
        <View style={{width: 250, height: 50, backgroundColor: '#A916ED', bottom: 185, position: 'absolute'}}></View>
        <View style={{width: 220, height: 30, backgroundColor: '#EAED16', bottom: 250, position: 'absolute'}}></View>
        <ScrollView contentContainerStyle= {{
          flex:1,
          width: '100%',
          height:'100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <BlurView intensity= {100}>
            <View style={styles.login}>
              <Image source={{ uri: profilePicture }} style={styles.profilePicture}/>
              <View>
              <Text style={{fontSize: 17, fontWeight: '600', color: 'white'}}>E-mail</Text>
              <TextInput onChangeText= {(text) => setEmail(text)} style={styles.input} placeholder="Correo"/>
              </View>
              <View>
              <Text style={{fontSize: 17, fontWeight: '600', color: 'white'}}>Password</Text>
              <TextInput onChangeText= {(text) => setPassword(text)} style={styles.input} placeholder="password"/>
            </View>
            <TouchableOpacity onPress={handleSignIn} style={[styles.button, {bakcgroundColor:'#00CFEB90'}]}>
              <Text style={{fontSize: 20, fontWeight: '600', color: '#F86116'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, {bakcgroundColor:'#6792F090'}]}>
              <Text style={{fontSize: 20, fontWeight: '600', color: '#1BEAE1'}}>Crear Cuenta</Text>
            </TouchableOpacity>
            </View>
          </BlurView>
        </ScrollView>
      </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App(){
  return (
   
      <NavigationContainer>
        <Stack.Navigator initializeRoute= 'Login'>
          <Stack.Screen name = "Login" component={LoginScreen} />
          <Stack.Screen name = "Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
     
  );

  function HomeScreen() {
    return (
      <View style={styles.home}>
        <Image source={{ uri : fondo }} style={[styles.image, StyleSheet.absoluteFill]}/>
              <View style={styles.tienda}>
                <Text style={{fontSize: 35, fontWeight: '800', color: 'red'}}>Bienvenido</Text>
                <Image source={{ uri: tiendaPicture }} style={styles.tiendaPicture}/>
                <View>
                <Text style={{fontSize: 30, fontWeight: '600', color: 'white',top: 75}}>Articulo</Text>
                <TextInput style={styles.input1} placeholder="Buscar producto"/>
                </View>
              <TouchableOpacity style={[styles.button1, {bakcgroundColor:'#00CFEB90'}]}>
                <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>Buscar</Text>
              </TouchableOpacity>
              </View>
          
        </View>
  
    );
  }
}
 const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  home: {
      flex:1,
      alignItems: 'center'
  },
  tienda: {
    flex:1,
    alignItems: 'center',
    top: 80 
},
  image: {
    width: '100%',
    height: '100%',
    resizeMode:'cover',
  },
  login : {
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePicture :{
    width: 100,
    height: 100,
    borderRadius:50,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30
  },
  tiendaPicture :{
    width: 200,
    height: 200,
    borderRadius:100,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 15
  },
  input:{
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20
  },
  input1:{
    width: 300,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 80,
    backgroundColor: '#E6E1DF',
    marginBottom: 20
  },
  button:{
    width: 250,
    height: 40,
    borderRadius:10,
    alignItems: 'center',
    justifyContent:'center',
    marginVertical:10,
    borderColor: '#fff',
    borderWidth: 1,
  },button1:{
    width: 100,
    height: 40,
    borderRadius:10,
    alignItems: 'center',
    justifyContent:'center',
    marginVertical:10,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'red'
  }

});

