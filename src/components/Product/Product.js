import "./Product.css";

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  rate,
  count,
  add,
}) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="img" />
      </div>
      <div className="product-info">
        {/* <h5> {description}</h5> */}
        <h6> {price}</h6>
      </div>
    </div>
  );
}
