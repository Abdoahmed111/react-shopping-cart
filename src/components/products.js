import React from "react";

export default function Products({ products }) {
  const baseUrl = "http://eslamfishstore.com/public/uploads/";
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product.product_id}>
            <div className="product">
              <a href={"#" + product.product_id}>
                <img
                  src={baseUrl + product.productimage}
                  alt={product.productname}
                />
                <p>{product.productname}</p>
              </a>
              <div className="product-price">
                <div>{product.offer_price}</div>
                <button className="button primary">Add To Cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
