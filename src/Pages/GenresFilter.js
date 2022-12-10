import React from 'react';
import BookItem from "./BookItem"

function SearchList({ filteredGenres }) {
  const filtered = filteredGenres.map(book=>  <BookItem key={book.id} person={person} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;