import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../layouts/authentication/context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);
  return <Route {...rest}>{!user ? <Navigate to="/dashboard" /> : children}</Route>;
};

export default PrivateRoute;
