import { useState, useEffect } from "react";
import NewBookForm from "./NewBookForm.js";
import BookCollection from "./BookCollection";
// import BookItem from "./BookItem.js";
import SearchBar from "./SearchBar.js";




function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/books", {
      method: 'GET'})
      .then((r) => r.json())
      // .then(books => setBooks([books]));
      .then(setBooks);
  }, []);
  
// const displayeditems=books.filter(book =>{return books.genre.toLowercase().includes(search.toLowerCase())})

  function handleAddBook(addedBook) {
    setBooks((books) => [...books, addedBook]);
  }

  function handleUpdateBook(updatedBook) {
    setBooks((books) =>
      books.map((book) => {
        return book.id === updatedBook.id ? updatedBook : book;
      })
    );
  }

  function handleDeleteBook(deletedBook) {
    setBooks((books) =>
      books.filter((book) => book.id !== deletedBook.id)
    );
  }

  return (
    <>
   <SearchBar search={search} onSearchChange={setSearch}/>
   {/* {displayeditems} */}
    <ul>
      {/* {books.filter(book.toLowercase().includes(search.toLowercase())).map((item,key)=>(
        <li key={key}>
          {item}{''}

        </li>
      ))} */}
     
    </ul>
  
      <main >

        
        <NewBookForm onAddBook={handleAddBook} />
        
     
        {/* <div className="grid grid-cols-3 p-1 px-1 py-1 gap-4">
        
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onUpdateBook={handleUpdateBook}
              deleteBook={handleDeleteBook}
            />
          ))}
        </div> */}
        <BookCollection books={books} handleUpdateBook={handleUpdateBook}
              handleDeleteBook={handleDeleteBook}/>
      </main>
 
    </>
  );
}

export default Home;