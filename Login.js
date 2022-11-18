
import React from "react";
import { StyleSheet, TextInput,Text, View,TouchableOpacity, TouchableWithoutFeedback } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 2, backgroundColor: "white" }} />
      <View style={{ flex: 1, backgroundColor: "white" }} ><TextInput style={styles.input1} placeholder="Email" ></TextInput></View>
      <View style={{ flex: 1, backgroundColor: "white" }} ><TextInput style={styles.input1} placeholder="password" ></TextInput></View>
      <View style={{ flex: 1, backgroundColor: "white" }} ><TouchableOpacity activeOpacity={.6} style={styles.touchbtn1}><Text style={styles.fbtn}>forgot password ?</Text></TouchableOpacity></View>
      <View style={{ flex: 1, backgroundColor: "white" }} ><TouchableOpacity activeOpacity={.5}  style={styles.touchbtn2}><Text style={styles.Lbtn}>Login</Text></TouchableOpacity></View>
      <View style={{ flex: 3, backgroundColor: "white" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input1:{
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:13,
    marginLeft: 40, marginRight: 40,
    backgroundColor: 'white',
  },
  fbtn:{
    fontSize:15,
    textAlign:'center',
  },
  Lbtn:{
    fontSize:15,
    textAlign:'center',

  },
  touchbtn2:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:13,
    height:50,
    marginLeft: 40, marginRight: 40,
    backgroundColor: 'ash',
    alignItems:'center',
    justifyContent:'center'
  }

});

export default Flex;