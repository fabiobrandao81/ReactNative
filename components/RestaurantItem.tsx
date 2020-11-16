/**
 * Code Chalange
 * @author Fabio Brandao
 *
 * Component used to create a restaurant item and the extra info modal.
 */

import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Modal,
} from 'react-native';
import {Restaurant} from '../service/service';
import {CuisineList} from './CuisineList';

type props = {
  item: Restaurant;
};

const RestaurantItem: FC<props> = (props) => {
  // State variable to make the modal visible
  const [modalVisible, setModalVisible] = useState(false);
  const onPressItem = () => setModalVisible(!modalVisible);

  return (
    <TouchableHighlight onPress={onPressItem} underlayColor="#125184">
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>{props.item.Name}</Text>
                <View style={styles.modalInfo}>
                  <Text style={styles.modalText}>
                    {'Address: ' + props.item.Address.FirstLine}
                  </Text>
                  <Text style={styles.modalText}>
                    {'Oppening time: ' + props.item.OpeningTime}
                  </Text>
                  <Text style={styles.modalText}>
                    {'Delivery time: ' + props.item.DeliveryOpeningTimeLocal}
                  </Text>
                  <Text style={styles.modalText}>{'Deals:'}</Text>
                  <Text style={styles.modalText}>
                    {props.item.Deals.map((deal) => deal.Description) + '\n'}
                  </Text>
                </View>
                <TouchableHighlight
                  style={styles.button}
                  underlayColor="#125184"
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.buttonText}>Back</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>

        <Text style={styles.title}>{props.item.Name}</Text>
        <View style={styles.info}>
          <View style={styles.image}>
            <Image source={{uri: props.item.LogoUrl}} style={styles.image} />
          </View>
          <View style={styles.text}>
            <Text style={styles.item}>
              {'Rating: ' + props.item.RatingStars}
            </Text>
            <CuisineList data={props.item.Cuisines} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

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
    padding: 5,
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
    backgroundColor: '#65b2f3',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalInfo: {
    alignItems: 'flex-start',
  },
  button: {
    marginTop: 15,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalText: {
    textAlign: 'left',
  },
});

export default RestaurantItem;
