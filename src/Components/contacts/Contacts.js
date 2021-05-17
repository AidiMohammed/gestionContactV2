import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component 
{
    state = {
        listContactes: [
            {id: 1,name: "Mohammed", email: "Mohammed@gmail.com",phone: "0633356139"},
            {id: 1,name: "Ahmed", email: "ahmed@gmail.com",phone: "0633356140"},
            {id: 1,name: "Karim", email: "karim@gmail.com",phone: "0633356141"},
        ]
    }

    render() {
        const {listContactes} = this.state;
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

export default Contacts;
