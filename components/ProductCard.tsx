import { CartItem, useCartStore } from '../store/cartStore';
import Button from './Button';

export default function ProductCard({ product }: { product: CartItem }) {
  const { name, price, imageUrl } = product;
  const addItemToCart = useCartStore((store) => store.addItemToCart);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="w-full flex flex-col h-[350px] items-center relative group">
      <img
        src={imageUrl}
        alt={`${name}`}
        className="w-full h-[95%] object-cover mb-[5px] group-hover:opacity-[0.8]"
      />
      <div className="w-full h=[5%] flex justify-between text-[18px]">
        <span className="w-[90%] mb-[15px]">{name}</span>
        <span className="w-[10%]">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        className="w-[80%] opacity-[0.7] absolute top-[255px] hidden group-hover:opacity-[0.85] group-hover:flex"
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
}
