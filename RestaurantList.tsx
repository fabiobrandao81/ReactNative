/**
 * Component to display a list of restaurants.
 */

import React, {FC} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

type 

type props = {
  data: [];
};

const RestaurantList: FC<props> = (props) => {
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title.Name}</Text>
      <Text style={styles.title}>{'Rating: ' + title.RatingStars}</Text>
      <Text style={styles.title}>
        {'Cuisines: ' + title.Cuisine.map(() => title.Cuisines.Name + '\n')}
      </Text>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={props.data}
      //
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Item title={item} />}
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
