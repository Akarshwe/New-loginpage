import React ,{useState} from "react";
import DropDownPicker from 'react-native-dropdown-picker';

import { StyleSheet, Image, TextInput, Text, View, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, ScrollView } from "react-native";

export default function App() {
    
        const [open, setOpen] = useState(false);
        const [value, setValue] = useState(null);
        const [items, setItems] = useState([
            { label: 'Andhra Pradesh', value: 'andhra pradesh' },
            { label: 'Arunachal Pradesh', value: 'arunachal pradesh' },
            { label:'Assam', value: 'assam'},
            { label:'Bihar', value:'bihar'},
            { label:'Chhattisgarh', value:'chhattisgarh'},
            { label:'Goa', value:'goa'},
            { label:'Kerala', value:'kerala'},
        ]);

        const [openCountry, setopenCountry] = useState(false);
        const [valueCountry, setValueCountry] = useState(null);
        const [itemsCountry, setItemsCountry] = useState([
            { label: 'India', value: 'india' },
            { label: 'China', value: 'china' },
            { label:'Brazil', value: 'brazil'},
            { label:'Colombia', value:'colombia'},
            { label:'Denmark', value:'denmark'},
            { label:'Egypt', value:'egypt'},
            { label:'France', value:'france'}
        ]);

        return (

            <ScrollView>
                <View style={[styles.container]}>
                    <ImageBackground source={require('./assets/artbackground1.webp')} resizeMode="cover" style={styles.backimage}>
                        <View style={styles.mainview}>
                            <View style={styles.logostyle} >
                                <Image style={styles.mlogoimage} source={require("./assets/graphic-designer.png")}></Image>
                            </View>
                            <Text style={styles.signtext}>Signup</Text>
                            <View ><TouchableOpacity activeOpacity={.6} style={styles.touchbtn1}><Text style={styles.fbtn}>Already have account? Login</Text></TouchableOpacity></View>
                            <View style={[styles.signupmain, { flexDirection: 'row' }]} ><View style={styles.mainlogo}><Image style={styles.logoimage} source={require("./assets/user.png")}></Image></View><TextInput style={styles.input1} placeholder="Username" ></TextInput></View>
                            <View style={[styles.signupmain, { flexDirection: 'row' }]} ><View style={styles.mainlogo}><Image style={styles.logoimage} source={require("./assets/mail-inbox-app.png")}></Image></View><TextInput style={styles.input1} placeholder="Email" ></TextInput></View>
                            <View style={[styles.signupmain, { flexDirection: 'row' }]} ><View style={styles.mainlogo}><Image style={styles.logoimage} source={require("./assets/key.png")}></Image></View><TextInput style={styles.input1} placeholder="Password" ></TextInput></View>
                            <View style={[styles.signupmain, { flexDirection: 'row' }]} ><View style={styles.mainlogo}><Image style={styles.logoimage} source={require("./assets/key.png")}></Image></View><TextInput style={styles.input1} placeholder="Confirm Password" ></TextInput></View>
                            <View style={styles.signupmain}>
                                <DropDownPicker style={styles.state}
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    placeholder={"Select a States"}
                                />
                            </View>
                            <View style={styles.signupmain}>
                                <DropDownPicker style={styles.Country}
                                    open={openCountry}
                                    value={valueCountry}
                                    items={itemsCountry}
                                    setOpen={setopenCountry}
                                    setValue={setValueCountry}
                                    setItems={setItemsCountry}
                                    placeholder={"Select a Country"}
                                />
                            </View>
                            <View ><TouchableOpacity activeOpacity={.5} style={styles.touchbtn2}><Text style={styles.Lbtn}>REGISTER NOW</Text></TouchableOpacity></View>
                            <Text style={styles.ortext}>_______________________   Or   _________________________</Text>
                            <View style={[styles.login_social_buttons, { flexDirection: 'row' }]}>
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
            </ScrollView>
        );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input1: {
        fontSize: 19,
        marginBottom: 1,
    },
    fbtn: {
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        marginBottom: 30
    },
    Lbtn: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',

    },
    touchbtn2: {
        borderWidth: 2,
        borderColor: '#1e90ff',
        borderRadius: 5,
        width: "100%",
        height: 50,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signtext: {
        textAlign: "center",
        fontSize: 50,
        color: 'black',
        marginBottom: 10,
        marginTop: 60,
    },
    signupmain: {
        backgroundColor: "#fff",
        borderRadius: 5,
        width: "100%",
        height: 60,
        borderWidth: 2,
        marginBottom: 20,
        borderColor: "#ccc",
        alignItems: "center",
    },
    logoimage: {
        height: 20,
        width: 20,
        marginRight: 30,
        marginTop: 13,
    },
    ortext: {
        marginTop: 30,
        color: "black",
    },
    mainlogo: {
        height: 50,
        marginLeft: 15,
    },
    login_social_icon: {
        height: 50,
        width: 50,
        marginTop: 30,
        marginLeft: 25,
    },
    login_social_buttons: {
        marginBottom: 30

    },
    logostyle: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backimage: {
        flex: 1
    },
    mlogoimage: {
        height: 70,
        width: 70,
        marginTop: 100
    },
    mainview: {
        paddingHorizontal: 20,
    },
    state:{
        borderColor:'white',
        
        fontSize:70,
    },
    Country:{
        borderColor:'white',
        
    },

});





// import React,{useState} from 'react'
// import { View, Text } from 'react-native'
// import DropDownPicker from 'react-native-dropdown-picker';

// const App = () => {

//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState(null);
//     const [items, setItems] = useState([
//         { label: 'Apple', value: 'apple' },
//         { label: 'Banana', value: 'banana' }
//     ]);


//   return (
//     <DropDownPicker
//         open={open}
//         value={value}
//         items={items}
//         setOpen={setOpen}
//         setValue={setValue}
//         setItems={setItems}
//     />
//   )
// }

// export default App