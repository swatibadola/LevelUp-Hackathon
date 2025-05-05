import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [savedItems, setSavedItems] = useState(() => {
        const stored = localStorage.getItem('savedItems');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('savedItems', JSON.stringify(savedItems));
    }, [savedItems]);

    return (
        <UserContext.Provider value={{ savedItems, setSavedItems }}>
            {children}
        </UserContext.Provider>
    )
}



// export const useUser = () => useContext(UserContext);