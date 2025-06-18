import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token
    localStorage.removeItem("token");

    // ✅ Show toast before redirect
    toast.success("Logged out successfully!");

    // 🕒 Delay navigation slightly to allow toast to render
    setTimeout(() => {
      navigate("/login");
    }, 400); // 400ms = more consistent across systems
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium transition"
    >
      Log Out
    </button>
  );
}