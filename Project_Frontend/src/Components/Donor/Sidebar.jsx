

const Sidebar = () => {
  return (
    <aside className="w-1/4 bg-gray-100 p-4 rounded-lg">
      <div className="text-center">
        <img
          src="https://via.placeholder.com/80"
          className="w-20 h-20 rounded-full mx-auto"
          alt="Profile"
        />
        <h2 className="text-xl font-bold mt-2">John Doe</h2>
        <p className="text-gray-600">Total Donations: 15</p>
        <button className="text-blue-500 underline mt-2">Edit Profile</button>
      </div>
      <nav className="mt-6">
        <ul className="space-y-3">
          <li><a href="#" className="text-blue-500">Dashboard</a></li>
          <li><a href="#" className="text-blue-500">Recent Donations</a></li>
          <li><a href="#" className="text-blue-500">Saved Requests</a></li>
          <li><a href="#" className="text-blue-500">Preferences</a></li>
          <li><a href="#" className="text-blue-500">Payment History</a></li>
          <li><a href="#" className="text-red-500">Logout</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
