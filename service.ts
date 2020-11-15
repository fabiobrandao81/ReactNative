/**
 * Service layer to access the App's backend
 */

const url: string = '​https://uk.api.just-eat.io/restaurants/bypostcode/';

export type Restaurant = {
  Name: string;
  RatingStars: number;
  Cuisines: Cuisine[];
};

export type Cuisine = {
  Name: string;
};

export const getRestaurants = async (code: string): Promise<Restaurant[]> => {
  // fetch and format data
  try {
    const response = await fetch(url.concat(code), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    return response.json.Restaurants;
  } catch (e) {
    console.error(e);
    return [{Name: url + code, RatingStars: 0, Cuisines: []}];
  }
};
