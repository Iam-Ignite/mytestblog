import { createContext, useReducer } from 'react'


export const UserContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_USER':
            return { ...state, user: action.payload }
        default:
            return state
    }

}

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, {
        user: ""
    })

    const changeUser = (user) => {
        dispatch({ type: "CHANGE_USER", payload: user });
    }

    return (
        <UserContext.Provider value={{ ...state, changeUser }}>
            {children}
        </UserContext.Provider>
    );
}