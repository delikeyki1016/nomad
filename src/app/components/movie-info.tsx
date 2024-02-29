import styles from '../styles/movieinfo.module.css'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getMovie(id:string) {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    // throw new Error("something broke...")
    const res = await fetch(`${API_URL}/${id}`)
    return res.json()
}

export default async function MovieInfo({id}: {id:string}) {
    const movie = await getMovie(id)
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h2>☆{movie.vote_average.toFixed(1)}</h2>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={'_blank'}>Homepage &rarr;</a>
            </div>
        </div>
    )    
}