import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialValues = {
    user:{},
    isAuthenticated:false
}

function reducer(state,action) {
    switch(action.type){
        case "login":
            return {...state,user:action.payload,isAuthenticated:true}
        case "logout":
            return initialValues
        default:
            throw new Error("wrong type passed")
    }
}
function AuthProvider({children}) {
    const [{user,isAuthenticated},dispatch] = useReducer(reducer,initialValues)

    const FAKE_USER = {
        name: "Jack",
        email: "jack@example.com",
        password: "qwerty",
        avatar: "https://i.pravatar.cc/100?u=zz",
};


    function login(email,password) {
        if(email === FAKE_USER.email && password === FAKE_USER.password){
            dispatch({type:"login",payload:FAKE_USER})
        }
    }

    function logout() {
        dispatch({type:"logout"})

    }
return <AuthContext.Provider value=
    {{ 
        user,isAuthenticated,login,logout
    }}>
        {children}
    </AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext);
    if(context === undefined) throw new Error("context was used outside it's provider");
    return context
}

export {AuthProvider,useAuth}