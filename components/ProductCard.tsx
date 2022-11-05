import Button from './Button';

export interface IProduct {
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ product }: { product: IProduct }) {
  const { name, price, imageUrl } = product;

  return (
    <div className="w-full flex flex-col h-[350px] align-middle relative">
      <img src={imageUrl} alt={`${name}`} />
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
}
