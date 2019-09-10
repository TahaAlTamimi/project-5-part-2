import React, { Component } from 'react'
import NavBar from './NavBar';
import SearchBar from './SearchBar';

export class AppTamimi extends Component {
    state = { }


    get=(e)=>{
        e.preventDefault();
        const item=e.target.item.value
        console.log(item)
    }

    render() {
        return (
            <div>
                <NavBar/>
                <SearchBar  get={this.get}/>
            </div>
        )
    }
}

export default AppTamimi
