import React from "react";
import "./style.css";


function searchBar () {
    return (
        <div className="searchBox">
            <form className="form-inline">
                <input
                className="input"
                    type="search"
                    placeholder="Search name"
                />
                <button className="btn btn-light" type="submit">
                    Search
                 </button>
            </form>
        </div>
    );
}
export default searchBar;