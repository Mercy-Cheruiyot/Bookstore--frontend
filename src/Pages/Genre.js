import BookItem from "./BookItem";
import React, { useState, useEffect } from "react";
import GenreFilter from "./GenreFilter";

function Genre(){
  const [genres, setgenres] = useState([])
  const [displayedgenres, setDisplayedgenres] = useState([])
  

  const imageCSS = {
    width: "100%",
    maxWidth: "1240px",
    margin: "0 auto",
    paddingTop: "50px",
    paddingBottom: "100px",
     
    display: "grid",
     
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "auto",
    gridGap: "20px",
  }
  
  useEffect(()=>{
      fetch("/books")
      .then((res)=>res.json())
      .then((data)=>{
        setgenres(data)
        setDisplayedgenres(data)
      })
  },[])

  function filterHandler(e){
    setDisplayedgenres(displayedgenres => {
      return (
        genres.filter(book => book.category === e.target.value)
      )
    })
  }
 

  return(
      <>
      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a Genre</label>
          <select onChange={filterHandler} id="genre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <GenreFilter key={genres.id} genres={genres} displayedgenres={displayedgenres}filterHandler={filterHandler}/>
          </select>
      <div style={imageCSS}>
      {displayedgenres.map((book) => (
        <BookItem key={book.id} book={book}/>
      ))} 
      </div>
      </>
  )
}

export default Genre;