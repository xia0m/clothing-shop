import Link from 'next/link';
import ProductCard from './ProductCard';

type AppProps = {
  title: string;
  products: [];
};

export default function CategoryPreview({ title, products }: AppProps) {
  return (
    <div>
      <h2>
        <Link href={title}>{title}</Link>
      </h2>
      <div>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
}
