import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProductList from '../components/ProductList/ProductList';

const HomePage: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    // Add more products as needed
  ];

  return (
    <div>
      <Navbar />
      <main>
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
