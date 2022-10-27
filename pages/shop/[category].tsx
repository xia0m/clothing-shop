import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

type AppProps = {
  title: string;
}

export default function Category() {
  const router = useRouter();
  const {category} = router.query;
  return (
    <div className='text-3xl font-bold underline'>
      {category}
    </div>
  )
}
