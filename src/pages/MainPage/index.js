import React, { useState } from "react";

import {
  Layout,
  Map,
  SearchableSelect,
  BusinessList,
  FetchHandler
} from "../../components";
import { useFetchRestaurants } from "../../hooks";
import "./MainPage.css";

/**
 * MainPage
 *
 * Website main page containing a list of restaurants and a map to display their location.
 *
 * @return {jsx}
 */
const MainPage = () => {
  const [category, setCategory] = useState();

  const { businesses, loading, error } = useFetchRestaurants(category);

  return (
    <Layout>
      <Map businesses={businesses} />
      <div className="search-list">
        <SearchableSelect
          options={[
            { value: "pizza" },
            { value: "burgers" },
            { value: "sushi" }
          ]}
          onChange={setCategory}
          placeholder="Select your type ..."
          title="Type"
        />
        <FetchHandler error={error} loading={loading}>
          <BusinessList businesses={businesses} />
        </FetchHandler>
      </div>
    </Layout>
  );
};

export default MainPage;
