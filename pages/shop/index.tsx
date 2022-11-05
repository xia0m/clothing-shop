import PRODUCTS from '../../assets/shop-data.json';
import ProductCard from '../../components/ProductCard';

export default function Shop() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-[10px] gap-y-[50px]">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
