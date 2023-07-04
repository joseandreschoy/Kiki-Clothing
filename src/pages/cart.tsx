import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cart from '../components/Cart/Cart';

const CartPage: React.FC = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 1 },
    // Add more cart items as needed
  ];

  return (
    <div>
      <Navbar />
      <main>
        <Cart cartItems={cartItems} />
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
