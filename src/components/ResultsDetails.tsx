import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetails = (props: any) => {
  return (
    <View>
      <View>
        <Image style={styles.image} source={{uri: props.result.image_url}} />
        <Text style={styles.name}>{props.result.name}</Text>
        <Text style={styles.footer}>{props.result.rating} Stars, {props.result.review_count} Reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14
  },
  footer: {
    color: '#b5b8ba',
    fontWeight: 'bold',
    fontSize: 14
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  }
});

export default ResultsDetails;
