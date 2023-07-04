interface ProductProps {
  id: number;
  name: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, name, price }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">${price.toFixed(2)}</p>
      {/* Add more product details or buttons as needed */}
    </div>
  );
};

export default Product;
