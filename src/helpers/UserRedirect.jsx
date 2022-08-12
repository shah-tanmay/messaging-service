import React from "react";
import { Navigate } from "react-router-dom";
const UserRedirect = ({ children, user }) => {
  if (user) {
    return <Navigate replace to={{ pathname: "/chat" }} />;
  } else {
    return children;
  }
};

export default UserRedirect;
