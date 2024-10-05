import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function SecondScreen({ navigation, route }) {
  const search = (value) => {};
  const { name } = route.params;
  const data = [
    { id: 1, title: 'Do home word' },
    { id: 2, title: 'Play game' },
    { id: 3, title: 'Go shipping' },
    { id: 4, title: 'Do exercise' },
    { id: 5, title: 'Do react-native' },
    { id: 6, title: 'Do home word again' },
  ];
  return (
    <ScrollView
      contentContainerStyle={styles.col_center_flex}>
      <View style={styles.space_between_flex}>
        <TouchableOpacity onPress={() => navigation.navigate('First Screen')}>
          <Image source={require('../assets/images/Backspace.png')}></Image>
        </TouchableOpacity>
        <View style={styles.row_right_flex}>
          <Image source={require('../assets/images/Girl_avatar.png')}></Image>
          <View style={styles.col_center_flex}>         
            <Text style={{ fontWeight: 'bold' }}>Hi {name}</Text>
            <Text>Have a nice day!</Text>
          </View> 
        </View>
      </View>
      <View
        style={[
          styles.row_center_flex,
          {  padding: 3, borderRadius: 90 },
        ]}>
        <Image source={require('../assets/images/Search.png')}></Image>
        <TextInput
          style = {
          {borderWidth: 1 }}
          placeholder="Search"
          onChangeText={(value) => search(value)}></TextInput>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={[{ borderWidth: 1 }, styles.row_center_flex]}>
            <Image source={require('../assets/images/Tick.png')}></Image>
            <Text style={{ width: '100%' }}>{item.title}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Third Screen')}>
              <Image source={require('../assets/images/Write.png')}></Image>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.aqua_button}
        onPress={() => navigation.navigate('Third Screen')}>
        +
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  width100: {
    width:"100%"
  },
  row_center_flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
  },
  row_right_flex: {
    flexDirection: 'row',
    justifyContent: 'right',
    alignItems: 'center',
  },
  col_center_flex: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  space_between_flex: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  aqua_button: {
    color: 'white',
    backgroundColor: 'aqua',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    borderRadius: 90,
  },
});
