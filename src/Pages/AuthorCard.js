
function AuthorCard({ author, onUpdateAuthor, onDeleteAuthor }) {
    const { id,name, image, title, genre} = author;
  
    // function handleUpdateAuthor() {
     
    //   fetch(`/books/${id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(),
    //   })
    //     .then((r) => r.json())
    //     .then(onUpdateAuthor);
    // }
  
    function handleDeleteAuthor() {
      fetch(`/authors/${id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          onDeleteAuthor(author);
        }
      });
    }
  
    return (
      <div className="spice-item card">
        <img src={image} alt={title} />
        <div className="details">
          <h2>{name}</h2>
          <p>{genre}</p>
          <p>
            Tasting Notes: <em>{title}</em>
          </p>
          
          <p>
            <button onClick={handleDeleteAuthor}>Delete Spice</button>
          </p>
        </div>
      </div>
    );
  }
  
  export default AuthorCard;