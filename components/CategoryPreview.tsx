import Link from 'next/link';
import ProductCard from './ProductCard';

export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
type AppProps = {
  title: string;
  products: IProduct[];
};

export default function CategoryPreview({ title, products }: AppProps) {
  return (
    <div className="flex flex-col mb-[30px]">
      <h2>
        <Link
          className="text-[28px] mb-[25px] cursor-pointer"
          href={`shop/${title}`}
        >
          {title}
        </Link>
      </h2>
      <div className="grid grid-cols-4 gap-x-[20px]">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
}
