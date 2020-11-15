/**
 * Component used to create a restaurant item.
 */

import React, {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Restaurant} from './service';
import {CuisineList} from './CuisineList';

type props = {
  item: Restaurant;
}

const RestaurantItem: FC<props> = (props) => (
  <View style={styles.item}>
    <Text style={styles.title}>{props.item.Name}</Text>
    <Text style={styles.item}>{'Rating: ' + props.item.RatingStars}</Text>
    <CuisineList data={props.item.Cuisines} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 16,
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  header: {
    backgroundColor: '#d4ebf3',
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});

export default RestaurantItem;
