import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);
    const [authUser, setAuthUser] = useState({});
    const [loading, setLoading] = useState(true); // To handle the loading state

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.id; // assuming the token contains the user ID in the `id` field

                (async () => {
                    try {
                        const api = import.meta.env.VITE_API_URL;
                        const res = await fetch(`${api}/api/users/${userId}`, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });

                        if (!res.ok) {
                            throw new Error("Failed to fetch user");
                        }

                        const user = await res.json();
                        setAuth(true);
                        setAuthUser(user);
                    } catch (error) {
                        console.error("Failed to fetch user data", error);
                        setAuth(false);
                        setAuthUser({});
                    } finally {
                        setLoading(false);
                    }
                })();
            } catch (error) {
                console.error("Invalid token or failed to decode token", error);
                localStorage.removeItem("token");
                setAuth(false);
                setAuthUser({});
                setLoading(false);
            }
        } else {
            setAuth(false);
            setAuthUser({});
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Optionally, you can show a loading spinner
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth, authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}
