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
                console.log(response.data);
                self.setState({
                    items: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="row">
                <p className="pageHeader">List</p>
            </div>
        )
    }
}
