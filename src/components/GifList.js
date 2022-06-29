import React from "react";

function GifList({ gifs }) {
    console.log(gifs)


    return (
        <div>
            <ul>
                {gifs.map(({ url }, index)=>{
                    return <li key={index}><img src={url} alt={""}></img></li>
                })}
            </ul>
        </div>
    )
}
export default GifList