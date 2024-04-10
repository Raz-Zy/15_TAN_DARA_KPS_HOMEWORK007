
import MovieSectionComponent from "./components/MovieSectionComponent";
import { getAllMoviesByGenreService, getAllMoviesService } from "./services/movie.service";


export default async function Home() {
  const dataAllMovies = await getAllMoviesService();


  //First get all the genre then put it into the Set constructor to remove duplicate then spread object from set to array
  const movieGenre = [... new Set(dataAllMovies.map(m => m.genre))];
  // console.log("Genre: ", movieGenre);

  // const allActionMoives = await getAllMoviesByGenreService("Action");
  // const allDramaMoives = await getAllMoviesByGenreService("Drama");
  // const allCrimeMovies = await getAllMoviesByGenreService("Crime");
  // const allScienceFictionMovies = await getAllMoviesByGenreService("science_fiction");

  return (
    <main className="min-h-screen bg-red-900 overflow-hidden">
      <img src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x"
        className="opacity-70 w-full" />


      <section className="p-5">
        <h1 className=" font-semibold text-white text-xl">All Movies &gt;</h1>
        <div className="mt-3 flex gap-x-3 overflow-x-auto scrollbar-hide">
          <div className="w-full">
            <MovieSectionComponent movies={dataAllMovies} />
          </div>
        </div>
      </section>

      {/* Dynamic */}
      {movieGenre.map(async (genre) => {
        //Get all the movie by each genre
        const allMovieEachGenre = await getAllMoviesByGenreService(genre);
        // console.log(`Genre ${genre}`, allMovieEachGenre);
        return (
          <section className="p-5">
            <h1 className=" font-semibold text-white text-xl">{genre} &gt;</h1>
            <div className="mt-3 flex gap-x-3 overflow-x-auto scrollbar-hide">
              <div className="w-full">
                <MovieSectionComponent movies={allMovieEachGenre} />
              </div>
            </div>
          </section>
        )
      })}

      

      {/* Static */}
      {/* <section className="p-5">
        <h1 className=" font-semibold text-white text-xl">All Action Movies &gt;</h1>
        <div className="mt-3 flex gap-x-3 overflow-x-auto scrollbar-hide">
            <div className="w-full">
              <MovieSectionComponent movies={allActionMoives} />
            </div>
        </div>
      </section>

      <section className="p-5">
        <h1 className=" font-semibold text-white text-xl">All Drama Movies &gt;</h1>
        <div className="mt-3 flex gap-x-3 overflow-x-auto scrollbar-hide">
            <div className="w-full">
              <MovieSectionComponent movies={allDramaMoives} />
            </div>
        </div>
      </section>

      <section className="p-5">
        <h1 className=" font-semibold text-white text-xl">All Crime Movies &gt;</h1>
        <div className="mt-3 flex gap-x-3 overflow-x-auto scrollbar-hide">
            <div className="w-full">
              <MovieSectionComponent movies={allCrimeMovies} />
            </div>
        </div>
      </section>

      <section className="p-5">
        <h1 className=" font-semibold text-white text-xl">All Science Fiction Movies &gt;</h1>
        <div className="mt-3 flex gap-x-3 overflow-x-auto scrollbar-hide">
            <div className="w-full">
              <MovieSectionComponent movies={allScienceFictionMovies} />
            </div>
        </div>
      </section> */}
    </main>
  );
}
