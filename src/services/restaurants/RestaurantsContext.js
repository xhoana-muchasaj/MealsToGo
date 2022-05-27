import React, {useState, createContext, useEffect, useMemo} from 'react';
import {restaurantsRequest, restaurantsTransform} from './RestaurantsService';

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retriveRestaurants = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    retriveRestaurants();
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then(results => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch(err => {
          setIsLoading(true);
          setError(err);
        });
    }, 2000);
  }, []);

  return (
    <RestaurantContext.Provider value={{restaurants, isLoading, error}}>
      {children}
    </RestaurantContext.Provider>
  );
};
