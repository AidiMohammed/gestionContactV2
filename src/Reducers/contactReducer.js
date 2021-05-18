import Contacts from "../Components/contacts/Contacts";

const initState = {
    listContacts : [],
    contact: {}
}

export default function(state = initState,action)
{
    switch(action.type)
    {
        case "GET_CONTACTS":
            return {...state,
                listContacts: action.paylod
            };                


        case "DELET_CONTACT":
            return {
                ...state,
                listContacts: state.listContacts.filter(contact => contact.id !== action.paylod)};

        case "ADD_CONTACT":
            return {
                ...state,
                listContacts: [...state.listContacts,action.paylod]
            };
            
        case "GET_CONTACT":
            return{
                ...state,
                contact: action.paylod
            }

        case "UPDATE_CONTACT":
            return{
                ...state,
                listContacts: state.listContacts.map(contact => contact.id === action.paylod.id ? (action.paylod) : contact)
            }

        default: 
            {return state};
    }
}