import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='font-mono flex items-start justify-center'>
        <div className='flex items-center gap-5'>
            <Link href={'https://twitter.com/simplysabir_'} target='_blank'>Twitter</Link>
            <Link href={'https://github.com/simplysabir'} target='_blank'>Github</Link>
            <Link href={'https://linkedin.com/in/simplysabir'} target='_blank'>LinkedIn</Link>
        </div>
    </footer>
  )
}

export default Footer