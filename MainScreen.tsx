/**
 * Code Chalange
 * @author Fabio Brandao
 *
 * Main screen component
 */
import React, {FC, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RestaurantList from './RestaurantList';
import {getRestaurants, Restaurant} from './service';

const MainScreen: FC = () => {
  // required state variables
  const [showList, setShowList] = useState(false);
  const [postCode, setPostCode] = useState('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [emptyList, setEmptyList] = useState(false);

  // Querying the API for the restaurants
  const submitForm = async () => {
    setEmptyList(false);
    Keyboard.dismiss();
    const response = await getRestaurants(postCode);
    // Cheking if we got something from the API
    if (response.length > 0) {
      setShowList(true);
      setRestaurants(response);
    } else {
      setEmptyList(true);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeview}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>myRestaurants</Text>
            <Text style={styles.sectionDescription}>You're hungry, right?</Text>
            <Text style={styles.sectionDescription}>
              Let's take a look at the options around you.
            </Text>
            <TextInput
              style={{borderColor: 'gray', borderWidth: 1}}
              placeholder="Type a post code here"
              onChangeText={(text) => setPostCode(text)}
              defaultValue={postCode}
            />
            <Button title="Where can I order?" onPress={submitForm} />
          </View>
        </View>
        {showList && <RestaurantList data={restaurants} />}
        {emptyList && (
          <Text style={styles.sectionTitle}>No restaurants found.</Text>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  safeview: {
    flex: 1,
  },
});

export default MainScreen;
