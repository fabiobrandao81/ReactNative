/**
 * Service layer to access the App's backend
 */

import Axios from 'axios';

export type Restaurant = {
  Name: string;
  LogoUrl: string;
  RatingStars: number;
  Cuisines: Cuisine[];
};

export type Cuisine = {
  Name: string;
};

export const getRestaurants = async (code: string): Promise<Restaurant[]> => {
  const config = {
    baseURL: 'https://uk.api.just-eat.io/restaurants/bypostcode/',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
  };
  // fetch and format data
  try {
    const response = await Axios.get(code, config);
    return response.data.Restaurants;
  } catch (e) {
    console.error(e);
  }
};
