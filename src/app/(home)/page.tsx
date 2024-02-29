import Link from "next/link";


const API_URL = process.env.NEXT_PUBLIC_API_URL

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log('feching!!')
  const res = await fetch(API_URL)
  const json = await res.json()
  return json
}

export default async function Home() {
  const movies = await getMovies()
  return (
    <ul>
      {/* {JSON.stringify(movies)} */}
      {movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
    </ul>
  );
}
