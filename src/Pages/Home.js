import { useState, useEffect } from "react";
import NewBookForm from "./NewBookForm.js";
import BookItem from "../Pages/BookItem";




function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books")
      .then((r) => r.json())
      .then(setBooks);
  }, []);

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
  
      <main >
        
        <NewBookForm onAddBook={handleAddBook} />
        
     
        <div className="grid grid-cols-3 p-1 px-1 py-1 gap-4">
        
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onUpdateBook={handleUpdateBook}
              deleteBook={handleDeleteBook}
            />
          ))}
        </div>
      </main>
 
    </>
  );
}

export default Home;