import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.role !== role) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
