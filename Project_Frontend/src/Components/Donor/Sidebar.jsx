import { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from local storage
        const response = await axios.get("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },

        });

        setUser({
          name: response.data.name || "User",
          email: response.data.email || "Not Available",
          role: response.data.role || "N/A",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <aside className="w-1/4 bg-gray-100 p-4 rounded-lg">
      <div className="text-center">
        <img
          src="/profile.png"  // Default profile image
          className="w-20 h-20 rounded-full mx-auto"
          alt="Profile"
        />
        <h2 className="text-xl font-bold mt-2">{user.name}</h2>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">Role: {user.role}</p>
        <button className="text-blue-500 underline mt-2">Edit Profile</button>
      </div>
      <nav className="mt-6">
        <ul className="space-y-3">
          <li><a href="#" className="text-blue-500">Dashboard</a></li>
          <li><a href="#" className="text-blue-500">Recent Donations</a></li>
          <li><a href="#" className="text-blue-500">Saved Requests</a></li>
          <li><a href="#" className="text-blue-500">Preferences</a></li>
          <li><a href="#" className="text-blue-500">Payment History</a></li>
          <li><a href="/" className="text-red-500">Logout</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;