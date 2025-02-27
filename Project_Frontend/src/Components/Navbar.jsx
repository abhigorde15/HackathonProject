import { Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
let Navbar  = ()=>{
  const [open, setOpen] = useState(false);
   const navigate = useNavigate();
    // Profiles to select from
    const profiles = ["Doner", "Institutes", "Shopkeeper"];

    // Open Dialog
    const handleOpen = () => {
        setOpen(true);
    };

    // Close Dialog
    const handleClose = () => {
        setOpen(false);
    };

  return(
    <>
   

<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="" className="h-8" alt="" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
      <Button
  onClick={handleOpen}
  type="button"
  sx={{
    backgroundColor: "#1D4ED8", // bg-blue-700
    "&:hover": { backgroundColor: "#1E40AF" }, // hover:bg-blue-800
    "&:focus": { outline: "none", boxShadow: "0 0 0 4px rgba(59,130,246,0.5)" }, // focus:ring-4 focus:ring-blue-300
    borderRadius: "0.5rem", // rounded-lg
    fontSize: "0.875rem", // text-sm
    fontWeight: 500, // font-medium
    padding: "0.5rem 1rem", // px-4 py-2
    textAlign: "center", // text-center
    color: "white", // text-white
    transition: "background-color 0.2s ease-in-out",
    mx: 2, 
  
  }}
  className="dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2"
>
  Registration
</Button>




        <Dialog
                open={open}
                onClose={handleClose}
                className="backdrop-blur-md"
                maxWidth="md" // Increased width
                fullWidth // Makes it responsive
            >
                <DialogTitle className="text-2xl font-bold text-white dark:text-white text-center py-6 bg-gray-300 dark:bg-gray-800">
                    Select Your Profile
                </DialogTitle>
                <DialogContent className="bg-white dark:bg-gray-200 text-5xl p-8">
                    <List className="space-y-4">
                        {profiles.map((profile, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                      navigate("/register");
                                        handleClose();
                                    }}
                                    className="text-gray-800 dark:text-white font-semibold text-lg hover:bg-blue-500 hover:text-white rounded-lg transition-all px-6 py-3"
                                >
                                    <ListItemText primary={profile} className="text-center" />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions className="bg-gray-300 dark:bg-gray-800 py-4 flex justify-center">
                    <Button
                        onClick={handleClose}
                        className="bg-red-500 hover:bg-red-600 text-white text-lg font-bold px-6 py-3 rounded-lg shadow-md transition-all"
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </>
  )
}
export default Navbar;