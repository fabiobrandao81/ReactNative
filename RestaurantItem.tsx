/**
 * Component used to create a restaurant item.
 */

import React, {FC} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Restaurant} from './service';
import {CuisineList} from './CuisineList';

type props = {
  item: Restaurant;
};

const RestaurantItem: FC<props> = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.item.Name}</Text>
    <View style={styles.info}>
      <View style={styles.image}>
        <Image source={{uri: props.item.LogoUrl}} style={styles.image} />
      </View>
      <View style={styles.text}>
        <Text style={styles.item}>{'Rating: ' + props.item.RatingStars}</Text>
        <CuisineList data={props.item.Cuisines} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 16,
  },
  item: {
    padding: 5,
    marginVertical: 8,
  },
  info: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    flex: 1,
  },
  title: {
    backgroundColor: '#d4ebf3',
    fontSize: 24,
  },
});

export default RestaurantItem;
