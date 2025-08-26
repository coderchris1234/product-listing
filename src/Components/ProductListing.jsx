import "./ProductListStyle.css";
import { useEffect, useState } from "react";
import Product from "./Product";
const Listing = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCatgory] = useState("");
  const [num, setNumber] = useState(10);

  useEffect(() => {
    const getProductCategory = async () => {
      const res = await fetch("https://fakestoreapi.in/api/products/category");
      const data = await res.json();
      if (data.status === "SUCCESS") {
        setCategories(data.categories);
      }
    };
    getProductCategory();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        `https://fakestoreapi.in/api/products?limit=${num}`
      );
      const data = await res.json();
      if (data.status === "SUCCESS") {
        setProducts(data.products);
        setFilteredProducts(data.products);
      }
    };
    getProducts();
  }, [num]);

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredProducts(products);
    } else if (selectedCategory === "all") {
      setNumber(150);
      setFilteredProducts(products);
    } else {
      const filteredproducts = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filteredproducts);
    }
  }, [selectedCategory, products]);

  const handleCategoryChange = (category) => {
    setSelectedCatgory(category);
  };
  return (
    <>
      <div className="Button_container">
        <button className="All" onClick={() => handleCategoryChange("all")}>
          All
        </button>
        {categories.map((item, index) => {
          return (
            <div key={index}>
              <button
                className="btn"
                onClick={() => handleCategoryChange(item)}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
      <div className="product_container">
        {filteredProducts.map((products) => (
          <div key={products.id}>
            <Product product={products} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Listing;
