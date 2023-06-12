"use client";
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { X_RAPID_API_KEY, X_RAPID_API_HOST } from '../constants/constant'
const NewsCard = () => {
    const [news, setNews] = useState([]);

    useEffect(()=>{
        const fetchNews = async () => {
            const url = 'https://cryptoinfo.p.rapidapi.com/api/private/latest_news/rapid_api/news/5';
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': X_RAPID_API_KEY,
                    'X-RapidAPI-Host': X_RAPID_API_HOST,
             }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                
                setNews(result);
                const {meta , data } = result[0];
                const {en, ru} = data;
                console.log(en.header);
                console.log(en.summary);
                console.log(en.link);
                console.log(result[0].data.en.header);

            } catch (error) {
                console.error(error);
            }
        }

        fetchNews();
    },[])
  return (
    <section className='px-2 latest_news'>
        
        <div className='card rounded-md mt-2 p-2'>
            <h1 className='font-mono font-bold'>{news[0].data.en.header}</h1>
            <p className='font-sans font-semibold'>{news[0].data.en.summary}</p>
       </div>

       <div className='card rounded-md mt-2 p-2'>
            <h1 className='font-mono font-bold'>{news[1].data.en.header}</h1>
            <p className='font-sans font-semibold'>{news[1].data.en.summary}</p>
       </div>

       <div className='card rounded-md mt-2 p-2'>
            <h1 className='font-mono font-bold'>{news[2].data.en.header}</h1>
            <p className='font-sans font-semibold'>{news[2].data.en.summary}</p>
       </div>

       <div className='card rounded-md mt-2 p-2'>
            <h1 className='font-mono font-bold'>{news[3].data.en.header}</h1>
            <p className='font-sans font-semibold'>{news[3].data.en.summary}</p>
       </div>

       <div className='card rounded-md mt-2 p-2'>
            <h1 className='font-mono font-bold'>{news[4].data.en.header}</h1>
            <p className='font-sans font-semibold'>{news[4].data.en.summary}</p>
       </div>
    </section>
  )
}

export default NewsCard