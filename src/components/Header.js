import React from 'react';
import SearchBox from './SearchBox'


function Header (props) {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="text-center text-white">Employee Directory</h1>
                    <p className="lead text-center text-white">Click on carrots to filter by heading or use the search box to narrow results.</p>
                    <SearchBox handleSearchChange={props.handleSearchChange}/>
                </div>
            </div>
        </div>
    )
}

export default Header;