import React, {useState} from "react";
import { StyleSheet, TextInput,Text, View,TouchableOpacity, ScrollView, ImageBackground,Image } from "react-native";

export default function App(){
  const [text,setText]=useState('')
  const [text1,setText1]=useState('')
  const [text2,setText2]=useState('')
  const [text3,setText3]=useState('')
  const [text4,setText4]=useState('')

  const [userid,setuser]=useState('')
  const [place,setplace]=useState('')
  const [phone,setphone]=useState('')
  const [emailid,setEmail]=useState('')
  const [password,setPassword]=useState('')

  setvalue=()=>{
    setuser(text);
    setplace(text1);
    setphone(text2);
    setEmail(text3);
    setPassword(text4);
  }

  return (
    //<ScrollView>
    <View style={[styles.container]}>
        <ImageBackground source={require('./assets/background1.jpeg')} resizeMode="cover" style={styles.image}>
          <View style={styles.mainview}>
      <View style={styles.logostyle} >
        <Image style={styles.logoimage} source={require("./assets/logo1.jpeg")}></Image>
      </View>
      <View style={styles.input} ><TextInput style={styles.input1} placeholder="User id" onChangeText={(Text)=>{
        setText(Text)}}  ></TextInput></View>
      <View style={styles.input} ><TextInput style={styles.input1} placeholder="Place"  onChangeText={(Text1)=>{
        setText1(Text1)}}></TextInput></View>
      <View style={styles.input} ><TextInput style={styles.input1} placeholder="Phone"  onChangeText={(Text2)=>{
        setText2(Text2)}} ></TextInput></View>
      <View style={styles.input} ><TextInput style={styles.input1} placeholder="Email"onChangeText={(Text3)=>{
        setText3(Text3)}} ></TextInput></View>
      <View style={styles.input} ><TextInput style={styles.input1} placeholder="password" onChangeText={(Text4)=>{
        setText4(Text4) }}></TextInput></View>
      <View  ><TouchableOpacity activeOpacity={.6}  style={styles.touchbtn1}><Text style={styles.fbtn}>forgot password ?</Text></TouchableOpacity></View>
      <View  ><TouchableOpacity activeOpacity={.5}  style={styles.touchbtn2} onPress={this.setvalue}><Text style={styles.Lbtn}>Login </Text></TouchableOpacity></View>
      <View  />
      <View >
        <Text style={styles.output}>{'\n'}you entered:{userid}</Text>
        <Text style={styles.output}>{'\n'}you entered:{place}</Text>
        <Text style={styles.output}>{'\n'}you entered:{phone}</Text>
        <Text style={styles.output}>{'\n'}you entered:{emailid}</Text>
        <Text style={styles.output}>{'\n'}you entered:{password}</Text>
      </View>
      </View>
    </ImageBackground>
    </View>
    //</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  mainview:{
paddingHorizontal:20
  },
  input1:{
    height:50,
    flex:1,
    padding:10,
    marginLeft:20,
    
  },
  fbtn:{
    fontSize:15,
    textAlign:'center',
  },
  Lbtn:{
    color:'white',
    fontSize:15,
    alignItems:'center',

  },
  touchbtn2:{
    width: "100%",
    borderRadius:5,
    height:50,
    alignItems:"center",
    marginTop:20,
    backgroundColor:"#ccc",
    justifyContent:"center",
  },
  output:{
    fontSize:18,
    color:'white',
  },
  image:{
    flex:1,
    justifyContent:"center",
  },
  logostyle:{
    width:'100%',
    height:100,
    alignItems:'center',
    justifyContent:'center',
  },
  logoimage:{
    height:100,
    width:100,
    marginBottom:30,

  },
  input:{
    backgroundColor:"#fff",
    borderRadius:10,
    width:"100%",
    height:45,
    borderWidth:2,
    marginBottom:20,
    borderColor:"#ccc",
    alignItems:"center",
  },


});