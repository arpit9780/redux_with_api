import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children}) => {
  const auth = localStorage.getItem("token")     
    if (auth ) {
      return children
    }
      
    return <Navigate to="/" />
  }