import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {deletContact} from '../../actions/actionsContacts'

class Contact extends Component {
    state = {
        showInfoContact: true
    }
    togolShowContact = (id)=>
    {
        this.setState({showInfoContact: !this.state.showInfoContact})
    }

    deletContact = (id)=>
    {
        console.log("delet contact id : ",id);
        this.props.deletContact(id);
    }

    render() {
        const {name,phone,email,id} = this.props.data;
        return (
            <div className="card">
                <div className="card-body mb-3">
                    <h4 className="card-title">{name}
                    {(this.state.showInfoContact) ? 
                        <i onClick={this.togolShowContact.bind(this,id)} style={{marginLeft: "15px", cursor:"pointer"}} className="fa fa-arrow-circle-up" aria-hidden="true"></i>
                        :
                        <i onClick={this.togolShowContact.bind(this,id)} style={{marginLeft: "15px", cursor:"pointer"}} className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                    }
                    
                    <div style={{float: "right"}} className="butons">
                        <Link to={`/contact/edit/${id}`}> <button type="button" className="btn btn-primary">Modifier</button></Link>
                        <button onClick ={this.deletContact.bind(this,id)} style={{marginLeft: "5px"}} type="button" className="btn btn-danger">Supprimer</button> 
                    </div>                   
                    </h4>

                    {(this.state.showInfoContact) ? 
                        <div >
                            <p>tel : {phone}</p>
                            <p>email : {email}</p>
                        </div>:
                        null
                    }

                </div>                    
            </div>
        )
    }
}

Contact.defaultProps= {
    name: "Name",
    email: "example@mail.com",
    phone: "0123456789"
}

Contact.propTypes = {
    data: PropTypes.object.isRequired 
}
export default connect(null,{deletContact})(Contact);