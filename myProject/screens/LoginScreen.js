import React,{Component} from 'react'
import { View, TextInput,Alert, ImageBackground,StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import Firebase from '../config/Firebase';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import bgImage from '../assets/background.jpg';


function GoToButton({screenName}) {
  const navigation = useNavigation();

  return (
    <View style={styles.btnEnter}>
    <Button style={styles.btnEnterText}
      title={"Don't you have account yet? Signup"}
      color="#BE60A3"
      onPress={() => navigation.navigate(screenName)}
    />
    </View>
    
  );
}

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isValidUser: true,
      isValidPassword: true,
    }
    }

    createButtonAlert = () =>
    Alert.alert(
      "Error",
      "Wrong email or password...",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  

    _signin=() =>{
      const { email, password } = this.state
  
          Firebase.auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => this.props.navigation.navigate('HomeScreen'))
              .catch(error => {this.createButtonAlert})
               
               
    }
      renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
              <InputText
                  onChangeText={onChange}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  secureTextEntry={secureTextEntry}
                  label={label}
                  {...restInput} />
            {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
  }
    render(){
      return(
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <Text style={styles.welcome}>LOGIN</Text>
          <View style={styles.inputView}>
          <TextInput
            style={styles.InputText}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email)=> this.setState({email})} 
            autoCapitalize='none'
            placeholderTextColor="#003f5c"
            />
          </View>
          <View style={styles.inputView}>
          <TextInput
            style={styles.InputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            value={this.state.password}
            onChangeText={(password)=>this.setState({password})}
            secureTextEntry={true}
          />
          </View>
          
          <TouchableOpacity
            style={styles.btnEnter}
            onPress={this._signin}
          >
            <Text style={styles.btnEnterText}>ENTER</Text>
          </TouchableOpacity>
          
          <GoToButton screenName="SignupScreen" />
        </ImageBackground>
      );
    }

  }

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
    inputView:{
      width:"80%",
      backgroundColor:"white",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20,
      opacity:0.8
    },
    InputText:{
      
      height:50,
      color:"black"
      
    },
    btnEnter:{
      width:"80%",
      backgroundColor:"#BE60A3",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10 ,
      opacity:0.8
    },
    btnEnterText:{
      color:'white',
      fontWeight:'700'
    },
   
  
  });
 

  export default LoginScreen