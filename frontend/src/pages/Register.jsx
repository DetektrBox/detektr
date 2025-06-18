import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = `${import.meta.env.VITE_API_URL}/register`;
      console.log("Sending register request to:", endpoint);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        toast.success("User registered successfully!");
        navigate("/login");
      } else {
        toast.error(data.detail || "Registration failed.");
      }
    } catch (err) {
      console.error("Register error:", err);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="max-w-sm w-full p-6 bg-gray-900 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 rounded text-white font-medium"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;