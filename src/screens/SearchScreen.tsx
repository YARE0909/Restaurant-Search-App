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

  const filterResultsByPrice = (price: any) => {
    return results.filter((result: any) => {
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
      {results ? (
        <View>
          <ResultsLists
            results={filterResultsByPrice('$')}
            title="Cost Effective"
          />
          <ResultsLists
            results={filterResultsByPrice('$$')}
            title="Bit Pricey"
          />
          <ResultsLists
            results={filterResultsByPrice('$$$')}
            title="Fancy Stuff"
          />
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '700',
              fontSize: 18,
              alignSelf: 'center',
            }}>
            Loading...
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 10,
    backgroundColor: '#fff',
    height: '100%',
    flex: 1,
  },
  text: {
    color: '#000',
    fontSize: 15,
  },
});

export default SearchScreen;
