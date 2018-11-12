import { log } from "util";

import React, { Component } from 'react'
import axios from 'axios'

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            reset: this.props.reset
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

    componentWillRecieveProps(nextProps) {
        // console.log('next props ' + nextProps)
        this.setState({

            reset: this.props.reset
        })


    }

    render() {
        var items = this.state.items

        if (this.props.reset) {
            this.setState({
                reset: this.props.reset
            })
        }
        return (
            <div className="row">
                <p className="pageHeader">List</p>
                <ul className="collection col s6">
                    {items.map((item, i) => {
                        return <li key={item._id} href="#!" className="clearfix collection-item">{i + 1 + '. ' + item.title}
                            <a className="red darken-1 btn-small right project-delete deleteButton"><i className="material-icons">clear</i></a>
                        </li>
                    })}
                </ul>


            </div>
        )
    }
}
