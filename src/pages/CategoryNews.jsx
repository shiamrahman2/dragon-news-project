import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            categoryNews found {updateNews.length}
        </div>
    );
};

export default CategoryNews;