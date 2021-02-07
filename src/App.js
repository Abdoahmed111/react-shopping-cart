import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./components/products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/category?cat_id=15").then((res) => {
      const productList = res.data.data;
      setProducts(productList);
    });
  }, []);

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
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
