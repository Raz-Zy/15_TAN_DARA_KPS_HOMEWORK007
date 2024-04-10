'use client'

import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const CardComponent = ({ movieData }) => {

    return (
        <Link href={`/Movie/${movieData.movie_id}`}>
            <div className='bg-white w-[300px] p-5 rounded-2xl hover:cursor-pointer active:cursor-grab'>
                <img src={`${movieData.image}` === "" ? "https://www.cagd.gov.gh/wp-content/themes/consultix/images/no-image-found-360x250.png" : `${movieData.image}`} alt="" className='rounded-xl overflow-hidden h-[150px] w-full' />

                <div className=' mt-2 py-2 flex flex-col'>
                    <h1 className='text-black font-semibold text-xl line-clamp-1'>{movieData.movie_title}</h1>
                    <p className=' mt-4 line-clamp-2'>{movieData.description}</p>
                </div>

                <div className=' mt-1 flex justify-between items-center'>
                    <p>{movieData.runtime} <span className=' text-gray-500 italic'>minutes</span> </p>
                    <div className='flex items-center justify-end gap-x-5'>
                        <FaArrowRight className=' text-xl text-red-700' />
                        <button className='btn border-none text-red-200 bg-red-500 hover:bg-red-700 hover:text-white px-5 transition ease-linear duration-200'>Detail</button>
                    </div>
                </div>


            </div>
        </Link>
    )
}

export default CardComponent
