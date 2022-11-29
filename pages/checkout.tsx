import Layout from '../components/Layout';

export default function Checkout() {
  return (
    <Layout>
      <div className="w-[55%] min-h-[90vh] flex flex-col items-center mt-[50px] mx-auto mb-0">
        <div className="w-full py-[10px] px-0 flex justify-between border-b border-b-[darygrey] border-solid">
          <div className="capitalize w-[23%]">
            <span>Product</span>
          </div>
          <div className="capitalize w-[23%]">
            <span>Description</span>
          </div>
          <div className="capitalize w-[23%]">
            <span>Quantity</span>
          </div>
          <div className="capitalize w-[23%]">
            <span>Price</span>
          </div>
          <div className="capitalize w-[23%]">
            <span>Remove</span>
          </div>
          <div>Item</div>
          <div>Total: $100</div>
        </div>
      </div>
    </Layout>
  );
}
