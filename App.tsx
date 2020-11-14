/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RestaurantList from './RestaurantList';

declare const global: {HermesInternal: null | {}};

class App extends Component {
  private endpointURL: string =
    '​https://uk.api.just-eat.io/restaurants/bypostcode';

  state = {showList: false, postCode: '', restaurants: {}};

  constructor(props) {
    super(props);

    this.updateFormField = this.updateFormField.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateFormField(fieldName: string) {
    return (event) => {
      this.setState({
        [fieldName]: event.nativeEvent.text,
      });
    };
  }

  async submitForm(event) {
    const {postCode: string} = this.state;
    // apend post code to endpoint
    console.log(this.endpointURL + '/' + this.state.postCode);
    // fetch and format data
    const response = await fetch(this.endpointURL + '/' + this.state.postCode);
    // print data
    this.setState({showList: true, restaurants: response.json.Restaurants});
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>myRestaurats</Text>
                <Text style={styles.sectionDescription}>
                  You're hungry, right?'
                </Text>
                <Text style={styles.sectionDescription}>
                  Let's take a look at the options around you.
                </Text>
                <TextInput
                  style={{borderColor: 'gray', borderWidth: 1}}
                  placeholder="Type a post code here"
                  onChangeText={this.updateFormField('postCode')}
                  value={this.state.postCode}
                />
                <Button title="Where can I order?" onPress={this.submitForm} />
              </View>
            </View>
          </ScrollView>
          {this.state.showList && <RestaurantList />}
        </SafeAreaView>
      </>
    );
  }
}

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
});

export default App;
