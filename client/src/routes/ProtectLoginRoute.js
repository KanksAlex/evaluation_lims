import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectLoginRoute = ({ children }) => {
    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        // user is authenticated, go to home.
        //Dont show log in
        return <Navigate to="/" />;
    }
    return children;
};