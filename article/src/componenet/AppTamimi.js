import React, { Component } from 'react'
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Show from './Show'
import axios from 'axios';

export class AppTamimi extends Component {
    state = { 
        item: "",
        number:""
    }


    get = (e) => {
        e.preventDefault();
        const write = e.target.item.value;
        console.log(write)
        const cal=e.target.number.value;
        console.log(cal)

        axios.get(`https://api.edamam.com/search?q=${write}&app_id=77d87f48&app_key=
            51d677ed63085c24fce0cf038ed04cd0&to=8&calories=300`)
            .then(res => {
                console.log(res.data.hits)

                this.setState({
                    item: res.data.hits
                })
            })



        // console.log(write)
    }



    componentDidMount = () => {
        axios.get(`https://api.edamam.com/search?q=diet and healthy&app_id=77d87f48&app_key=
            51d677ed63085c24fce0cf038ed04cd0&to=8&calories=100`)
            .then(res => {
                // console.log(res.data.hits)

                this.setState({
                    item: res.data.hits
                })
            })
            .catch(err => {
                console.log(err)
            })


    }





    render() {
        return (
            <div>
                <NavBar />
                <SearchBar get={this.get} />

                {this.state.item.length > 0 && this.state.item.map((item, index) => {
                    return (
                        <div className="container" key={index}>
                            <div className="row">
                                <Show item={item} key={index} />
                            </div>

                        </div>

                    )
                })}
            </div>
        )
    }
}

export default AppTamimi
