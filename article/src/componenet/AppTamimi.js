import React, { Component } from 'react'
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Show from './Show'
import axios from 'axios';

export class AppTamimi extends Component {
    state = { item: "" }


    get = (e) => {
        e.preventDefault();
        const write = e.target.item.value;

        axios.get(`https://api.edamam.com/search?q=${write}&app_id=77d87f48&app_key=
            51d677ed63085c24fce0cf038ed04cd0`)
            .then(res => {
                console.log(res.data.hits)

                this.setState({
                    item: res.data.hits
                })
            })



        console.log(write)
    }



    componentDidMount = () => {
        axios.get(`https://api.edamam.com/search?q=diet&app_id=77d87f48&app_key=
            51d677ed63085c24fce0cf038ed04cd0`)
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
