import PRODUCTS from '../../assets/shop-data';
import CategoryPreview from '../../components/CategoryPreview';
import Layout from '../../components/Layout';

export default function Shop() {
  return (
    <Layout>
      {PRODUCTS.map(({ title, items }) => (
        <CategoryPreview key={title} title={title} products={items} />
      ))}
    </Layout>
  );
}
