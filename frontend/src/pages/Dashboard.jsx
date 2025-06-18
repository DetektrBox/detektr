import LogoutButton from "../components/LogoutButton";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
        <LogoutButton />
      </div>

      {/* Main Content */}
      <div className="mt-8">
        <p className="text-lg text-gray-300">
          This is your secured dashboard area. 🛡️
        </p>
      </div>
    </div>
  );
}