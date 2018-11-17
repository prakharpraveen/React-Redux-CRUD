export default function (state = { users: [] }, action) {
    switch (action.type) {
        case "GET_USERS":
            return { ...state, users: action.payload };

        case "DELETE_USER":
            return { ...state, users: state.users.filter(user => !action.payload.includes(user._id) ) }

        case "ADD_USER":
            return { ...state, users: [...state.users, action.payload] }
        default:
            return state;
    }
}