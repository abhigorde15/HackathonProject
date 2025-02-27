
import ContactForm from "../Components/ContactForm";
import DonationList from "../Components/Filter/DonationList";

const Home = () => {
  return (
    <>
    <div className="min-h-screen  bg-cover bg-center flex items-center w-full overflow-hidden " style={{backgroundImage: "url('/hero_img.jpeg')"}}id="Header" >
         <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white ">
            <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 ">Donate Essentials not Money !</h2>
            <div className="space-x-6 mt-16 " >
               
                <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded">Donate</a>
            </div>
         </div>
       </div>
       <div className="min-h-screen bg-black">
            <h1 className="text-3xl font-bold text-center p-6 text-white">Find Donation Requests</h1>
            <DonationList />
        </div>
        {/* <Blogging /> */}
        <ContactForm/>

  </>
  )
}

export default Home;
