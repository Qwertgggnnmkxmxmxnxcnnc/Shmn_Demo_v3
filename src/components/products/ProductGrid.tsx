import { Product } from '../../pages/Products/productsData';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const { products } = useProducts();

  return (
    <div className="flex flex-wrap gap-6 items-start">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid; 