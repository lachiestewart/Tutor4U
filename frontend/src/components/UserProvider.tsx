import React, { createContext, useState } from 'react';
import { User } from 'interfaces';


interface UserContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
};

const defaultState: UserContextProps = {
    user: null,
    setUser: () => null,
};

export const UserContext: React.Context<UserContextProps> = createContext<UserContextProps>(defaultState);



type UserProviderProps = {
    children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;