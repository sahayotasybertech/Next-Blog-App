"use client";
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  

  const { id } = React.use(params); 

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlogData();
    }
  }, [id]);

  return (
    data ? <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'> 
        <div className='flex justify-between items-center'>
          <Link href='/'><Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/></Link>
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt=''/></button>
        </div>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-[700px] mx-auto'>{data.title}</h1>
          <Image src={data.author_img} alt='' width={60} className='rounded-full mx-auto mt-6 border border-white'/>
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image src={data.image} alt='' width={1280} height={720} className='border-4 border-white'/>
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p>{data.description}</p>
        <h3 className='my-5 text-[18px] font-semibold'>ABCDabcd1234!@#$</h3>
        <p className='my-3'>ABCDabcd1234!@#$</p>
        <p className='my-3'>ABCDabcd1234!@#$</p>
        <h3 className='my-5 text-[18px] font-semibold'>ABCDabcd1234!@#$</h3>
        <p className='my-3'>ABCDabcd1234!@#$</p>
        <p className='my-3'>ABCDabcd1234!@#$</p>
        <h3 className='my-5 text-[18px] font-semibold'>ABCDabcd1234!@#$</h3>
        <p className='my-3'>ABCDabcd1234!@#$</p>
        <p className='my-3'>ABCDabcd1234!@#$</p>
        <div className='my-24'>
          <p className='text-black font-semibold my-4'>Share this article to Social Media</p>
          <div className='flex'>
            <Image src={assets.facebook_icon} alt='' width={40}/>
            <Image src={assets.twitter_icon} alt='' width={40}/>
            <Image src={assets.googleplus_icon} alt='' width={40}/>
          </div>
        </div>
      </div>
      <Footer/>
    </> : <></>
  );
};

export default Page;
