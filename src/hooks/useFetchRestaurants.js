import { useState, useEffect } from "react";

/**
 * useFetchRestaurants
 *
 * custom hook fetching restaurant data, it handle the loading status and error status.
 *
 * @param {string} category - yelp businesses category you can see the list here: https://www.yelp.com/developers/documentation/v3/all_category_list
 *
 * @return {object} - an object of businesses data, loading status and error status
 */
export const useFetchRestaurants = (category = "") => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (sessionStorage.getItem(category)) {
      setBusinesses(JSON.parse(sessionStorage.getItem(category)));
      setLoading(false);
    } else {
      fetchRestaurants(category)
        .then(({ businesses }) => {
          setBusinesses(businesses);
          sessionStorage.setItem(category, JSON.stringify(businesses));
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }
  }, [category]);

  return { businesses, loading, error };
};

/**
 * fetchRestaurants
 *
 * api call triggering restaurant data according to the selected category.
 *
 * To support multiple categories you should handle array instead of
 * string and format it into a list of comma delimited.
 * For more informations see: https://www.yelp.com/developers/documentation/v3/business_search
 *
 * @param {string} category - yelp businesses category you can see the list here: https://www.yelp.com/developers/documentation/v3/all_category_list
 *
 * @return {object} - either an error object or the yelp business object see: https://www.yelp.com/developers/documentation/v3/business
 */
const fetchRestaurants = async category => {
  const query = {
    limit: 50,
    location: "Berlin, Germany",
    term: "restaurants",
    ...(category && { categories: category })
  };
  const urlParams = new URLSearchParams(query);
  const response = await fetch(`/-/search?${urlParams}`);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};
