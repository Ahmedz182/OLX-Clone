import { useEffect, useState } from "react";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CATEGORIES from "./utils/demo/categories";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Login") === null) {
      localStorage.setItem("Login", false);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercentage = (scrollY / document.body.scrollHeight) * 100;

      // Check if scroll percentage is greater than 40%
      if (scrollPercentage > 20) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="border-b-2 border-grey pt-36"></div>
      <div className="flex flex-wrap p-4 px-10 items-center sm:hidden md:hidden">
        <span className="font-medium pe-1 cursor-default text-sm">
          CATEGORIES
        </span>
        <i className="ri-arrow-right-s-line text-xl"></i>
        <div className="flex flex-wrap gap-4 items-center ps-3 ">
          {CATEGORIES.map((cat, index) => (
            <p
              key={index}
              className="cursor-pointer hover:text-accient/100 text-sm">
              {cat}
            </p>
          ))}
        </div>
      </div>
      {showBackToTop && <BackToTop />}
      <Home />
      <Footer />
    </>
  );
}

export default App;
