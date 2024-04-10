'use client'

import CardComponent from './CardComponent';

//For swiper card component from swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

//Swiper card only work with their css
import 'swiper/css'
import 'swiper/css/free-mode'


const MovieSectionComponent = ({ movies }) => {

    return (
        <div>
            <Swiper breakpoints={{
                340: {
                    slidesPerView: 2,
                    spaceBetween: 7
                },
                700: {
                    slidesPerView: 4.4,
                    spaceBetween: 7
                },
                1500:{
                    slidesPerView: 5.5,
                    spaceBetween: 7
                }
            }}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className='w-full rounded-2xl'
            >
                {movies?.map((movie) => (
                    <SwiperSlide key={movie.movie_id} >
                        <CardComponent movieData={movie} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default MovieSectionComponent

