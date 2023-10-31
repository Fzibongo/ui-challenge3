import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import '@expo/snack-static/react-native-logo.png'

function Login() {
  return (
   <View> 

   <Image  style= {styles.Img}
     
        source={require('../assets/icons8-mic-50.png')}
      />

      <Text style={styles.WelcomeText}>    WELCOME TO  </Text>

       <Text style={styles.Welcomeapp}>   <Text  style={styles.MusicHeading}> Music </Text> <Text style={styles.AppText}>App</Text>   </Text>



      <View>
      <TouchableOpacity style={styles.btn}>
      <Text style={styles.LoginText}>LogIn</Text>
      
      </TouchableOpacity>
      </View>
 
       <View>
      <TouchableOpacity style={styles.btn}>
      <Text style={styles.LoginText}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.biometric}>Or quick login  {'\n'} with Touch ID</Text>

      <Image
        style={styles.fingerprint}
        source={require('../assets/icons8-fingerprint-50.png')}
      />

      
      </View>

      
   
   
   </View >
  );
}
const styles = StyleSheet.create({

Img: {
  marginLeft:160
},

WelcomeText: {
  color:'black',
  fontSize:15,
  marginLeft:127,
  paddingTop:30,
} ,
Welcomeapp:{
   color:'black',
  fontSize:35,
  marginLeft:70,
  paddingBottom:50

},

MusicHeading: {
  fontWeight:'bold'
},

AppText: {
  marginRight:40
},

btn: {
  width:170,
  height:40,
  backgroundColor:'black',
  borderRadius:20,
  marginLeft:110,
  paddingLeft:30,
  paddingTop:10 ,
  marginTop:5
},

LoginText: {
  color: 'white',
  paddingLeft:25
},

biometric:{
paddingLeft:150,
paddingTop:30,
paddingBottom:30
},

fingerprint: {
  marginLeft:180
}
})

export default Login;
