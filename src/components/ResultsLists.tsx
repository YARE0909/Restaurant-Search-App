import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetails from './ResultsDetails';

const ResultsLists = (props: any) => {
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
          return <ResultsDetails result={item} />;
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
