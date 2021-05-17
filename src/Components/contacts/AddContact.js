import React, { Component } from 'react';
import InputGroup from '../helpers/InputGroup'

class AddContact extends Component 
{
    state = {
        name: "",
        phone: "",
        email: "",
        errors: {}
    }
    submitContact = e =>
    {
        const {name,phone,email} = this.state;
        e.preventDefault()

        if(name === "")
        {
            this.setState({errors: {name: "The Name Is Required !"}})
            return;
        }
        if(phone === "")
        {
            this.setState({errors: {phone: "The Phone Is Required !"}});
            return;
        }
        if(email === "")
        {
            this.setState({errors: {email: "The Email Is Required !"}});
            return;
        }

        this.setState({
            name: "",
            phone: "",
            email: "",
            errors: {}
        })
        this.props.history.push("/")
    }
    onChangeInput = e =>
    {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.name)
    }
    render() 
    {
        const {name,email,phone,errors} = this.state;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add new Contact</h4>
                        <div className="card-text">
                            <form onSubmit ={this.submitContact}>
                                <InputGroup
                                    name = "name"
                                    label = "Name"
                                    type = "text"
                                    onChange = {this.onChangeInput}
                                    value = {name}
                                    errors = {errors.name}
                                />
                                <InputGroup
                                    name = "phone"
                                    label = "Tel"
                                    type = "text"
                                    onChange = {this.onChangeInput}
                                    value = {phone}
                                    errors = {errors.phone}
                                />
                                <InputGroup
                                    name = "email"
                                    label = "Email"
                                    type = "email"
                                    onChange = {this.onChangeInput}
                                    value = {email}
                                    errors = {errors.email}
                                />
                                <button type="submit" className="btn btn-success btn-block"> Add new Contact</button>  
                            </form>                                         
                        </div> 
                    </div>      
                </div>


            </div>
        )
    }
}

export default AddContact