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

export default function RequireAuth({ children }) {
  const [checking, setChecking] = useState(true);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && isTokenValid(token)) {
      setValid(true);
    } else {
      localStorage.removeItem("token");
      setValid(false);
    }

    setChecking(false);
  }, []);

  if (checking) return <LoadingSpinner />;
  if (!valid) return <Navigate to="/login" replace />;

  return children;
}