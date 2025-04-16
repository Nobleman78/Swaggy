import React, { createContext, useState } from 'react';
export const ContextApi = createContext();
const Context = ({children}) => {
    const [menuTwo, setMenuTwo] = useState(false);
    const contextValue = {
        menuTwo, setMenuTwo
    }
    return (
        <ContextApi.Provider value={contextValue}>
            {children}
        </ContextApi.Provider>
    );
};

export default Context;