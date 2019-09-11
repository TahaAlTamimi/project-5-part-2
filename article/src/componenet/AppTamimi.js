import React, { Component } from 'react'
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Show from './Show'
import axios from 'axios';

export class AppTamimi extends Component {
    state = {
        item: "",
        number: "",
       
    }


    get = (e) => {
        e.preventDefault();
        console.log(e)
        const write = e.target.item.value;
        console.log(write.length)
        console.log(write)
        // const cal=e.target.number.value;
        // console.log(cal)
        // const cal2=e.target.number2.value;

        // write.length > 0 ? (
        //     axios.get(`https://api.edamam.com/search?q=${write}&app_id=77d87f48&app_key=
        //     51d677ed63085c24fce0cf038ed04cd0&to=10&health=alcohol-free&health=pork-free`)
        //         .then(res => {
        //             console.log(res.data.hits)

        //             this.setState({
        //                 item: res.data.hits
        //             })
        //         })
        // ) : (<h2>Please enter true food</h2>)

        axios.get(`https://api.edamam.com/search?q=${write}&app_id=77d87f48&app_key=
        51d677ed63085c24fce0cf038ed04cd0&to=10&`)
            .then(res => {
                console.log(res.data.hits)
                    if(res.data.hits.length)
                    {
                        this.setState({
                        item: res.data.hits
                    })}
                
            })






        // console.log(write)
    }



    componentDidMount = () => {
        axios.get(`https://api.edamam.com/search?q=diet and healthy&app_id=77d87f48&app_key=
            51d677ed63085c24fce0cf038ed04cd0&from=0&to=10&calories=591-722&health=alcohol-free&health=pork-free`)
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
        // console.log(write)
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
