import React from "react";

function SearchBar() {
    return (
        
        <form className="d-flex" style={{padding:"1px 0px 0px 16px"}}>
            <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success" type="submit">Search</button>
        </form>
        
    );
}

export default SearchBar;