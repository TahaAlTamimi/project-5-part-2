import React, { Component } from 'react'

export class Show extends Component {
    state = {

    }

    render() {
        console.log(this.props.item)
        return (
            <div>
                         <img className="recipe__box-img" src={this.props.item.image_url} alt={this.props.item.title}/>
                             <h3>
                            {this.props.item.title} 
                            </h3>
                            <p>Publisher:<span></span></p>

            </div>
                   
                            
                            
                      
                
               
        )
    }
}

export default Show
