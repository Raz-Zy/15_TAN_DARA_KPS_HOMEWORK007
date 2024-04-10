

//Get all MOvies
export async function getAllMoviesService() {
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api', {cache: 'no-store'});

    //convert from json object to javascript object
    const payload = await res.json();

    const datas = payload.payload;
    // console.log(datas)
    return datas;
}

//Get all movies by genre
export async function getAllMoviesByGenreService(genre) {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`);

    const payload = await res.json();

    const datas = payload.payload;
    return datas;
}

//Get a movie by id
export async function getMovieByIdService(id) {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`);

    const data = res.json();
    return data;
}