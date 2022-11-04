import PRODUCTS from '../../assets/shop-data.json';
import ProductCard from '../../components/ProductCard';

export default function Shop() {
  return (
    <div>
      <div className="w-full flex flex-wrap justify-between">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
