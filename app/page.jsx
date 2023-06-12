import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LatestNews from './components/LatestNews'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestNews />
      <Footer/>
    </>
  )
}     
