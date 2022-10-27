import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CategoryCard from '../../components/CategoryCard';

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
    <div className='text-3xl font-bold underline'>
      {categories.map(({id, title, imageUrl}) => (
        <Link key='id' href={`/shop/${title}`}><CategoryCard title={title} /></Link>
      ))}
    </div>
  )
}
