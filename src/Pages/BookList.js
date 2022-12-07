import React from "react";
import BookItem from "../Pages/BookItem";

function BookList({books,book,handleDeleteBook}) {

  const bookList= books.map(books => <BookItem 
    key={book.id}
    book={book}
    handleDeleteBook={handleDeleteBook}/>)
    return (
        <div className="ui four column grid">
          <div className="row">
            <h1>Collection of all Books </h1>
            {bookList} 
            
          </div>
        </div>
      );
}

export default BookList;
