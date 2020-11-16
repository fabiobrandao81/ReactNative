/**
 * Code Chalange
 * @author Fabio Brandao
 *
 * Component used to create the cuisine list for each restaurant.
 */
import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Cuisine} from '../service/service';

type props = {
  data: Cuisine[];
};

export const CuisineList: FC<props> = (props) => (
  <Text style={styles.item}>
    {'Cuisines: ' + props.data.map((item) => item.Name)}
  </Text>
);

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginVertical: 8,
  },
});
