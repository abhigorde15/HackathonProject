import { useState, useEffect } from "react";
import Sidebar from "../Donor/Sidebar";
import RequestForm from "./RequestForm";
import RequestTable from "./RequestTable";
import FeedbackForm from "./FeedbackForm";

const InstituteDashboard = () => {
  const hardcodedRequests = [
    { id: 1, category: "Food", quantity: "50 kg Rice", status: "Pending" },
    { id: 2, category: "Medical", quantity: "20 First Aid Kits", status: "Approved" },
    { id: 3, category: "Clothes", quantity: "30 Sets", status: "Pending" },
  ];

  // Load requests from localStorage on component mount
  const [requests, setRequests] = useState(() => {
    const storedRequests = JSON.parse(localStorage.getItem("requests")) || [];
    return [...hardcodedRequests, ...storedRequests]; // Combine hardcoded + stored requests
  });

  // Store new requests in localStorage whenever 'requests' changes
  useEffect(() => {
    localStorage.setItem("requests", JSON.stringify(requests));
  }, [requests]);

  // Function to add a new request
  const addRequest = (newRequest) => {
    const updatedRequests = [...requests, { id: Date.now(), ...newRequest, status: "Pending" }];
    setRequests(updatedRequests);
  };

  // Function to cancel a request
  const cancelRequest = (id) => {
    const updatedRequests = requests.filter((req) => req.id !== id);
    setRequests(updatedRequests);
  };

  return (
    <div className="flex mt-6">
      <Sidebar />
      <div className="ml-1/4 p-6 w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Institute Dashboard</h1>
        <div className="mb-6">
          <RequestForm addRequest={addRequest} />
        </div>
        <div className="mb-6">
          <RequestTable requests={requests} cancelRequest={cancelRequest} />
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default InstituteDashboard;
