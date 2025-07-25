import React, { useReducer } from "react";

const AuthContext = React.createContext()

const initialState = {
    isAuthenticated:false,
    user:null
}

const authReducer =  (state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                isAuthenticated:true,
                user:action.payload
            };
        case 'LOGOUT':
            return{
                isAuthenticated:false,
                user:null
            }
        default:
            return state
    }
}


export const AuthProvider = ({children})=>{
    const [state,dispatch] = useReducer(authReducer,initialState)
    return (
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext