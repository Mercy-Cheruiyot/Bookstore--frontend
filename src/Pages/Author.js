import AuthorCard from "./AuthorCard";
import { useState, useEffect } from "react";

function Author() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("/authors")
      .then((r) => r.json())
      .then(setAuthors);
  }, []);

  // function handleAddAuthor(addedAuthor) {
  //   setAuthors((authors) => [...authors, addedAuthor]);
  // }

  // function handleUpdateAuthor(updatedAuthor) {
  //   setAuthors((authors) =>
  //     authors.map((author) => {
  //       return author.id === updatedAuthor.id ? updatedAuthor : author;
  //     })
  //   );
  // }

  function handleDeleteAuthor(deletedAuthor) {
    setAuthors((author) =>
      authors.filter((author) => author.id !== deletedAuthor.id)
    );
  }

  return (
    <>
      
      <main>
        {/* <NewAuthorForm onAddAuthoor={handleAddAuthor} /> */}
        <section className="author-list">
          {authors.map((author) => (
            <AuthorCard
              key={author.id}
              author={author}
              // onUpdateauthor={handleUpdateAuthor}
              onDeleteAuthor={handleDeleteAuthor}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Author;