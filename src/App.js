import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("youu");
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        setProducts(products);
        setFilterArr(products);
      });
  }, []);

  const categoriesArr = products
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const categoriesArray = [...categoriesArr, "All"];

  const [filterArr, setFilterArr] = useState(products);

  const selectCategory = (category) => {
    setFilterArr(products.filter((cate) => cate.category === category));
    if (category === "All") {
      setFilterArr(products);
    }
  };

  return (
    <>
      <Header categories={categoriesArray} select={selectCategory} />
      <Products products={filterArr} />
    </>
  );
}

export default App;
