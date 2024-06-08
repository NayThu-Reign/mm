import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);
    const [authUser, setAuthUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                // Decode the token to extract the user ID
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.id; // assuming the token contains the user ID in the `id` field
                
                // Fetch the user details from the API
                (async () => {
                    const api = import.meta.env.VITE_API_URL;
                    const res = await fetch(`${api}/api/users/${userId}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (res.ok) {
                        const user = await res.json();
                        setAuth(true);
                        setAuthUser(user);
                    } else {
                        throw new Error("Failed to fetch user");
                    }
                })();
            } catch (error) {
                console.error("Invalid token or failed to fetch user data", error);
                setAuth(false);
                setAuthUser({});
            }
        } else {
            setAuth(false);
            setAuthUser({});
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth, authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}
