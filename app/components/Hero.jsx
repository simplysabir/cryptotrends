
import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <main className='font-mono flex items-center justify-center'>
        <div className='mt-6 p-6 flex flex-col gap-2'>
        <h1 className='text_gray_gradient font-bold'>get the latest crypto news at your screen</h1>
        <Link href={'#latest_news'} className='px-2 py-1 bg-slate-400 text-white w-28 text-center rounded-md'><span>Explore</span></Link>
        </div>
    </main>
  )
}

export default Hero