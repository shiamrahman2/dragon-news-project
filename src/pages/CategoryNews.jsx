import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard/NewsCard';

const CategoryNews = () => {
    const {id}=useParams();
     const newsData=useLoaderData();
     const[updateNews,setUpdateNews]=useState([]);
    // console.log(id,newsData);
    useEffect(()=>{
        if(id=='0'){
            setUpdateNews(newsData);
            return;
        }else if(id=='1'){
              const filterNews=newsData.filter((news)=>news.others.is_today_pick==true)
             setUpdateNews(filterNews);
             return;
        }else{
              const filterNews=newsData.filter((news)=>news.category_id==id)
            setUpdateNews(filterNews); 
            return;
        }       
        
    },[newsData,id])
   // console.log(updateNews);
    return (
       <div>
           <h2 className='font-bold'>Total news found <span className=' text-red-400'>{updateNews.length}</span></h2>
           <div className='grid grid-cols-1 gap-0'>
              {
                  updateNews.map((news)=><NewsCard key={news.id} news={news}></NewsCard>)
              }
           </div>
       </div>
           
    );
};

export default CategoryNews;