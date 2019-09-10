import React, { Component } from 'react'

export class Show extends Component {
    state = {

    }

    render() {
        console.log(this.props.item)
        return (
            <div>
                         <img className="recipe__box-img" src={this.props.item.recipe.image} alt={this.props.item.recipe.label}/>
                             <h3>
                            {this.props.item.recipe.label} 
                            </h3>
                            <p>Publisher:<span></span></p>
                           
                            <div>
                                <button > View Recipe</button>
                            </div>

            </div>
                   
                            
                            
                      
                
               
        )
    }
}

export default Show
