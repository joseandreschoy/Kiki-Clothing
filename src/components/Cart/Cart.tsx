type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartProps = {
  cartItems: CartItem[];
};

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              {/* Add buttons or actions for removing items or updating quantities */}
            </div>
          ))}
          <p className="font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
          {/* Add checkout button or other actions */}
        </div>
      )}
    </div>
  );
};

export default Cart;
