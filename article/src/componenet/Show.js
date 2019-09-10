import React, { Component } from 'react'
// import Inte from './Inte'
// import axios from 'axios'
export class Show extends Component {
    state = {
        recipeState: "",
        appear:false

    }

    clear = () => {
        this.setState({
            recipeState: ""
        })
    }

    // shouldComponentUpdate(nextprops, nextstate) {
    //     console.log('nextprops:', nextprops.item.recipe.label)
    //     this.view(nextprops.item.recipe.label)
    //     return true
    // }

    view = (recipe) => {
        // this.setState({item:""})
        // console.log("item",recipe)
        // const write=e.target.item.value;t

        console.log(this.state.appear)
        this.setState({
            appear:!this.state.appear
        })


        // axios.get(`https://api.edamam.com/search?q=${recipe}&app_id=77d87f48&app_key=
        //     51d677ed63085c24fce0cf038ed04cd0`)
        //     .then(res => {

        //         console.log(res.data.hits[0].recipe.ingredients)

        //         this.setState({
        //             recipeState: res.data.hits[0].recipe.ingredients
        //         })
                // this.setState({item:""})
            // })





        // console.log(write)
    }

    render() {
        // console.log(this.props.item)
        console.log(this.props.item.recipe)
        return (
            <div>
                <img className="recipe__box-img" src={this.props.item.recipe.image} alt={this.props.item.recipe.label} />
                <h3>
                    {this.props.item.recipe.label}<i className="fas fa-chevron-circle-down" alt="more info" onClick={this.view}></i>
                </h3>
                {this.state.appear? <div>

                    <h5>Calories:{this.props.item.recipe.calories}</h5>
                    <p>
                        {this.props.item.recipe.ingredients.map((item,index)=>{
                            return <li key={index}>{item.text}</li>
                        })}
                    </p>

                </div>:null}
               


                {/* <div>
                    <button id="test" onClick={this.view.bind(this, this.props.item.recipe.label)}> View Recipe

                        {this.props.item.recipe.label} </button>
                </div>
                {/* {this.state.recipeState.length}
                <div>
                    {/* {this.state.recipeState.length > 0 && this.state.recipeState.map((elem, index) => {
                        return <Inte key={index} content={elem} />
                    })} */}
               

            </div>






        )
    }
}

export default Show
