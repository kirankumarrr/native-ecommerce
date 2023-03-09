import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View, ScrollView, FlatList } from "react-native";
import axios from 'axios'


export const RestaurantsScreen = () => {
  const [data, setData] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => {
    console.log('query', query)
    setSearchQuery(query)
    fetchSerch2(query)
  };
  const fetchSerch2 = (value) => {
    const BASE_URL = "https://api.punkapi.com/v2";
    const url = `${BASE_URL}/beers?beer_name=${value}`;
    axios.get(url).then((res) => {
      console.log("fetchSerch2 response", res.data);
      setData(res.data);
    });
  };

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );


  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.description} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: { color: '#fff' },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
