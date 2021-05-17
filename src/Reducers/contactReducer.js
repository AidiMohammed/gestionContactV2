const initialState = {
    listContactes: [
        {id: 1, name: "Mohammed", email: "mohammed@gmail.com", phone: "0633356139"},
        {id: 15, name: "Noura", email: "noura@gmail.com", phone: "0633356140"},
        {id: 17, name: "Asma", email: "asma@gmail.com", phone: "0633356141"},
    ]
};

export default function(state = initialState,action)
{
    switch(action.type)
    {
        case "GET_CONTACTS":
            {return state}
        default:
            {return state}
    }
}