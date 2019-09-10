import React from 'react';


const SearchBar =(props)=> (

<div >
    <h3>
    
    <i className="fas fa-bread-slice"></i> 
    Find more recipe
    </h3>

        <form onSubmit={props.get} style={{marginBottom:"2rem"}}> 
        <input type="text" name="item" />
        <button >Search</button>
         </form>

</div>
    
)

export default SearchBar;
