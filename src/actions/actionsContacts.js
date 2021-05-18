export const getContactes = () =>
{
    return {
        type: "GET_CONTACTS"
    }
}

export const deletContact = (id) =>
{
    console.warn("delet contact actions : ",id)
    return {
        type: "DELET_CONTACT",
        paylod: id
    }
}

export const addContact = (contact) =>
{
    return {
        type: "ADD_CONTACT",
        paylod: contact
    }
}

export const editContact = (contact) =>
{
    return {
        type: "EDIT_CONTACT",
        paylod: contact
    }
}