
import { useEffect, useState } from "react";
import ContactForm from "../Components/ContactForm";
import DonationList from "../Components/Filter/DonationList";

const images = [
  "/Education.jpg",
  "/food donation.jpg",
  "/Orphanage1.jpg",
  "/Main-Banner-3.jpg",
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
   <div className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden relative" id="Header">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${img}')`, backgroundSize: "cover", backgroundPosition: "center" }}
          ></div>
        ))}
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-gray-800 relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Turn kindness into essentials for those in need !
          </h2>
          <div className="space-x-6 mt-16">
            <a href="#Contact" className="bg-green-500 px-8 py-3 rounded text-white">
              Donate
            </a>
          </div>
        </div>
      </div>
       <div className="min-h-screen bg-white">
            <h1 className="text-3xl font-bold text-center p-6 text-black">Find Donation Requests</h1>
            <DonationList />
        </div>
        {/* <Blogging /> */}
        <ContactForm/>

  </>
  )
}

export default Home;
