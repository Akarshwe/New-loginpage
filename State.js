// import React,{useState} from "react";
// import { View,Text, Stylesheet,TextInput } from "react-native";
// import vehicle from './components/ Vehicle'


// const Application = () =>
// {
//     const [inputText,setInputText] = usestate('');

//     return(
//         < view style={styles.container}>
{/* <text style={styles.text}>Functional</text>
<vehicle name="car"></vehicle>
<vehicle name="bus"></vehicle>
<text>Text is {inputText}</text>
TextInput style={styles.input}onchangeText={(text)=> setInputText(text)}/>

//         </view> */}
//     );
// };



import React, { useState } from 'react'
import { View, Text, TextInput,} from 'react-native'

export default function App() {
  const [text, setText] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  return (
    <View>
      <TextInput

        style={{ textAlign:'center', fontSize: 40, color: 'steelblue' }}
        placeholder="Type here..."
        onChangeText={(text) => {
          setText(text)
        }}
      />
      <Text style={{ textAlign:'center', fontSize: 20 , color:'green' }}>
        {'\n'}You entered: {text}
      </Text>


      <TextInput

        style={{ textAlign:'center', fontSize: 40, color: 'steelblue' }}
        placeholder="Type here..."
        onChangeText={(text2) => {
          setText2(text2)
        }}
      />
      <Text style={{ textAlign:'center', fontSize: 20 , color:'green' }}>
        {'\n'}You entered: {text2}
      </Text>



      <TextInput

        style={{ textAlign:'center', fontSize: 40, color: 'steelblue' }}
        placeholder="Type here..."
        onChangeText={(text3) => {
          setText3(text3)
        }}
      />
      <Text style={{ textAlign:'center', fontSize: 20 , color:'red' }}>
        {'\n'}You entered: {text3}
      </Text>
    </View>
  )
}