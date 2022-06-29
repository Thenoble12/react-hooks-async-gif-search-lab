import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {

    const [gifs, setGifs] = useState([])
    const [userSearch, setUserSearch] = useState("dolphin")
    const key = "pXJxnwMEwNEQgA5wV0rtjTOWZqMiFAri"


    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=${key}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data.slice(0,3))
            const newData = data.slice(0,3).map((gif) => {
                return {url: gif.images.original.url}            
            })
            console.log(newData)
            setGifs(newData)
        })        
    }, [userSearch])


    const onSearchFormSubmit = (userInput) => {
        setUserSearch(userInput)

    }



    return (
        <div>
            <GifList gifs={gifs} />
            <GifSearch onSearchFormSubmit={onSearchFormSubmit} />
        </div>
    )
}
export default GifListContainer