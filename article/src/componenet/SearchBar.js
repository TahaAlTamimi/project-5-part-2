import React, { Component } from 'react';


const SearchBar =(props)=> (

<div>
    <h3>
    
    <i class="fas fa-bread-slice"></i> 
    Find more recipe
    </h3>

        <form onSubmit={props.get}> 
        <input type="text" name="item"/>
        <button >Search</button>
         </form>

</div>
    
)

export default SearchBar;
