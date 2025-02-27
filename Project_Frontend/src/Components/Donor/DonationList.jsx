

const DonationList = () => {
  const donations = [
    { item: "10 kg Rice", institute: "Orphanage A", status: "Delivered" },
    { item: "5 Liters Oil", institute: "Elderly Home B", status: "In Progress" },
  ];

  return (
    <section className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold">Recent Donations</h3>
      <ul className="mt-2 space-y-2">
        {donations.map((donation, index) => (
          <li key={index} className="p-2 border-b">
            <span className="font-semibold">{donation.item}</span> → {donation.institute}  
            <span className="text-gray-500 text-sm"> Status: {donation.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DonationList;
