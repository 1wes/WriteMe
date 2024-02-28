import React, { createContext, useEffect, useState } from 'react';

import useSWR from 'swr';


import axiosInstance from "../utils/axios";

const fetcher = url => axiosInstance.get(url).then(response => response.data);

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    
    const [loggedIn, setLoggedIn] = useState(false);

    const { data, error } = useSWR(`/api/user/check-token`, fetcher);

    useEffect(() => {

        if (data !==undefined && error===undefined) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false);
        }
        
    },[data])

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn }} >
            {children}
        </AuthContext.Provider>
    )
}
export {
    AuthContext
}
export default AuthContextProvider;