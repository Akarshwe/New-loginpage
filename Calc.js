
import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  function addTogether() {
    const newTotal = parseInt(number1) + parseInt(number2);
    setTotal(newTotal);
    
}

function lessTogether() {
    const newTotal = parseInt(number1) - parseInt(number2);
    setTotal(newTotal);
}

function multiTogether() {
    const newTotal = parseInt(number1) * parseInt(number2);
    setTotal(newTotal);
}
function divTogether(){
    const newTotal =parseInt(number1) / parseInt(number2);
    setTotal(newTotal);
}
  
    return (
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
        <View style={{ flex: 3, backgroundColor: "green" }}><Text style={styles.text1}>calculator</Text></View>
        <View style={{ flex: 1, backgroundColor: "green" }}><Text style={styles.text2}>Enter first number</Text></View>
        <View style={{ flex: 2, backgroundColor: "green" }}><TextInput style={styles.input1} placeholder="0" 
        onChangeText={(v) => setNumber1(v)}>
        </TextInput></View>
        <View style={{ flex: 1, backgroundColor: "green" }} ><Text style={styles.text3}>Enter second number</Text></View>
        <View style={{ flex: 2, backgroundColor: "green" }}><TextInput style={styles.input2} placeholder="0" 
        onChangeText={(e) => setNumber2((e))}>
        </TextInput></View>
        <View style={{ flex: 2, backgroundColor: "green", flexDirection: "row" }} >
          <TouchableOpacity onPress={addTogether} style={styles.touchbtn1}><Text style={styles.btn1}>+</Text></TouchableOpacity>
          <TouchableOpacity onPress={lessTogether} style={styles.touchbtn2}><Text style={styles.btn2}>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={multiTogether} style={styles.touchbtn3}><Text style={styles.btn3}>X</Text></TouchableOpacity>
          <TouchableOpacity onPress={divTogether} style={styles.touchbtn4}><Text style={styles.btn4}>/</Text></TouchableOpacity>
        </View>
        <View style={{ flex: 1, backgroundColor: "green" }}><Text style={styles.text4}>Total</Text></View>
        <View style={{ flex: 2, backgroundColor: "green" }} >
          <TextInput style={styles.input1} placeholder="Result" >{total}</TextInput>

        </View>
      </View>
    );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text1: {
    fontSize: 70,
    color: 'white',
    textAlign: 'center'
  },
  text2: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  text3: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center'
  },
  text4: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  input1: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 40, marginRight: 40,
    backgroundColor: 'orange',

  },
  input2: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 40, marginRight: 40,
    backgroundColor: 'orange',
  },

  touchbtn1: {
    backgroundColor: "green",
    color: 'lightgreen',
    fontSize: 100,
    borderWidth: 1,
    borderColor: 'green',
    width: 60,
    marginLeft: 40,
    height: 60,
  },

  touchbtn2: {
    backgroundColor: "green",
    color: 'lightgreen',
    fontSize: 100,
    borderWidth: 1,
    borderColor: 'green',
    width: 60,
    marginLeft: 25,
    height: 60,
  },

  touchbtn3: {
    backgroundColor: "green",
    color: 'lightgreen',
    fontSize: 100,
    borderWidth: 1,
    borderColor: 'green',
    width: 60,
    height: 60,
    marginLeft: 25,
  },
  touchbtn4: {
    backgroundColor: "green",
    color: 'lightgreen',
    fontSize: 100,
    borderWidth: 1,
    borderColor: 'green',
    marginLeft: 25,
    width: 60,
    height: 60,
  },

  btn1: {
    fontSize: 40,
    textAlign: 'center',
    color: 'orange',
  },
  btn2: {
    fontSize: 40,
    textAlign: 'center',
    color: 'orange',
  },
  btn3: {
    fontSize: 40,
    textAlign: 'center',
    color: 'orange',
  },
  btn4: {
    fontSize: 40,
    textAlign: 'center',
    color: 'orange',
  }
});

// export default Flex;