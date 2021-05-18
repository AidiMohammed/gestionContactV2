import Contacts from "../Components/contacts/Contacts";

const initState = {
    listContacts : [
        {id: 1, name: "MohammedAidi", email: "Mohammed@gmail.com", phone: "+212633356139"},
        {id: 2, name: "Ahmmed", email: "ahammed@gmail.com", phone: "+212633356140"},
        {id: 3, name: "Imane", email: "imane@gmail.com", phone: "+212633356141"}
    ]
}

export default function(state = initState,action)
{
    switch(action.type)
    {
        case "GET_CONTACTS":
            {return state};

        case "DELET_CONTACT":
            return {
                ...state,
                listContacts: state.listContacts.filter(contact => contact.id !== action.paylod)};

        case "ADD_CONTACT":
            {
                return {listContacts: [...state.listContacts,action.paylod]};
            }
                
        default: 
            {return state};
    }
}