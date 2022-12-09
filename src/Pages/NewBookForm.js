
import { useState } from "react";

function NewBookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const[publicationYear, setPublicationYear]= useState("")
  const[authorId,setAuthorId]=useState("")
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        image: image,
        genre:genre,
        author_id:authorId,
       publication_year:publicationYear

      }),
    })
      .then((r) => r.json())
      .then((newBook) => onAddBook(newBook));
  }

  return (
    <div className="new-plant-form">
      <h2>New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="genre"
          
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
          <input
          type="number"
          name="authorId"
          
          placeholder="AuthorId"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
        />
        <input
          type="number"
          name="publicationYear"
          
          placeholder="PublicationYear"
          value={publicationYear}
          onChange={(e) => setPublicationYear(e.target.value)}
        />


        <button type="submit">Add Book</button>
      </form>
      
    </div>

  );
}
export default NewBookForm;