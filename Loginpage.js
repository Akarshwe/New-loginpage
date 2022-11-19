import React from "react";
import { StyleSheet,Image, TextInput,Text, View,TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from "react-native";

export default function App(){


  return (
    <View style={[styles.container]}>
       <ImageBackground source={require('./assets/artbackground1.webp')} resizeMode="cover" style={styles.backimage}>
        <View style={styles.mainview}>
       <View style={styles.logostyle} >
        <Image style={styles.mlogoimage} source={require("./assets/graphic-designer.png")}></Image>
      </View>
        <Text style={styles.Logtext}>Login</Text>
        <View ><TouchableOpacity activeOpacity={.6} style={styles.touchbtn1}><Text style={styles.fbtn}>Don't have an account? sign up</Text></TouchableOpacity></View>
 
      <View style={[styles.loginmain,{flexDirection:'row'}]} ><View style={styles.mainlogo}><Image style={styles.logoimage} source={require("./assets/user.png")}></Image></View><TextInput style={styles.input1} placeholder="Username or Email" ></TextInput></View>
      <View style={[styles.loginmain,{flexDirection:'row'}]} ><View style={styles.mainlogo}><Image style={styles.logoimage} source={require("./assets/key.png")}></Image></View><TextInput style={styles.input1} placeholder="Password" ></TextInput></View>
      <View ><TouchableOpacity activeOpacity={.5}  style={styles.touchbtn2}><Text style={styles.Lbtn}>LOGIN</Text></TouchableOpacity></View>
      <Text style={styles.ortext}>_______________________   Or   _________________________</Text>
      <View style={[styles.login_social_buttons,{flexDirection:'row'}]}>
      <View
              style={
                styles.login_social_button}>
          <TouchableOpacity>
              <Image
                style={styles.login_social_icon}
                source={require('./assets/google.png')}
              />
          </TouchableOpacity>
          </View>
          <View style={styles.login_social_button}>
          <TouchableOpacity>
              <Image
                style={styles.login_social_icon}
                source={require('./assets/facebook.png')}
              />
           
          </TouchableOpacity>
          </View>
          <View style={styles.login_social_button}>
          <TouchableOpacity>
            
              <Image
                style={styles.login_social_icon}
                source={require('./assets/twitter.png')}
              />
          </TouchableOpacity>
          </View>
          <View style={styles.login_social_button}>
          <TouchableOpacity>
            
              <Image
                style={styles.login_social_icon}
                source={require('./assets/apple-logo.png')}
              />
          </TouchableOpacity>
          </View>
        </View>
        </View>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input1:{
    fontSize:19,
    marginBottom:5,
  },
  fbtn:{
    fontSize:15,
    textAlign:'center',
    color:'black',
    marginBottom:30
  },
  Lbtn:{
    fontSize:15,
    textAlign:'center',
    color:'white',

  },
  touchbtn2:{
    borderWidth: 2,
    borderColor: '#1e90ff',
    borderRadius:5,
    width:"100%",
    height:50,
    backgroundColor: '#1e90ff',
    alignItems:'center',
    justifyContent:'center'
  },
  Logtext:{
    textAlign:"center",
    fontSize:50,
    color:'black',
    marginBottom:10,
    marginTop:60,
  },
  loginmain:{
    backgroundColor:"#fff",
    borderRadius:5,
    width:"100%",
    height:60,
    borderWidth:2,
    marginBottom:20,
    borderColor:"#ccc",
    alignItems:"center",
  },
  logoimage:{
    height:20,
    width:20,
   marginRight:30,
    marginTop:13,
  },
  ortext:{
    marginTop:30,
    color:"black",
  },
  mainlogo:{
    height:45,
    marginLeft:15,
  },
  login_social_icon:{
    height:50,
    width:50,
    marginTop:30,
    marginLeft:25,
  },
  backimage:{
    height:760,
  },
  mlogoimage:{
  height:70,
    width:70,
    marginTop:100,
  },
  logostyle:{
    width:'100%',
    height:100,
    alignItems:'center',
    justifyContent:'center',
  },
  mainview:{
    paddingHorizontal:20,
  }
});