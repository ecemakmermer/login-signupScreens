import React from 'react'
import { View,TextInput, ImageBackground, StyleSheet, Text ,TouchableOpacity} from 'react-native'
import Firebase from '../config/Firebase'
import '@react-native-firebase/auth'
import bgImage from '../assets/background.jpg';

class SignupScreen extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        name:'',
        email: '',
        password: '',
      };
    }
    validateEmail = email => {
      var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
      };
    handleSignUp = () => {
        const { email, password } = this.state
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userData => {
        userData.user.sendEmailVerification();
            console.log(userData);
            
        })
        .then(() => this.props.navigation.navigate('LoginScreen'))
        .catch(error => console.log(error) )
        
    }
    static navigationOptions={
        headerShown: false
    };
    render() {
        //<LoginScreen navigate={this.props.navigation}/>
        return (
          <ImageBackground source={bgImage} style={styles.backgroundContainer}>
              <Text style={styles.welcome}>SIGNUP</Text>
              <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    placeholder='Full Name'
                />
              </View>
              <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                    
                /></View>  
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Password'
                    secureTextEntry={true}
                  />
                </View>
                
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={styles.btnEnterText}>Signup</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

export default SignupScreen

const styles= StyleSheet.create({
    /*backgroundContainer: {
      flex:1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#c0eaff'
    },*/
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
    inputText:{
      height:50,
      color:"black"
    },
    
    btnEnterText:{
      color:'#ffffff',
      fontWeight:'700'
    },
    
    button: {
      width:"80%",
      backgroundColor:"#BE60A3",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10,
      opacity:0.8
  },
   
  
  });
  