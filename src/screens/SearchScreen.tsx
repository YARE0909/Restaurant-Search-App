import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsLists from '../components/ResultsLists';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchAPI, results, ermsg] = useResults();
  
  const errMsg = (
    <Text style={{color: 'red', fontSize: 15}}>
      Something went wrong please try again
    </Text>
  );

  const resultCount = (
    <Text style={{color: 'black', fontSize: 15}}>
      We have found {results.length} results
    </Text>
  );

  const filterResultsByPrice = (price: any) => {
    return results.filter(result => {
      return result['price'] === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={() => {
          setTerm;
        }}
        onTermSubmit={() => searchAPI(term)}
      />
      {ermsg ? errMsg : null}
      {resultCount}
      <ResultsLists
        results={filterResultsByPrice('$')}
        title="Cost Effective"
      />
      <ResultsLists results={filterResultsByPrice('$$')} title="Bit Pricey" />
      <ResultsLists results={filterResultsByPrice('$$$')} title="Fancy Stuff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 10,
    backgroundColor: '#fff',
    height: '100%',
  },
  text: {
    color: '#000',
    fontSize: 15,
  },
});

export default SearchScreen;
