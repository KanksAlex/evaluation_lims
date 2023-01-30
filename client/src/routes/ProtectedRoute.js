import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
    const {currentUser} = useContext(AuthContext);

    if (!currentUser) {
        // user is not authenticated (is null)
        return <Navigate to="/login" />;
    }
    return children;
}; 