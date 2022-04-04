import { useContext } from 'react';
import { UserContext } from './user-context';

export const useUser = () => {

    const context = useContext(UserContext)

    if (context === undefined) {
        throw new Error("useUser() most be inside a ThemeProvider")
    }

    return context

}