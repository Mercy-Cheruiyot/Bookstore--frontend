import { useState } from "react";

const initialState = {
  title: "",
  author_id: "",
  publication_year: "",
  genre:"",
  image_url:""
};

function NewBookForm({ onAddBook }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newBook) => {
        setFormData(initialState);
        onAddBook(newBook);
      });
  }

//   return (
//     <div class="p-10">
   
//       <h2>New Book</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title: </label>
//         <input
//           type="text"
//           id="title"
//           value={formData.title}
//           onChange={handleChange}
//         />
//         <label htmlFor="image">Image URL: </label>
//         <input
//           type="text"
//           id="image"
//           value={formData.image}
//           onChange={handleChange}
//         />
//         <label htmlFor="notes">Tasting Notes: </label>
//         <input
//           type="text"
//           id="notes"
//           value={formData.notes}
//           onChange={handleChange}
//         />
//         <label htmlFor="description">Description: </label>
//         <textarea
//           id="description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//         <label htmlFor="rating">Rating: </label>
//         <input
//           type="number"
//           id="rating"
//           max="5"
//           value={formData.rating}
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
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
                    focus:bg-white focus:border-blue-500" id="title" type="text" placeholder="Enter Book Title" 
                    name="title" onChange={handleChange} value={formData.title}/>
                </div>
            </div>
            <div class="md:flex md:justify-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="author">
                        Author
                    </label>
                </div>
                <div class="md:w-2/3">
                    < input class="bg-gray-200 appearance-none border-2 border-gray-200 round" id="author" 
                    type ="text" placeholder="Enter Author" name="author" onChange={handleChange} 
                    value={formData.Author} />
                </div>
            </div>
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
                     placeholder="Enter Year of Publication" name="publication_year"
                     onChange={handleChange}
                      value={formData.publication_year} />
                </div>
            </div>
            {/* <div class="md:flex md:justify-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        Description
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-password" type="text" placeholder="Enter Description" name="description" onChange={handleChange} value={formData.description} />
                </div>
            </div> */}
            <div class="md:flex md:justify-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="image">
                        Image
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 
                    leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="image"
                     type="url" placeholder="Upload Image link" name="image" onChange={handleChange} value={formData.image} />
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
