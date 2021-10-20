import React from 'react'
import { View, TextInput,ImageBackground, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import { isThisTypeNode } from 'typescript';
import bgImage from '../assets/background.jpg';
import Firebase from '../config/Firebase';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

/*function printdata(){
  const myuser= Firebase.database().ref("users");
  myuser.on("value",datasnap=> {
    console.log(datasnap.val())
  })
}*/
function GoToButton({screenName}) {
  const navigation = useNavigation();

  return (
    <View style={styles.btnEnter}>
    <Button style={styles.btnEnterText}
      title={"Logout"}
      color="#F35C3B"
      onPress={() => navigation.navigate(screenName)}
    />
    </View>
    
  );
}
class HomeScreen extends React.Component{
  static navigationOptions={
    headerShown: false
  };  
  printdata(){
    const myuser= Firebase.database().ref("users");
    myuser.on("value",datasnap=> {console.log(datasnap.val())
    })}
  render(){
      return(
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <Text style={styles.welcome}>
            Welcome
          </Text>
          
          <GoToButton screenName="LoginScreen"/>
        </ImageBackground>
      );
    }

  }
export default HomeScreen
const styles= StyleSheet.create({
    backgroundContainer: {
      flex:1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#c0eaff'
    },
    container: {
      flex: 1,
      backgroundColor: '#76303E',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome:{
      fontWeight:"bold",
      fontSize:35,
      color:"#471C25",
      marginBottom:40
    },
    btnEnter:{
      width:"80%",
      backgroundColor:"#BE60A3",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10 
    },
    btnEnterText:{
      color:'white',
      fontWeight:'700'
    }
    
   
  
  });