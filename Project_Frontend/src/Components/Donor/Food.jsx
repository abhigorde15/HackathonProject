import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControlLabel, Checkbox } from "@mui/material";

const Food = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedInstitute, setSelectedInstitute] = useState(null);

  const institutes = [
    { name: "Annapurna Orphanage", city: "Mumbai", requirement: "10kg Rice, 5kg Dal", image: "/Orphanage1.jpg" },
    { name: "Seva Bhavan", city: "Delhi", requirement: "20kg Wheat, 10kg Sugar", image: "/Orphanage1.jpg"  },
    { name: "Lifeline Engo", city: "Delhi", requirement: "20kg Wheat, 10kg Sugar", image: "/Orphanage1.jpg"  },
    { name: "Food for All", city: "Bangalore", requirement: "15kg Rice, 7kg Oil", image: "/Orphanage1.jpg" },
    { name: "Helping Hands", city: "Kolkata", requirement: "12kg Pulses, 5kg Salt", image: "/Orphanage1.jpg"  },
    { name: "Aastha Foundation", city: "Chennai", requirement: "8kg Flour, 3kg Ghee", image: "/Orphanage1.jpg" },
  ];

  const filteredInstitutes = institutes.filter(institute => 
    institute.city.toLowerCase().includes(filter.toLowerCase())
  );

  const handleOpen = (institute) => {
    setSelectedInstitute(institute);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="p-8 mt-20 max-w-5xl mx-auto">
      <div className="flex justify-center mb-8 gap-4">
        <input 
          type="text" 
          placeholder="Search institute by location" 
          className="w-full border rounded-lg shadow-lg p-3 text-lg" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
        <button 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-700"
          onClick={() => setFilter(search)}
        >
          Search
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInstitutes.map((institute, index) => (
          <div key={index} className="border p-6 rounded-xl shadow-xl bg-white flex flex-col items-center text-center cursor-pointer transform transition duration-300 hover:scale-105" onClick={() => handleOpen(institute)}>
            <img src={institute.image} alt={institute.name} className="w-36 h-36 object-cover rounded-full mb-4 shadow-md" />
            <h3 className="text-2xl font-bold">{institute.name}</h3>
            <p className="text-gray-500 text-lg">City: {institute.city}</p>
            <p className="text-gray-900 font-medium text-lg">Requirement: {institute.requirement}</p>
          </div>
        ))}
      </div>
      
      {selectedInstitute && (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle className="bg-blue-600 text-white text-center text-2xl font-bold">Confirm Your Donation</DialogTitle>
          <DialogContent className="p-6">
            <div className="text-center">
              <p className="text-xl font-semibold mb-2">{selectedInstitute.name}</p>
              <p className="text-gray-500 text-lg">Location: {selectedInstitute.city}</p>
              <div className="mt-4 flex justify-center">
                <FormControlLabel
                  control={<Checkbox defaultChecked sx={{ transform: 'scale(1.3)' }} />}
                  label={<span className="text-lg font-medium">{selectedInstitute.requirement}</span>}
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions className="p-4 flex justify-center gap-4">
            <Button onClick={handleClose} className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow-lg text-lg font-semibold hover:bg-gray-600">Cancel</Button>
            <Button onClick={handleClose} className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg text-lg font-semibold hover:bg-green-700">Confirm Donation</Button>
          </DialogActions>
        </Dialog>
      )}
    </section>
  );
};

export default Food;
