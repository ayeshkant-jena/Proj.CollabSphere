import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import { checkHealth } from "../api/health";
import Login from "../pages/Auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import InfluencerProfile from "../pages/InfluencerDashboard/Profile";
const AppRoutes = () => {

  const Home = () => {
    const [status, setStatus] = useState("");

    useEffect(() => {
      checkHealth().then((data) => {
        setStatus(data.message);
      });
    }, []);

    return <h1>{status}</h1>;
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        {/* <Route path="/" element={<h1>Welcome to CollabSphere</h1>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<h1>Register Page</h1>} />

        {/* Brand Routes */}
        <Route
          path="/brand/dashboard"
          element={
            <ProtectedRoute role="brand">
              <BrandDashboard />
            </ProtectedRoute>
          }
        />

        {/* Influencer Routes */}
        <Route path="" element={<h1>Influencer Dashboard</h1>} />
        <Route
          path="/influencer/dashboard"
          element={
            <ProtectedRoute role="influencer">
              <InfluencerProfile />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
