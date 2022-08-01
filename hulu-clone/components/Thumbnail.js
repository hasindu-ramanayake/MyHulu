import React from 'react'
import Image from 'next/image'

function Thumbnail({result}) {
    // console.log(result)
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        <div>
            <Image layout='responsive' 
            src={`${BASE_URL}${result.poster_path || result.backdrop_path}` || 
            `${BASE_URL}${result.poster_path}`}
            height={1280} width={720}
            />
        </div>
    )
}

export default Thumbnail