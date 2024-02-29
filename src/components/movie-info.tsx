const API_URL = process.env.NEXT_PUBLIC_API_URL

async function getMovie(id:string) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    // throw new Error("something broke...")
    const res = await fetch(`${API_URL}/${id}`)
    return res.json()
}

export default async function MovieInfo({id}: {id:string}) {
    const movie = await getMovie(id)
    return <h6>{JSON.stringify(movie)}</h6>
}