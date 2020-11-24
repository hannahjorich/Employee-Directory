import React from "react";

function SearchBox({search, handleSearchChange}) {
  return (
    <form className="search">
    <div className="form-group row">
      <div className="col-10">
          <input
          onChange={(event) => handleSearchChange(event)}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Type in a name to search"
          id="employee"
          />
      </div>
      <div className="col-2">
          <button type="submit" onClick={search} className="btn btn-primary">
              Search
          </button>
      </div>
    </div>
  </form>
  );
}

export default SearchBox;
