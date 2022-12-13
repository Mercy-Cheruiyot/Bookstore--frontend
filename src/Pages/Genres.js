import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import GenresFilter from "./GenresFilter";


function Genres(){
    const [allbooks, setAllbooks] = useState([])
    const [displayedBooks, setDisplayedBooks] = useState([])


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
        fetch(`https://storebooks-production.up.railway.app/books`)
        .then((responce)=>responce.json())
        .then((data)=>{
          setAllbooks(data)
          setDisplayedBooks(data)
        })
    },[])

    function filterHandler(e){
      setDisplayedBooks(displayedBooks => {
        return (
          allbooks.filter(book => book.genre === e.target.value)
        )
      })
    }
   
    return(
        <>
          <div style={{paddingTop: "50px"}}>
                <GenresFilter key={allbooks.id} books={allbooks} displayedBooks={displayedBooks} filterHandler={filterHandler}/>
          </div>
          
          <div style={imageCSS}>
            {displayedBooks.map((book) => (
              <BookItem key={book.id} book={book}/>
            ))} 
          </div>
        </>
    )
}

export default Genres;
