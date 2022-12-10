import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import GenresFilter from "./GenresFilter"
import Card from './Card';

function SearchList({ filteredGenres }) {
  const filtered = filteredGenres.map(person =>  <Card key={person.id} person={person} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;