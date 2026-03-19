import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import type { JSX } from "react/jsx-dev-runtime";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // or loader

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;