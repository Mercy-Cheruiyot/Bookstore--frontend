function SearchBar({search,onSearchChange}){

    return(
        <div>
        <input type="text"
        className="input"
        onChange={e=>
            onSearchChange(e.target.value)}
        placeholder="searching ..."/>
      </div>
    )
}
export default SearchBar;