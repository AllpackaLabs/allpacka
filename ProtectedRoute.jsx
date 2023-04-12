import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// The <ProtectedRoute /> component will simply check the 
// current user state from the useAuth hook and then redirect 
// to the Home screen if the user is not authenticated:

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    // return to login
    return <Navigate to="/" />;
  }
  return children;
};