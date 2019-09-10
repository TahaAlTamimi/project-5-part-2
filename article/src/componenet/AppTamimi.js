import React, { Component } from 'react'
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Show from './Show'
import axios from 'axios';

export class AppTamimi extends Component {
    state = { item:""}


    get=(e)=>{
        e.preventDefault();
        const write=e.target.item.value;
        
            axios.get(`https://www.food2fork.com/api/search?key=aedbb2d845263a9cad4857bcec585195&q=${write}&count=6`)
            .then(res=>{
                // console.log(res.data.recipes)

                this.setState({
                    item:res.data.recipes
                })
            })
            
     

        console.log(write)
    }

    render() {
        return (
            <div>
                <NavBar/>
                <SearchBar  get={this.get}/>

                {this.state.item.length>0&&this.state.item.map((item,index)=>{
                   return (
                       <div className="container">
                           <div className="row">
                           <Show item={item} key={index}/>
                           </div>
                         
                       </div>
                   
                   )
                })}

            </div>
        )
    }
}

export default AppTamimi
