import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-red-900 text-white">
      <header className="p-4 bg-gray-800 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">detektr</h1>
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;