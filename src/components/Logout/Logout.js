import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { logout } from "../../store/actions/auth";
import { useActions } from "../../hooks/useActions";

const Logout = () => {
  const { logout } = useActions();

  useEffect(() => logout());

  return <Navigate to={"/"} />;
};

export default Logout;
