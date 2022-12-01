import CheckoutItem from '../components/CheckoutItem';
import Layout from '../components/Layout';
import { useCartStore } from '../store/cartStore';

export default function Checkout() {
  const cartItems = useCartStore((store) => store.cartItems);
  const cartTotal = cartItems.reduce(
    (total, cartItem) => total + parseFloat(cartItem.price) * cartItem.quantity,
    0
  );
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
          <div className="capitalize w-[8%]">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="mt-[30px] ml-auto text-[36px]">Total: ${cartTotal}</div>
      </div>
    </Layout>
  );
}
