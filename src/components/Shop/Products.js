import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {

  const products = [
    {
      id: 'a2',
      title: 'Choco',
      price: 12,
      description: 'Chocolate from kolkata'
    },
    {
      id: 'a3',
      title: 'Mango',
      price: 10,
      description: 'Mango from Bihar'
    },
    {
      id: 'a4',
      title: 'T-shirt',
      price: 77,
      description: 'Red color t-shirt '
    }
  ]

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
