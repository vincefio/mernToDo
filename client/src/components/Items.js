import { log } from "util";

import React, { Component } from 'react'
import axios from 'axios'
import Additem from './Additem'

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            reset: false
        }

        //this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
        this.getRequest = this.getRequest.bind(this)
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

    getRequest() {
        //make request to get all db documents
        let self = this

        axios.get('/items')
            .then((response) => {
                //console.log(response.data);
                this.setState({
                    items: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    /* componentWillReceiveProps(nextProps) {
         console.log('next props ' + JSON.stringify(nextProps.reset))
         var newThang = nextProps.reset
         var self = this
         this.setState({
             ...this.state,
             reset: newThang
         })
 
         //nextProps.handler()
     }*/


    render() {
        var items = this.state.items

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

                <Additem function={this.getRequest} />
            </div>
        )
    }
}
