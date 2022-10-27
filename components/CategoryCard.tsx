import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

type AppProps = {
  title: string;
}

export default function CategoryCard({title}: AppProps ) {
  const router = useRouter();
  return (
    <div className='text-3xl font-bold underline'>
      {title}
    </div>
  )
}
