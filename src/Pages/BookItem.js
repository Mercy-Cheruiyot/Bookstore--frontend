import React from "react";
// // import { Link } from "react-router-dom";

// function BookItem({ book, 
//     // onUpdateBook, onDeleteBook
// }){
//     // const imageStyle = {
//     //     maxWidth: "400px",
//     //     maxHeight: "400px",
//     //     objectFit: "contain"
//     //   }
//     // const {id} = book;
  

  
//     // function handleDeleteBook() {
//     //   fetch(`/books/${id}`, {
//     //     method: "DELETE",
//     //   }).then((r) => {
//     //     if (r.ok) {
//     //       onDeleteBook(book);
//     //     }
//     //   });
//     // }
//     return (
//         <div>
//         <div key={book.id} className="books-list bg-gray-800 p-2 rounded-lg my-4 max-w-xs">
            
//         {/* <div className="spice-item card"> */}
//           {/* <img src={image} alt={title} /> */}
//           <img className="mb-4 w-full rounded-lg" src={book.image} alt="title" />
//           <div className="md:p-4 p-2">
//                 <h2 className="font-semibold text-gray-300 md:text-3xl text-xl">{book.genre}</h2>
//                 <h3 className="text-blue-400 md:text-xl text-lg font-light">{book.title}</h3>
//                 <h3 className="text-blue-400 md:text-xl text-lg font-light">{book.publication_year}</h3>
                
//                 {/* <p className="text-white">{house.description.split(/\s+/).slice(0, 20).join(" ")}</p>
//                 <h3 className="md:text-xl text-lg text-green-500 font-medium">$ {book.price}</h3> */}
//             </div>
            
//         <p>
//             <button
//             //  onClick={handleDeleteBook}
//              >Delete Book</button>
//         </p>
          
           
//         </div>
//         </div>
//       );
  
   
// }

// export default BookItem;

import { useState } from "react";

 function BookItem({ book,deleteBook,updateBook}){
 const   { id,title,image,publicationYear,genre } = book
 const [isInStock, setIsInStock] = useState(true);
 const imageStyle = {
    maxWidth: "400px",
    maxHeight: "400px",
    objectFit: "contain"
}

  function handleToggleStock() {
    setIsInStock((isInStock) => !isInStock);
  }
  function handleBookDelete(){
    fetch(`https://storebooks-production.up.railway.app/books/${id}`, {
        method: 'DELETE'
    }).then((r) => {
    if (r.ok) {
      deleteBook(book);
    }
  });
}
function handleUpdate(){
  fetch(`https://storebooks-production.up.railway.app/books/${id}`, {
      method: 'PATCH'
  }).then((r) => {
  if (r.ok) {
    updateBook(book);
  }
});
}


 return(
      
            <div key={id} onClick={handleUpdate} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="mb-4 w-full rounded-lg" src={book.image} alt="title" style={imageStyle} />
        <div className="md:p-4 p-2">
                <h2 className="font-semibold text-blue-500 md:text-3xl text-xl">{title}</h2>
                <h3 className="text-blue-400 md:text-xl text-lg font-light">{publicationYear}</h3>
                <h3 className="text-blue-400 md:text-xl text-lg font-light">{genre}</h3>
                <h3 className="md:text-xl text-lg text-green-500 font-medium"> {book.authorId}</h3>
            </div>
            <div  className="flex flex-row" >
            <div className="basis-1/2">
            < button onClick={handleBookDelete}
            // class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"
            className="primary">
                Delete Book
            </button> 
            </div>
            <div className="basis-1/2">
            

      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
      </div>
      </div>
      </div>
      
      
  );
 

 }
 export default BookItem;
