import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function isTokenValid(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

export default function RedirectIfAuth({ children }) {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && isTokenValid(token)) {
      setAuthenticated(true);
    }

    setChecking(false);
  }, []);

  if (checking) return <LoadingSpinner />;
  if (authenticated) return <Navigate to="/dashboard" replace />;

  return children;
}