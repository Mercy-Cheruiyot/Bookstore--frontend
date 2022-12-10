import BookItem from "./BookItem";

function BookCollection({books,handleUpdateBook,handleDeleteBook}){
    const bookCollection= books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          updateBook={handleUpdateBook}
          deleteBook={handleDeleteBook}
        />
      ))
      return(
        <div className="grid grid-cols-3 p-1 px-1 py-1 gap-4">
          {bookCollection}
        </div>
      ) 

}
export default BookCollection;
