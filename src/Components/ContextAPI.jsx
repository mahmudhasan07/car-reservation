import React, { createContext, useState } from 'react';

export const Context = createContext()

const ContextAPI = ({children}) => {
    const [loading, setloading] = useState(false);
    const data = {loading,setloading}
    return <Context.Provider value={data}>{children}</Context.Provider>

};


export default ContextAPI;