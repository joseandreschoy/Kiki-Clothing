
import { type } from 'os';
import Product from '../Product/Product';

type Product = {
  id: number;
  name: string;
  price: number;
};

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.id} id={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
