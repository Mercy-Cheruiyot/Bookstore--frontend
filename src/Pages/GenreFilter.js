import React from 'react'

function GenreFilter({genres, displayedgenres}){

    // Get uniq genres
    const genre_info = genres.map(book => {
        return {value: book.genre}
    })

    const uniq_genre = []

    genre_info.forEach(genre => {
        if(!uniq_genre.find(uniq_genre => uniq_genre.value === genre.value)){
            uniq_genre.push(genre)
        }
    })

    // Use the uniq genres to create options
    const genre_options = uniq_genre.map(genre => {
        return <option value={genre.value} key= {genre.id}>{genre.value}</option>
    })

    return (
        <>
            {genre_options}
        </>
    )
}

export default GenreFilter