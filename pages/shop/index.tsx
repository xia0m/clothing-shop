import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import CategoryCard from '../../components/CategoryCard';
import Navigation from '../../components/Navigation';

export default function Shop() {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];
  return (
    <div>
      <div className="w-full flex flex-wrap justify-between">
        <Navigation />
        {categories.map(({ id, title, imageUrl }) => (
          <CategoryCard key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
}
