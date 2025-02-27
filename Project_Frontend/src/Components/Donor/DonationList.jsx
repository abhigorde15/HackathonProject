const DonationList = () => {
  const donations = [
    { item: "10 kg Rice", institute: "Orphanage A", status: "Delivered" },
    { item: "5 Liters Oil", institute: "Elderly Home B", status: "In Progress" },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Recent Donations
      </h3>
      <ul className="space-y-3">
        {donations.map((donation, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-sm"
          >
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">
                {donation.item}
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                → {donation.institute}
              </p>
            </div>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                donation.status === "Delivered"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {donation.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DonationList;
