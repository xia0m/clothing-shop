import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

type AppProps = {
  title: string;
  imageUrl: string;
}

export default function CategoryCard({title, imageUrl}: AppProps ) {
  const router = useRouter();
  return (
    <div className='min-w-[30%] h-[240px] flex-auto flex items-center justify-center border-solid border-black border mx-[7.5px] mt-0 mb-[15px] overflow-hidden hover:cursor-pointer first:mr-[7.5px] last:ml-[7.5px] group'>
      <div style={{backgroundImage: `url(${imageUrl})`}} className='group-hover:scale-[1.1] group-hover:transition-transform group-hover:duration-[6s] group-hover:ease-[cubic-bezier(0.25,0.45,0.45,0.95)] w-full h-full bg-center bg-cover' />
      <div className='h-[90px] px-[25px] py-0 flex flex-col items-center justify-center border border-solid border-black bg-white opacity-[0.7] absolute group-hover:opacity-[0.9]'>
        <h2 className='font-bold mx-[6px] my-0 text-[22px] text-[#4a4a4a]'>{title}</h2>
        <p className='font-light text-[16px]'>Shop Now</p>
      </div>
    </div>
  )
}
