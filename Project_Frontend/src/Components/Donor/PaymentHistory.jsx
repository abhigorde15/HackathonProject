import React from "react";

const PaymentHistory = () => {
  const payments = [
    { shop: "Shop A", amount: "₹1,500", items: "Rice & Oil" },
    { shop: "Shop B", amount: "₹800", items: "Hygiene Kits" },
  ];

  return (
    <section className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold">Payment & Donation History</h3>
      <ul className="mt-2 space-y-2">
        {payments.map((payment, index) => (
          <li key={index}>
            {payment.shop} – {payment.amount} ({payment.items}) 
            <button className="text-blue-500 ml-2">Download Invoice</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PaymentHistory;
