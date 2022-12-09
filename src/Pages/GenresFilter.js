import React from 'react'



function GenresFilter({books, displayedBooks, filterHandler}){

    // Get uniq genres
    const genre_info = books.map(book => {
        return {value: book.genre}
    })

    const uniq_genres = []

    genre_info.forEach(genre => {
        if(!uniq_genres.find(uniq_genre => uniq_genre.value === genre.value)){
            uniq_genres.push(genre)
        }
    })

    console.log("genres: ", uniq_genres)
    // Use the uniq genres to create options
    const genre_options = uniq_genres.map(genre => {
        return <option value={genre.value} key= {genre.id}>{genre.value}</option>
    })

    return (
        <>
        <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
           <select 
               onChange={filterHandler}
                className="form-select form-select-lg mb-3
                appearance-none
                block
                w-full
                px-4
                py-2
                text-xl
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
                <option defaultValue={"Select a Region"}>Select a   Genre</option>
                {genre_options}
            </select>
            </div>
            </div>
        </>
    )
}

export default GenresFilter