import Link from "next/link";
import styles from '../styles/movie.module.css'
// import { useRouter } from "next/navigation";


const API_URL = process.env.NEXT_PUBLIC_API_URL

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  // console.log('feching!!')
  const res = await fetch(API_URL)
  const json = await res.json()
  return json
}

export default async function Home() {
  const movies = await getMovies()
  // const router = useRouter()
  // const onClick = () => {
  //   router.push(`/movies/${movie.id}`)
  // }
  return (
    <div className={styles.container}>
      {/* {JSON.stringify(movies)} */}
      {movies.map((movie) => (
        <div key={movie.id} className={styles.movie}>
          <img src={movie.poster_path} alt={movie.title} />
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  )
}
