/**
 * Component to display a list of restaurants.
 */

import React, {FC} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Restaurant} from './service';
import RestaurantItem from './RestaurantItem';

type props = {
  data: Restaurant[];
};

const RestaurantList: FC<props> = (props) => {
  return (
    <FlatList
      style={styles.container}
      data={props.data}
      keyExtractor={(item, index) => item.Name + index}
      renderItem={({item}) => <RestaurantItem item={item} />}
    />
  );
};

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

export default RestaurantList;
