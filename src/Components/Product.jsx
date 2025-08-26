import Shoe from "../assets/Shoe.png";

const Product = ({ product }) => {
  return (
    <>
      <div className="product_wrapper">
        {/* <img
          src={product.image}
          alt={product.title}
          style={{
            width: "110px",
            height: "110px",
          }}
        /> */}
        {/* <span>{product.brand}</span>
        <p>{product.title}</p> */}
        <img src={product.image} alt="" />
        <span>{product.brand}</span>
        <p>{product.title}</p>
        <p>{product.model}</p>
        <span className="price">NGN234</span>
        <button>Buy Now</button>
      </div>
    </>
  );
};

export default Product;
