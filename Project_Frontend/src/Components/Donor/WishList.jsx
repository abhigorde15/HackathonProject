import React from "react";

const Wishlist = () => {
  const wishlist = [
    "Orphanage X – 20 kg Rice",
    "Free Food Service – 50 Loaves Bread",
  ];

  return (
    <section className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold">Saved Requests</h3>
      <ul className="mt-2 space-y-2">
        {wishlist.map((item, index) => (
          <li key={index} className="flex justify-between">
            {item} <button className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Wishlist;
