/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
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
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RestaurantList from './RestaurantList';
import {getRestaurants, Restaurant} from './service';

declare const global: {HermesInternal: null | {}};

const App: FC = () => {
  const [showList, setShowList] = useState(false);
  const [postCode, setPostCode] = useState('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  let errorMessage: string = '';

  const submitForm = async () => {
    const response = await getRestaurants(postCode);
    if (response.length > 0) {
      setShowList(true);
      setRestaurants(response);
    } else {
      errorMessage = postCode;
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeview}>
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
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
        <Text style={styles.sectionDescription}>{errorMessage}</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
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
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  safeview: {
    flex: 1,
  },
});

export default App;
