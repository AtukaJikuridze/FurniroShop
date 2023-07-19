import { ProductsAPI } from "../../API/ProductsAPI";
import Product from "./Product";
import "./Products.css";
export default function Products() {
  return (
    <div className="products-main container">
      <h1>Our Products</h1>
      <div className="products">
        {ProductsAPI.map((e, i) => (
          <Product
            key={i}
            image={e.image}
            title={e.title}
            subText={e.subText}
            newPrice={e.newPrice}
            oldPrice={e.oldPrice}
          />
        ))}
      </div>
    </div>
  );
}
