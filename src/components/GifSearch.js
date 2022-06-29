import React, { useState } from "react";

function GifSearch({ onSearchFormSubmit }) {

    const [query, setQuery] = useState("dolphin")

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchFormSubmit(query)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>What would you like to search for?</label>
                <input type="text" value={query} onChange={handleChange}></input>
                <input type="submit"></input>
            </form>            
        </div>
    )

}

export default GifSearch