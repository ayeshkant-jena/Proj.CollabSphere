import { useState, useContext } from "react";
import api from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("auth/login/", { email, password });
    login(res.data);

    const role = JSON.parse(atob(res.data.access.split('.')[1])).role;
    role === "brand"
      ? navigate("/brand/dashboard")
      : navigate("/influencer/dashboard");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input className="input" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="input mt-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
