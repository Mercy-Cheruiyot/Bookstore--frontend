
function AuthorCard({ author, onUpdateAuthor, onDeleteAuthor }) {
    const { id,name, image, title, genre} = author;
  
    function handleUpateAuthor() {
     
      fetch(`https://storebooks-production.up.railway.app/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((r) => r.json())
        .then(onUpdateAuthor);
    }
  
    function handleDeleteAuthor() {
      fetch(`https://storebooks-production.up.railway.app/authors/${id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          onDeleteAuthor(author);
        }
      });
    }
  
    return (
      
        <div key={id} onClick={handleUpateAuthor} class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src={image} alt={title}/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
      <p>Incredible accomodation for your team</p>
      <p class="mt-2 text-slate-500">{title} </p>
      <p class="mt-2 text-slate-500">{genre} </p>
      <p>
      <button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs 
                      leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
                       focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition
                        duration-150 ease-in-out" onClick={handleDeleteAuthor}> Delete Author</button>
           
          </p>
    </div>
  </div>
</div>
    );
  }
  
  export default AuthorCard;