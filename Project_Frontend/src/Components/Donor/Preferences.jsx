

const Preferences = () => {
  return (
    <section className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-lg font-bold">Donation Preferences</h3>
      <label className="block"><input type="checkbox" /> Food</label>
      <label className="block"><input type="checkbox" /> Medical Supplies</label>
      <label className="block"><input type="checkbox" /> Clothes</label>
    </section>
  );
};

export default Preferences;
