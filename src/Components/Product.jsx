import Shoe from "../assets/Shoe.png";

const Product = ({ product }) => {
  return (
    <>
      <div className="product_wrapper">
        <img src={product.image} alt="" />
        <span>{product.brand}</span>
        <p>{product.title}</p>
        <p>{product.model}</p>
        <span className="price">NGN{product.price}</span>
        <button>Buy Now</button>
      </div>
    </>
  );
};

export default Product;
