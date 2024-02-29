const API_URL = process.env.NEXT_PUBLIC_API_URL

async function getVideo(id:string) {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    const res = await fetch(`${API_URL}/${id}/videos`)
    return res.json()
}

export default async function MovieVideo({id}: {id:string}) {
    const videos = await getVideo(id)
    return <h6>{JSON.stringify(videos)}</h6>
}