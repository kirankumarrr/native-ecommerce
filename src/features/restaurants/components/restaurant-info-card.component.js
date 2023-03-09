import React from "react";
import styled from "styled-components/native";
import { StatusBar, StyleSheet, SafeAreaView, Text, View, ScrollView } from "react-native";
import { List, MD3Colors, Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ data }) => {
  // const {
  //   name = "Some Restaurant",
  //   icon,
  //   photos = [
  //     "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  //   ],
  //   address = "100 some random street",
  //   isOpenNow = true,
  //   rating = 4,
  //   isClosedTemporarily,
  // } = restaurant;

  // return (
  //   <RestaurantCard elevation={5}>
  //     <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
  //     <Title>{name}</Title>
  //   </RestaurantCard>
  // );


  return (

    <ScrollView>
      <List.Section>
        {data ? (
          <View >
            {/* <AddTodo
                onAdd={(todo) => {
                  this.setState({ addingTodo: false });
                  this.api.add(todo);
                }}
                onCancelDelete={() => this.setState({ addingTodo: false })}
                onBlur={() => this.setState({ addingTodo: false })}
              /> */}

            <List.Item
              title={data.description}
              left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
            />
          </View>
        ) : null}
      </List.Section>
    </ScrollView>
    // <RestaurantCard elevation={5}>
    //   <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
    //   <Title>{name}</Title>
    // </RestaurantCard>
  );

};
