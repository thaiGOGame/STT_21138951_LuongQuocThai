import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";

export default function FirstScreen({ navigation }) {
  const [nameValue,setNameValue] = useState("");
  return (  
  <ScrollView contentContainerStyle={[styles.container,styles.col_center_flex]}>
    {/*Images */}
        <Image source = {require("../assets/images/NoteAndPencil.png")}></Image>
        <Text style = {{color:'purple', fontSize : 20}}>MANAGE YOUR TASK</Text>
        <TextInput placeholder = "Enter your name" onChangeText = {(value)=>setNameValue(value)}></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate("Second Screen", {name:nameValue})} style = {styles.aqua_button}> GET STARTED -></TouchableOpacity>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  row_center_flex:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  col_center_flex:{
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  space_between_flex:{
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    gap: 20,
  },
  aqua_button:{
    color: 'white',
    backgroundColor: 'aqua',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    borderRadius: 90,
  }
});