import React, {useState} from "react";
import { Text, View, TextInput, Button} from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";


export default function Login(){
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput ] = useState('');
    const navigation = useNavigation()

    function hdlLogin(){
        console.log(loginInput, passwordInput);
        navigation.navigate('Home') //replace() => pour pas avoir la possibilitée de revenir sur la page login
        const user = [{loginInput, passwordInput}];

        const URL = "http://localhost:3000/recon/user";
        const OPTIONS = {
           method: 'POST',
           mode: 'cors',
           headers: {"Content-Type": "application/json"},
           body: JSON.stringify(user)
        }
        fetch(URL, OPTIONS)
        .then(resp => resp.text())
        .then(resp => console.log(resp))
        .then(console.log(user))
        .catch(err => console.log(err))
     }


    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Login</Text>
            <View>
                <TextInput style={globalStyles.input} placeholder='Login' value={loginInput} onChange={(e)=>setLoginInput(e.target.value)}/>
                <TextInput style={globalStyles.input} placeholder='Password' value={passwordInput} onChange={(e)=>setPasswordInput(e.target.value)}/>
                <Button title="Valider" onPress={hdlLogin}></Button>
            </View>
        </View>
    )
}