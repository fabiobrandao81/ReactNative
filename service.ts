/**
 * Service layer to access the App's backend
 */

export type Restaurant = {
  Name: string;
  RatingStars: number;
  Cuisines: Cuisine[];
};

export type Cuisine = {
  Name: string;
};


