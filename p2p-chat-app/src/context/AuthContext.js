import React, { useState, useContext, useEffect } from 'react';
import Gun from 'gun';
import 'gun/sea';
import 'gun/axe';

const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}
export default function AuthProvider({ children }) {
    const gundb = Gun();
    const user = gundb.user().recall({sessionStorage: true});
    const [loading, setLoading] = useState(true);

    function signup(username, password) {
        return user.create(username, password, ({ err }) => {
            if (err) {
                throw err;
            }
        });
    }

    function signOut() {
        user.leave();
    }

    useEffect(() => {
        setLoading(false);
    }, [])

    const value = {
        gundb,
        user,
        signup,
        signOut
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}