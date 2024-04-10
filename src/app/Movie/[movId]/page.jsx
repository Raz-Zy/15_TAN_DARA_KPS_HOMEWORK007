import { getMovieByIdService } from "@/app/services/movie.service";
import Link from 'next/link';
import { FaStar } from "react-icons/fa6";

const MovieDetailPage = async ({ params }) => {

    const dataMovie = await getMovieByIdService(params.movId);
    const data = dataMovie.payload;

    const rate = data.rating;
    const stars = Math.round(rate);

    //convert the timestamp the the the Data then split it by space and put it to the new array
    const timeStamp = new Date(data.posted_at).toString();
    const [_, m, d, y, t] = timeStamp.split(" ");

    return (
        <div class="py-8 bg-red-900 h-screen flex items-center">
            <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 flex flex-col items-center justify-center px-4">
                        <div class=" w-[700px] h-[460px] flex justify-center items-center dark:bg-gray-700 mb-7">
                            <img class="w-full h-full object-contain" src={`${data.image}` === "" ? "https://www.cagd.gov.gh/wp-content/themes/consultix/images/no-image-found-360x250.png" : `${data.image}` } alt="Product Image" className=" w-full rounded-[20px]"/>
                        </div>
                        <div class=" w-full flex justify-center">
                            <Link href={`/`}>
                                <button class=" shadow-lg btn border-none text-red-200 bg-red-500 hover:bg-red-700 hover:text-white px-5 transition ease-linear duration-200">Back to Home</button>
                            </Link>
                        </div>
                    </div>
                    <div class="md:flex-1 px-4 pt-10">
                        <h2 class="text-[30px] text-white font-bold dark:text-white">{data.director}</h2>
                        <p className="text-white">{data.runtime} minutes</p>
                        <p className="italic text-white">{data.genre}</p>

                        <div className="flex">
                            {/* First use the number of start to create the array by spread the number of start to the array
                                then map it. First argument no need so use the _ then the second catch the index of the array using for key
                            */}
                            {[...Array(stars)].map((_, index) => (
                                <p key={index} className=" text-yellow-500">
                                    <FaStar />
                                </p>
                            ))}
                        </div>

                        <p className="mt-10 text-[30px] font-semibold text-white">{data.movie_title}</p>
                        <p class="text-white text-md mb-4 text-justify leading-6 mt-2">
                            {data.description}
                        </p>
                        <p className=" mt-10 text-white">
                            {`${m} ${d}, ${y}, ${t} AM`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailPage;