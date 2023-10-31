import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';





import Login from "./components/LogIn"


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
   <Login/>
  
   
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

