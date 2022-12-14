import React from "react";
import AuthorCard from "./AuthorCard";
import { useState, useEffect } from "react";

function Author() {
  const [authors, setAuthors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/authors")
      .then((r) => r.json())
      .then(setAuthors);
  }, []);

  // function handleAddAuthor(addedAuthor) {
  //   setAuthors((authors) => [...authors, addedAuthor]);
  // }
function handleChange(e){
  setSearchTerm(e.target.value)
}
 

  function handleUpdateAuthor(updatedAuthor) {
    setAuthors((authors) =>
      authors.map((author) => {
        return author.id === updatedAuthor.id ? updatedAuthor : author;
      })
    );
  }

  function handleDeleteAuthor(deletedAuthor) {
    setAuthors((author) =>
      author.filter((author) => author.id !== deletedAuthor.id)
    );
  }
  // const renderAuthors = (array) => {
  //   return array.filter((author) => author.name.toLowerCase().includes(searchTerm))
  // }

  return (
    <>
    <form class="flex items-center py-8" onChange={handleChange} >   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <input type="text" name="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
        focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700
         dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
         dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="Search"
         value={searchTerm}/>
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm-black font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
        </button>
</form>
  
        {/* <NewAuthorForm onAddAuthoor={handleAddAuthor} /> */}
        <div className="grid grid-cols-3 gap-4">
          {authors.map((author) => (
            <AuthorCard
              key={author.id}
              author={author}
              onUpdateauthor={handleUpdateAuthor}
              onDeleteAuthor={handleDeleteAuthor}
            />
          ))}
          {/* {renderAuthors(authors)} */}
        </div>
     
    </>
  );
}

export default Author;