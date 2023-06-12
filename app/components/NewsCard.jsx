"use client";
import React, {useState, useEffect} from 'react'

const NewsCard = () => {
    const [news, setNews] = useState([]);

    useEffect(()=>{
        const fetchNews = async () => {
            const url = 'https://cryptoinfo.p.rapidapi.com/api/private/latest_news/rapid_api/news/5';
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '069c3cc0dfmsh5ecc76f47d66dedp1ec696jsnd16896fe03e7',
                    'X-RapidAPI-Host': 'cryptoinfo.p.rapidapi.com'
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
    <section>
       <div className='card rounded-md '>
        <h1> </h1>
       </div>
    </section>
  )
}

export default NewsCard