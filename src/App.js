import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./SideBar/Sidebar";

// Importing data

import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // input Filter  1.03.17 yt

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Filtering Items
  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // Radio Filter in sidebars

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button Filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Finally filtering products
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items

    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleChange={handleChange} />
      <Recommended handleChange={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
