import React, { Component } from 'react'
import axios from 'axios'
import Items from './Items'

export default class Additem extends Component {
    constructor() {
        super()
        this.state = {
            toDoItem: '',
            reset: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        var self = this
        //axios call/add item to db
        axios.post('/item', {
            title: this.state.toDoItem
        })
            .then(function (response) {
                console.log(response);

                self.setState({
                    ...self.state,
                    reset: true
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handler() {
        this.setState({
            ...this.state,
            reset: false
        })
    }

    render() {
        return (
            <div>
                <div className="">
                    <Items reset={this.state.reset} />
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <p className="pageHeader">Add Item</p>
                                <input name="toDoItem" onChange={this.handleChange} placeholder="What needs to get done?" id="first_name" type="text" className="validate"></input>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Add
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
