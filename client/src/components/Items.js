import React, { Component } from 'react'
import axios from 'axios'

export default class Items extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        //make request to get all db documents
        let self = this

        axios.get('/items')
            .then(function (response) {
                //console.log(response.data);
                self.setState({
                    items: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        var items = this.state.items
        return (
            <div className="row">
                <p className="pageHeader">List</p>
                <ul className="collection">
                    {items.map((item, i) => {
                        return <li key={item._id} href="#!" className="collection-item">{i + 1 + '. ' + item.title}</li>
                    })}
                </ul>


            </div>
        )
    }
}
