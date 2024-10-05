import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";

export default function FirstScreen({ navigation }) {
  return (  
  <ScrollView contentContainerStyle={styles.container}>
    {/*Images */}
        <Image source = {require("../assets/images/NoteAndPencil.png")}></Image>
        <Text>MANAGE YOUR TASK</Text>
        <TextInput placeholder = "Ebter your name"></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate("SecondScreen")}> GET STARTED -></TouchableOpacity>
        {/*Move to second screen*/}
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  row_center_flex:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  col_center_flex:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  space_between_flex:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    gap: 20,
  },
  }
});