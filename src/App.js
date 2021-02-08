import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./components/products";
import Filter from "./components/filter";

function App() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    axios.get("/category?cat_id=15").then((res) => {
      const productList = res.data.data;
      setProducts(productList);
    });
  }, []);

  const sortProducts = (event) => {
    setSort(event.target.value);
    const sortedProducts = products
      .slice()
      .sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? true
            : false
          : sort === "highest"
          ? a.price < b.price
            ? true
            : false
          : a.product_id < b.product_id
          ? true
          : false
      );
    setProducts(sortedProducts);
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length}
              sort={sort}
              sortProducts={sortProducts}
            />
            <Products products={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All right reserve@</footer>
    </div>
  );
}

export default App;
