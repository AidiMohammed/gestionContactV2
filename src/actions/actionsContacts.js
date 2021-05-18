import axios from 'axios';

export const getContacts = () => async dispatch =>
{
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch({
            type: "GET_CONTACTS",
            paylod: res.data
        })        
    }catch(err){console.error(err)}

}

export const deletContact = (id) => async dispatch =>
{
    try{
       const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({
            type: "DELET_CONTACT",
            paylod: id
        })
    }catch(err){console.error(err)}
}

export const addContact = (contact) => async dispatch =>
{
    try
    {
        const res = await axios.post("https://jsonplaceholder.typicode.com/users/",contact);
        console.log( "res : ",res.data);
        dispatch({
            type: "ADD_CONTACT",
            paylod: res.data
        })

    }catch(err){console.err(err)}
}

export const getContact = (id) => async dispatch =>
{
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log(res.data)
        dispatch({
            type: "GET_CONTACT",
            paylod: res.data
        })
    }catch(err){console.error(err)}
}

export const upDateContact = (contactUpDate) => async dispatch =>
{
    try
    {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${contactUpDate.id}`,contactUpDate);
        
        dispatch({
            type: "UPDATE_CONTACT",
            paylod: contactUpDate
        })

    }catch(err){console.error(err)}
}