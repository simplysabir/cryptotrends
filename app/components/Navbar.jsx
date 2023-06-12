
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-4 font-bold font-mono pl-4 pr-4 mb-4'>
      <h3 className='font-bold'>Crypto Trends</h3>
      <Link href={'https://github.com/simplysabir/cryptotrends'} target='_blank'>Github</Link>
    </nav>
  )
}

export default Navbar