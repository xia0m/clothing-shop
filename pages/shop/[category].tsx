import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import PRODUCTS from '../../assets/shop-data.json';
import ProductCard from '../../components/ProductCard';

type AppProps = {
  title: string;
};

export default function Category() {
  const router = useRouter();
  const { category = '' } = router.query;
  return (
    <Layout>
      <h2 className="text-3xl mb-[25px] text-center uppercase">{category}</h2>
      <div className="grid grid-cols-4 gap-x-[50px] gap-y-[20px]">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
