import React from 'react'
import { 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    TextInput, 
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

export default class Login extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../images/mountain.png')}
                    />
                    <Text style={styles.title}>Travel With Me</Text>
                </View>
                <KeyboardAvoidingView 
                    beahvior='padding'
                    style={styles.formContainer}
                >
                    <View>
                        <TextInput 
                            style={styles.input}
                            placeholder='Username or Email'
                            placeholderTextColor='rgba(255,255,255,0.7)' 
                            />
                        <TextInput 
                            style={styles.input} 
                            placeholder='Password'
                            placeholderTextColor='rgba(255,255,255,0.7)' 
                            secureTextEntry
                        />
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.6
    },
    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10 
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF'
    }
})


// import React from 'react';
// import { Text,TextInput, View, Button, Image, TouchableHighlight, StyleSheet,ImageBackground } from 'react-native';
// // import AppNavigator from '../navigation/AppNavigator';
// import { createStackNavigator } from 'react-navigation';
// // import SignUpScreen from './SignUpScreen'
// // import LoginForm from './LoginForm'

// class LoginScreen extends React.Component {
//     // static navigationOptions = {
//     //     header: null,
//     //   };
    
//     state = {
//         login: false
//     }
        
//     render() {
//         return this.getApp();
//     }
// }

//     getApp(){
//        {
//             return(
//                 <View>

//                 </View>
//         //     <View>
//         //     <Image
//         //    source={require('../res/emoji_smile/party.jpg')}
//         //    style={localStyles.backgroundImage}
//         //    />
//         //    <View style={localStyles.container}>
//         //        <Image
//         //        source={require('../res/emoji_smile/logowhite.png')}
//         //        style={{width:200,height:200,resizeMode:'contain',marginTop:30, marginBottom: -50}}
//         //        />
//         //        <TouchableHighlight style={localStyles.buttons} 
//         //            underlayColor={'#68a0ff'}
//         //            onPress={() => this.props.navigation.navigate('LoginForm')}>
//         //        <Text style={localStyles.buttonText}>Login</Text>
//         //        </TouchableHighlight>
//         //        <TouchableHighlight style={localStyles.buttons} 
//         //            underlayColor={'#68a0ff'}
//         //            onPress={() => this.props.navigation.navigate('SignUp')}>
//         //        <Text style={localStyles.buttonText}>Sign Up</Text>
//         //        </TouchableHighlight>
//         //    </View>
//         // </View>
//             )
//         }
//     }
//   }

//   const RootStack = createStackNavigator(
//     {
//       Login: LoginScreen,
//       SignUp: SignUpScreen,
//       LoginForm: LoginForm
//     },
//     {
//       initialRouteName: 'Login',
//     }
//   );

//   export default class App extends React.Component {
//     render() {
//       return <RootStack />;
//     }
//   }


//   var localStyles = StyleSheet.create({
//     container: {
//         flex: 1, 
//         alignItems: 'center',
//         marginTop:120
//     },
//     backgroundImage: {
//         resizeMode: Image.resizeMode.contain,
//         position: 'absolute'
//       },
//     buttonText: {
//       color:'#fff',
//       textAlign:'center',
//       fontSize : 20
//     },
//     buttons : {
//       height: 60,
//       width: 150,
//       paddingTop:17,
//       paddingBottom:10,
//       marginTop: 10,
//       marginBottom: 10,
//       backgroundColor:'#1ecfc9',
//       borderRadius: 10,
//       borderWidth: 1,
//       borderColor: '#fff',
//     }
//   });
