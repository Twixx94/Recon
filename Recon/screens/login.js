import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";


export default function Login(){
    const navigation = useNavigation()
    function navigator(){
        navigation.navigate('Home') //replace() => pour pas avoir la possibilitée de revenir sur la page login
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Login</Text>
            <View>
                <TextInput style={globalStyles.input} placeholder='Login'/>
                <TextInput style={globalStyles.input} placeholder='Password'/>
                <Button title="Valider" onPress={navigator}></Button>
            </View>
        </View>
    )
}