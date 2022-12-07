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
    <div class="p-10">
        <form class="w-full max-w-sm flex flex-col" onSubmit={handleSubmit} >
            <div class="md:flex md:justify-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="title">
                        Title
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
                    text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-blue-500"
                     id="title" type="text" placeholder="Enter Book Title" 
                    name="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                </div>
            </div>
            <div class="md:flex md:justify-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="title">
                        Category
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
                    text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-blue-500"
                     id="genre" type="text" placeholder="Enter Category" 
                    name="genre"  onChange={(e) => setGenre(e.target.value)} value={genre}/>
                </div>
            </div>
            {/* <div class="md:flex md:justify-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="author">
                        Author
                    </label>
                </div>
                <div class="md:w-2/3">
                    < input class="bg-gray-200 appearance-none border-2 border-gray-200 round" id="author" 
                    type ="number" placeholder="Enter Author" name="authorId"  onChange={(e) => setAuthorId(e.target.value)}
                    value={authorId} />
                </div>
            </div> */}
            <div class="md:flex md:justify-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="publication-year">
                        Publication Year
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 
                    leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="publication_year"
                     type="number"
                     placeholder="Enter Year of Publication" name="publicationYear"
                      onChange={(e) => setPublicationYear(e.target.value)}
                      value={publicationYear} />
                </div>
            </div>
            <div class="md:flex md:justify-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="image">
                        Image
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 
                    leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="image"
                     type="url" placeholder="Upload Image link" name="image"  onChange={(e) => setImage(e.target.value)} value={image} />
                </div>
            </div>
            <div class="md:flex md:justify-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button class="shadow bg-blue-500 hover:bg-green-400 focus:shadow-outline
                     focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Add Book
                    </button>
                </div>
            </div>
        </form>
    </div>
)
}


export default NewBookForm;

// import { useState } from "react";

// function NewBookForm({ onAddBook }) {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [genre, setGenre] = useState("");
//   const[publicationYear, setPublicationYear]= useState("")
//   const[authorId,setAuthorId]=useState("")

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/books", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title: title,
//         image: image,
//         genre:genre,
//         author_id:authorId,
//        publication_year:publicationYear

//       }),
//     })
//       .then((r) => r.json())
//       .then((newBook) => onAddBook(newBook));
//   }

//   return (
//     <div className="new-plant-form">
//       <h2>New Book</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Book Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="url"
//           name="image"
//           placeholder="Image URL"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//         />
//         <input
//           type="text"
//           name="genre"
          
//           placeholder="Genre"
//           value={genre}
//           onChange={(e) => setGenre(e.target.value)}
//         />
//           <input
//           type="number"
//           name="authorId"
          
//           placeholder="AuthorId"
//           value={authorId}
//           onChange={(e) => setAuthorId(e.target.value)}
//         />


//         <button type="submit">Add Book</button>
//       </form>
//     </div>
//   );
// }
// export default NewBookForm;