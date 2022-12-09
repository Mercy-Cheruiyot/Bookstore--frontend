
// import { useState, useEffect} from "react";
// import AuthorCard from "./AuthorCard";

// function Search() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [author, setAuthors] = useState([]);
//     const [q, setQ] = useState("");
    
//     const [searchParam] = useState(["capital", "name"]);
//     const [filterParam, setFilterParam] = useState(["All"]);
//     useEffect(() => {
//         fetch("books")
//             .then((res) => res.json())
//             .then(
//                 (result) => {
//                     setIsLoaded(true);
//                     setAuthors(result);
//                 },

//                 // Note: it's important to handle errors here
//                 // instead of a catch() block so that we don't swallow
//                 // exceptions from actual bugs in components.
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             );
//     }, []);

//     /* here we create a function 
// //     we filter the author
// // use array property .some() to return an author even if other requirements didn't match
//     */
//     function search(author) {
//         return author.filter((author) => {
//             /* 
// //             in here we check if our region is equal to our c state
// // if it's equal to then only return the author that match
// // if not return All the countries
//             */
//             if (author.region == filterParam) {
//                 return searchParam.some((newauthor) => {
//                     return (
//                         author[newauthor]
//                             .toString()
//                             .toLowerCase()
//                             .indexOf(q.toLowerCase()) > -1
//                     );
//                 });
//             } else if (filterParam == "All") {
//                 return searchParam.some((newauthor) => {
//                     return (
//                         author[newauthor]
//                             .toString()
//                             .toLowerCase()
//                             .indexOf(q.toLowerCase()) > -1
//                     );
//                 });
//             }
//         });
//     }

//     if (error) {
//         return (
//             <p>
//                 {error.message}, if you get this error, the free API I used
//                 might have stopped working, but I created a simple example that
//                 demonstrate how this works,{" "}
//                 <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
//                     {" "}
//                     check it out{" "}
//                 </a>{" "}
//             </p>
//         );
//     } else if (!isLoaded) {
//         return <>loading...</>;
//     } else {
//         return (
//             <div className="wrapper">
//                 <div className="search-wrapper">
//                     <label htmlFor="search-form">
//                         <input
//                             type="search"
//                             name="search-form"
//                             id="search-form"
//                             className="search-input"
//                             placeholder="Search for..."
//                             value={q}
//                             /* 
//                             // set the value of our useState e
//                             //  anytime the user types in the search box
//                             */
//                             onChange={(e) => setQ(e.target.value)}
//                         />
//                         <span className="sr-only">Search authors</span>
//                     </label>

//                     <div className="select">
//                         <select
//                             /* 
// //                         here we create a basic select input
// //                     we set the value to the selected value 
// //                     and update the setC() state every time onChange is called
//                     */
//                             onChange={(e) => {
//                                 setFilterParam(e.target.value);
//                             }}
//                             className="custom-select"
//                             aria-label="Filter Countries By Countries"
//                         >
//                             <option value="All">Filter By Region</option>
//                             <option value="Anime">Africa</option>
//                             <option value="Financial">America</option>
//                             <option value="Comic">Asia</option>
//                             <option value="Romance">Europe</option>
                            
//                         </select>
//                         <span className="focus"></span>
//                     </div>
//                 </div>
//                 <ul className="card-grid">
//                     {search(author).map((author) => (
                        
//                             <AuthorCard key={author.id} author={author}/>
                        
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }
// export default Search;