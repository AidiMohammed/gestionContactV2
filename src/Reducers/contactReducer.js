const initState = {
    listContacts : [
        {id: 1, name: "MohammedAidi", email: "Mohammed@gmail.com", phone: "+212633356139"}
    ]
}

export default function(state = initState,action)
{
    switch(action.type)
    {
        case "GET_CONTACT":
            {return state};
        default: 
            {return state};
    }
}