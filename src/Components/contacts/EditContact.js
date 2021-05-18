import React, { Component } from 'react';
import InputGroup from '../helpers/InputGroup';
import {getContact,upDateContact} from '../../actions/actionsContacts' 
import {connect} from 'react-redux';


class EditContact extends Component 
{
    componentDidMount()
    {
        const {id} = this.props.match.params;
        this.props.getContact(id);
    }

    componentWillReceiveProps(nextProps,nextState)
    {
        const {name,email,phone} = nextProps.contact;

        this.setState({
            name,
            email,
            phone
        })
    }

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

        const newContact = {
            name,
            email,
            phone,
            id: this.props.contact.id
        }
        console.log("up date contact : ",newContact);
        this.props.upDateContact(newContact)

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
    }
    render() 
    {
        const {name,email,phone,errors} = this.state;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Edit Contact</h4>
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
                                <button type="submit" className="btn btn-danger btn-block">Update Contact</button>  
                            </form>                                         
                        </div> 
                    </div>      
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>
{
    return{
        contact: state.moduleContact.contact
    }
}

export default connect(mapStateToProps,{getContact,upDateContact})(EditContact);