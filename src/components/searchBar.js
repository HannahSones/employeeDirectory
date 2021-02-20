import React, { useState } from "react";
import "./style.css";


const Search = () => {

    const [ fetchResults, setFetchResults ] = useState();
    const [ search, setSearch ] = useState();

    function getSearchResults(){
        console.log('Searching for:', search)
        const searchedUser = fetchResults.filter(fetchResults => search.indexOf(fetchResults.name.first)> -1 || search.indexOf(fetchResults.name.last)> -1)
        console.log(searchedUser)
        setFetchResults(searchedUser)
    }


    function handleInputChange(event){
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        getSearchResults()
    }

    return (
        <div className="searchBox">
            <form className="form-inline">
                <input value={search} onChange={handleInputChange}
                className="input"
                    type="search"
                    placeholder="Search name"
                />
                <button onClick={handleFormSubmit} className="btn btn-light" type="submit">
                    Search
                 </button>
            </form>
        </div>
    );
}

export default Search;