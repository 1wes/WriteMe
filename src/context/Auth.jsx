import React, { createContext, useEffect, useState } from 'react';

import useSWR from 'swr';


import axiosInstance from "../utils/axios";

const fetcher = url => axiosInstance.get(url).then(response => response.data);

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

        const { data, error } = useSWR(`/api/user/check-token`, fetcher);

        if (data) {
            setLoggedIn(true)
        } else if (error){
            setLoggedIn(false);
        }
        
    },[])

    return (
        <AuthContext.Provider value={{loggedIn,setLoggedIn}} >
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthContext
}
export default AuthContextProvider;