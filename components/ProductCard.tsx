import Button from './Button';

export interface IProduct {
  name: string;
  price: string;
  imageUrl: string;
}

export default function ProductCard({ product }: { product: IProduct }) {
  const { name, price, imageUrl } = product;

  return (
    <div className="flex flex-col w-[380px]">
      <img src={imageUrl} alt={`${name}`} />
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
}
