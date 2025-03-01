import { useState } from "react";

const RequestForm = ({ addRequest }) => {
  const [formData, setFormData] = useState({ category: "", quantity: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.category && formData.quantity) {
      addRequest(formData); // Immediately update requestTable
      setFormData({ category: "", quantity: "" });
    }
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-md mx-auto border border-blue-200">
      <h2 className="text-xl font-semibold mb-4">Raise a Request</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <select
          className="border p-2 rounded"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Medical">Medical</option>
          <option value="Clothes">Clothes</option>
        </select>

        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Enter Quantity (e.g., 50 kg, 10 packs)"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default RequestForm;
