import { useState, useEffect } from "react";
//import Header from "./Header";
import NewBookForm from "./NewBookForm.js";
import BookItem from "../Pages/BookItem"

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

//   function handleUpdateBook(updatedBook) {
//     setbooks((books) =>
//       books.map((book) => {
//         return book.id === updatedBook.id ? updatedBook : book;
//       })
//     );
//   }

//   function handleDeleteBook(deletedBook) {
//     setbooks((books) =>
//       books.filter((book) => book.id !== deletedBook.id)
//     );
//   }

  return (
    <>
      {/* <Header BookCount={books.length} /> */}
      <main>
        
        <NewBookForm onAddBook={handleAddBook} />
        <div >
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
            //   onUpdateBook={handleUpdateBook}
            //   onDeleteBook={handleDeleteBook}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;