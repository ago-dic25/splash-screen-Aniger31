import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  
  
  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // evita que se oculte el splash screen de forma predeterminada
    setTimeout(() => {
      SplashScreen.hideAsync(); // oculta después de 2s
    }, 2000);
  }, []);

  
  return (
    /*Reto 1 */
    /*<ImageBackground
      style={styles.background}
      resizeMode="contain" 
    >
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido a mi App </Text>
      </View>
    </ImageBackground>
     */

    /*Reto 2 */
      <LinearGradient
      colors={["#8B4513", "#D2B48C"]} // de café a beige
      style={styles.background}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido a Mochnut </Text>
      </View>
    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#f5deb3", //beige
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    color: "#333",
  },
});