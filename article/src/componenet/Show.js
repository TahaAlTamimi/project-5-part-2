import React, { Component } from 'react'
import axios from 'axios'
export class Show extends Component {
    state = {
        item:""

    }


    view=(recipe)=>{
        console.log("item",recipe)
        // const write=e.target.item.value;
        
            axios.get(`https://api.edamam.com/search?q=${recipe}&app_id=77d87f48&app_key=
            51d677ed63085c24fce0cf038ed04cd0`)
            .then(res=>{
               
                console.log(res.data.hits[0].recipe.ingredientLines)

                this.setState({
                    item:res.data.hits[0].recipe.ingredientLines
                })
            })
            
     

        // console.log(write)
    }

    render() {
        // console.log(this.props.item)
        return (
            <div>
                         <img className="recipe__box-img" src={this.props.item.recipe.image} alt={this.props.item.recipe.label}/>
                             <h3>
                            {this.props.item.recipe.label} 
                            </h3>
                            
                           
                            <div>
                                <button onClick={this.view.bind(this,this.props.item.recipe.label)}> View Recipe</button>
                            </div>
                            <div>
                                <h5>{this.state.item.length>0&&this.state.item.map((recipe,index)=>{
                                   return  <li>{recipe}</li>
                                })}</h5>
                            </div>

            </div>
                   
                            
                            
                      
                
               
        )
    }
}

export default Show
