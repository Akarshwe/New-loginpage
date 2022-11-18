import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export default function App() {
    const [text, setText] = useState('')
    const [text1, setText1] = useState('')

    const [emailid,setEmail] = useState('')
    const [password,setPassword] = useState('')

    setvalue=()=>{
       setEmail(text);
       setPassword(text1)
    }


    return (
        <View>
            <TextInput

                style={{ textAlign: 'center', fontSize: 40, color: 'steelblue' }}
                placeholder="Type here..."
                onChangeText={(text) => {
                    setText(text)

                }} />

            
            <TextInput

                style={{ textAlign: 'center', fontSize: 40, color: 'steelblue' }}
                placeholder="Type here..."
                onChangeText={(text1) => {
                    setText1(text1)
                }} />
                <Button title='click me' onPress={this.setvalue}></Button>
                <Text style={{ textAlign: 'center', fontSize: 20, color: 'red' }}>
                {'\n'}You entered: {emailid}
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'red' }}>
                {'\n'}You entered: {password}
            </Text>


        </View>
    )
}





// import React, { useState } from 'react';
// import { StyleSheet, View, Button, Alert, TextInput, Text  } from 'react-native';

// export default function App() {
//     const [number1, setNumber1] = useState(0);
//     const [number2, setNumber2] = useState(0);
//     const [total, setTotal] = useState(0);

    

//     function addTogether() {
//         const newTotal = number1 + number2;
//         setTotal(newTotal);
//          // total has the old value in the render
//     }

//     function lessTogether() {
//         const newTotal = number1 - number2;
//         setTotal(newTotal);
//     }

//     function multiTogether() {
//         const newTotal = number1 * number2;
//         setTotal(newTotal);
//     }
//     function divTogether(){
//         const newTotal = number1 / number2;
//         setTotal(newTotal);
//     }
//     function perTogether(){
//         const newTotal =( number1*number2 /100);
//         setTotal(newTotal); 
//     }

//     return (
//         <View style={styles.container}>
//             <TextInput style={styles.input}
//                 type="number"
//                 placeholder="0"
//                 value={number1}
//                 onChangeText={v => {
//                     setNumber1(Number.parseInt(v)); // Use parsed value from onChangeText
//                 }}
//             />
//             <TextInput style={styles.input}
//                 type="number"
//                 placeholder="0"
//                 value={number2}
//                 onChange={e => {
//                     setNumber2(Number.parseInt(e.nativeEvent.text)); // or get correct value from nativeEvent onChange
//                 }}
//             />

//             <Text style={styles.input}>{total}</Text>

//             <Text style={styles.cbutton}>
//             <Button style={styles.cbutton} onPress={addTogether} title="+" />
//             <Button style={styles.cbutton} onPress={lessTogether} title="-" />
//             <Button style={styles.cbutton}onPress={multiTogether}title="*" />
//             <Button style={styles.cbutton}onPress={divTogether}title="\" />
//             <Button style={styles.cbutton}onPress={perTogether}title="%"/>
//             </Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//          justifyContent: 'center',
//     },
    
//     input: {
//         width: 100,
//         height:50,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom:20,
//         flex
//     },

//     cbutton :{
//         width: 120,
//         height :50,
//         // justifyContent:'space-between',
//         alignItems :'stretch',
//         borderColor:'#ccc',
//     },
// });