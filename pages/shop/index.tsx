import PRODUCTS from '../../assets/shop-data';
import CategoryPreview from '../../components/CategoryPreview';
import Layout from '../../components/Layout';

export default function Shop() {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-[10px] gap-y-[50px]">
        {PRODUCTS.map(({ title, items }) => (
          <CategoryPreview key={title} title={title} products={items} />
        ))}
      </div>
    </Layout>
  );
}
