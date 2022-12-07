import React from "react";
import BookItem from "../Pages/BookItem";

function BookList({books,handleDeleteBook}) {

  const bookList= books.map((book) =>  <BookItem 
    key={book.id}
    book={book}
    handleDeleteBook={handleDeleteBook}/>);

    return (
      <div className="flex w-full justify-around flex-wrap">
            <h1>Collection of all Books </h1>
             
            {bookList} 
            
          
        </div>
    //     <ul className="cards">
    //   {books.map((book) => {
    // return <BookItem 
    // key={book.id}
    // book={book}
    // handleDeleteBook={handleDeleteBook}/>)}
    // </ul>
  


      );
}

export default BookList;
