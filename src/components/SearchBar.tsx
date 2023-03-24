import * as React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const SearchBar = (props: any) => {
  return (
    <View style={styles.container}>
      <EvilIcons name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor="#7c8184"
        onChangeText={props.onTermChange}
        onEndEditing={props.onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dbdce1',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 10
  },
  text: {
    color: '#000',
  },
  textInput: {
    color: '#000',
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 5,
    color: '#656568',
  },
});

export default SearchBar;
