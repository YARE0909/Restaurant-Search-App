import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ResultsShowScreen = (props: any) => {
  const {id} = props.route.params;
  const [result, setResult]: any = useState(null);
  console.log(result);

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return (
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
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.name}</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Entypo name="star" style={styles.iconStyle} />
        <Text style={styles.footer}>{result.rating} Stars |</Text>
        <MaterialCommunityIcons name="comment-text" style={styles.iconStyle} />
        <Text style={styles.footer}>{result.review_count} |</Text>
        <Entypo name="phone" style={styles.iconStyle} />
        <Text style={styles.footer}>{result.display_phone}</Text>
      </View>

      <View style={{flexDirection: 'row', gap: 10}}>
        {result.categories.map((item: any, key: any) => {
          return (
            <View
              key={key}
              style={{
                backgroundColor: '#b5b8ba',
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <FontAwesome
                name="tag"
                style={{
                  color: 'white',
                  fontSize: 15,
                }}
              />

              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: '500',
                  marginBottom: 2,
                }}>
                {item.title}
              </Text>
            </View>
          );
        })}
      </View>
      <View
        style={{
          marginVertical: 10,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              fontSize: 25,
            }}>
            Address
          </Text>
          <Text style={styles.footer}>
            {result.location.display_address[0]}
          </Text>
          <Text style={styles.footer}>
            {result.location.display_address[1]}
          </Text>
          <Text style={styles.footer}>
            {result.location.display_address[2]}
          </Text>
        </View>
        <View>
          {result.is_closed ? (
            <Text
              style={{
                fontWeight: '900',
                fontSize: 20,
                color: 'red',
              }}>
              Closed
            </Text>
          ) : (
            <Text
              style={{
                fontWeight: '900',
                fontSize: 20,
                color: 'green',
              }}>
              Open
            </Text>
          )}
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    height: '100%',
    gap: 10,
  },
  title: {
    color: 'black',
    fontWeight: '900',
    fontSize: 30,
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 4,
    marginVertical: 10,
  },
  footer: {
    color: '#b5b8ba',
    fontWeight: 'bold',
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 18,
    alignSelf: 'center',
    marginHorizontal: 5,
    color: '#b5b8ba',
  },
});

export default ResultsShowScreen;
