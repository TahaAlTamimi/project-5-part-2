import React from 'react';


const SearchBar =(props)=> (

<div >
    <h3>
    
    <i className="fas fa-bread-slice"></i> 
    Find more recipe
    </h3>

        <form onSubmit={props.get} style={{marginBottom:"2rem"}}> 
        <p>food:<input type="text" name="item" /></p><br></br>
        <p>calories: <input type="number" name="number"/> </p>
        <button >Search</button>
         </form>

</div>
    
)

export default SearchBar;
