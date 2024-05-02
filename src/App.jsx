import { useEffect, useState } from "react";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CATEGORIES from "./utils/demo/categories";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import CarDetailPage from "./pages/CarDetailPage";
import BikeDetailPage from "./pages/BikeDetailPage";
import FullPage from "./pages/FullPage";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();
  useEffect(() => {
    // Initialize login status if not set
    if (localStorage.getItem("Login") === null) {
      localStorage.setItem("Login", "false");
    }
    // Check login status
    const loginStatus = localStorage.getItem("Login") === "true";
    setIsLoggedIn(loginStatus);
  }, [isLoggedIn]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercentage = (scrollY / document.body.scrollHeight) * 100;

      // Check if scroll percentage is greater than 20%
      setShowBackToTop(scrollPercentage > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Router>
        <NavBar checkLogin={isLoggedIn} />
        <div className="border-b-2 border-grey pt-36"></div>
        <div className="flex flex-wrap p-4 px-10 items-center sm:hidden md:hidden">
          <span className="font-medium pe-1 cursor-default text-sm">
            CATEGORIES
          </span>
          <i className="ri-arrow-right-s-line text-xl"></i>
          <div className="flex flex-wrap gap-4 items-center ps-3 ">
            {CATEGORIES.map((cat, index) => (
              //
              <Link to={cat}>
                <p
                  key={index}
                  className="cursor-pointer hover:text-accient/100 text-sm">
                  {cat}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {showBackToTop && <BackToTop />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mobile/:productId" element={<DetailPage />} />
          <Route path="/Car/:productId" element={<CarDetailPage />} />
          <Route path="/Bike/:productId" element={<BikeDetailPage />} />
          <Route path=":productId" element={<FullPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
