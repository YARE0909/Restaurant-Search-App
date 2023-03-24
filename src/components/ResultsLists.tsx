import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetails';
import {useNavigation} from '@react-navigation/native';

const ResultsLists = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props.results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Restaurant', {id: item.id})}>
              <ResultsDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontWeight: '900',
    fontSize: 22,
    color: 'black',
  },
  text: {
    color: 'black',
  },
});

export default ResultsLists;
