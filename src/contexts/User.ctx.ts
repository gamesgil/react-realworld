import { createContext, useContext } from "react";

interface User {
    name: string;
    password: string;
}

export const UserContext = createContext({name: 'gil', password: '123'});