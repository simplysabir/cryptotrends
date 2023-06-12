import React from 'react';
import NewsCard from './NewsCard';

const LatestNews = () => {
  return (
    <section className='mt-10 flex items-center flex-col' id='latest_news'>
      <div className='font-mono font-bold section_heading'>
        <h1 className='text-center px-3 py-1  bg-slate-400 text-white rounded-lg'>Latest News</h1>
      </div>
      <div>
        <NewsCard />
      </div>
    </section>
  )
}

export default LatestNews