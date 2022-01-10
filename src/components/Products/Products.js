import Product from "../Product/Product";
import "./Products.css";

export default function Products(props) {
  return (
    <ul className="products">
      {props.products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
          add={props.addToCart}
        />
      ))}
    </ul>
  );
}
