import { useNavigate } from "react-router-dom";

const Preferences = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white shadow-lg rounded-2xl p-6 max-w-md mx-auto border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Donation Preferences</h3>
      <div className="space-y-2">
        <button 
          className="w-full text-left flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition p-3 rounded-lg cursor-pointer"
          onClick={() => navigate("/institute/food")}
        >
          <span className="text-gray-700 font-medium">Food</span>
        </button>
        <button 
          className="w-full text-left flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition p-3 rounded-lg cursor-pointer"
          onClick={() => navigate("/institute/medical")}
        >
          <span className="text-gray-700 font-medium">Medical Supplies</span>
        </button>
        <button 
          className="w-full text-left flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition p-3 rounded-lg cursor-pointer"
          onClick={() => navigate("/institute/clothes")}
        >
          <span className="text-gray-700 font-medium">Clothes</span>
        </button>
      </div>
    </section>
  );
};

export default Preferences;
