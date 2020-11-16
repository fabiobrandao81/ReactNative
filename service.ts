/**
 * Code Chalange
 * @author Fabio Brandao
 *
 * Service layer to access the App's backend
 */

import Axios from 'axios';
import moment from 'moment';

// Type to store restaurant's address
export type AddressType = {
  FirstLine: string;
  City: string;
  Postcode: string;
};

// Type to store the restaurant's deals
export type Deal = {
  Description: string;
};

// Type used to create load an array of restaurants from the API
export type Restaurant = {
  Name: string;
  Address: AddressType;
  LogoUrl: string;
  RatingStars: number;
  Cuisines: Cuisine[];
  OpeningTime: string;
  DeliveryOpeningTimeLocal: string;
  Deals: Deal[];
};

//type to store the restaurant's cuisnes list
export type Cuisine = {
  Name: string;
};

// Validating date string and returning the time (hours and minutes) string
const retrieveTime = (d: string): string => {
  const date = moment.utc(d);
  if (date.isValid()) {
    return date.format('HH:mm');
  } else {
    return 'n/a';
  }
};

const validateData = (data: Restaurant[]): Restaurant[] => {
  if (data) {
    const result: Restaurant[] = data.map((item) => {
      // validating deals array
      if (!item.Deals) {
        item.Deals = [{Description: 'n/a'}];
      }

      // Validating Cuisines array
      if (!item.Cuisines) {
        item.Cuisines = [{Name: 'n/a'}];
      }

      // Validating and formating opening hours
      item.OpeningTime = retrieveTime(item.OpeningTime);
      // Validating and formating delivery hours
      item.DeliveryOpeningTimeLocal = retrieveTime(
        item.DeliveryOpeningTimeLocal,
      );

      return item;
    });
    return result;
  } else {
    console.error('No valuable response received');
    return [];
  }
};

export const getRestaurants = async (code: string): Promise<Restaurant[]> => {
  const config = {
    baseURL: 'https://uk.api.just-eat.io/restaurants/bypostcode/',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
  };
  // fetch and format data
  try {
    const rawData = await Axios.get(code.trim(), config);
    return validateData(rawData.data.Restaurants);
  } catch (e: any) {
    console.error(e);
    return [];
  }
};
