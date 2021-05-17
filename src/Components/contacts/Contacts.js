import React, { Component } from 'react'
import Contact from './Contact'
import {connect} from 'react-redux'

class Contacts extends Component 
{
    componentDidMount()
    {
        this.props.getContactes();
    }
    render() {
        const {listContactes} = this.props;
        return (
            <div>
                <h1 className="display-4 mb-2">
                <span className="text-primary">Contacts</span> List
                </h1>
                {listContactes.map(contact => <Contact key={contact.id} data={contact}/>)}               
            </div>

        )
    }
}

const mpaStateToProps = state =>
{
    return{
        listContactes: state.modelContact.listContactes
    }
}

const mapDispatchToProps = dispatch =>
{
    return{
        getContactes: ()=>
        {
            dispatch({
            type: "GET_CONTACTS"
        })
    }}
}

export default connect(mpaStateToProps,mapDispatchToProps)(Contacts);
