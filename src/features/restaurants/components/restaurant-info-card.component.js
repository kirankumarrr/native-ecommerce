import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "defaultName",
    icon = "defaulticon",
    photos = ["https://picsum.photos/700"],
    address = "defaultaddress",
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = "defaultisClosedTemporarily",
  } = restaurant;

  return (
    <View style={styles.list}>
      <Card style={styles.card}>
        <Card.Title title={name} />
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Title>{address}</Title>
        </Card.Content>
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
