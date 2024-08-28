import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const products = [
  {
    id: 1,
    price: 29.99,
    title: "Wireless Mouse",
    description:
      "A sleek and modern wireless mouse with ergonomic design and long battery life.",
  },
  {
    id: 2,
    price: 99.99,
    title: "Mechanical Keyboard",
    description:
      "A durable mechanical keyboard with customizable RGB lighting and responsive switches.",
  },
  {
    id: 3,
    price: 199.99,
    title: "Noise-Cancelling Headphones",
    description:
      "Over-ear headphones with active noise cancellation and superior sound quality.",
  },
  {
    id: 4,
    price: 399.99,
    title: "4K Monitor",
    description:
      "A 27-inch 4K UHD monitor with stunning color accuracy and ultra-thin bezels.",
  },
  {
    id: 5,
    price: 49.99,
    title: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with deep bass, waterproof design, and 12-hour battery life.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
