import React, { Component } from 'react'
import axios from 'axios'

export default class Additem extends Component {
    constructor() {
        super()
        this.state = {
            toDoItem: ''
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

        //axios call/add item to db
        axios.post('/item', {
            title: this.state.toDoItem
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className="row">

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
