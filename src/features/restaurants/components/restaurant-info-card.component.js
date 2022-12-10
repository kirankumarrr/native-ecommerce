import React from "react";
import styled from "styled-components";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "default Name",
    icon = "default icon",
    photos = ["https://picsum.photos/700"],
    address = "default address",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = "default isClosedTemporarily",
  } = restaurant;

  return (
    <View style={styles.list}>
      <Card style={styles.card}>
        <Card.Title title={name} />
        <Card.Cover source={{ uri: photos[0] }} />
        <Title>{address}</Title>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  card: {
    padding: 16,
  },
});
