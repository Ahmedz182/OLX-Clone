import React, { useEffect } from "react";
import Mobile from "../utils/demo/Mobile";
import Bike from "../utils/demo/Bike";
import Car from "../utils/demo/Car";
import Item from "../components/Item";
import { useLocation } from "react-router-dom"; // Import useLocation hook

const FullPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    //
  }, []);

  const location = useLocation(); // Get the current location

  // Access the pathname property of location to get the current page path
  const currentPath = location.pathname;

  // Check if the current path ends with "mobile", "bike", or "car"
  let itemsToRender;
  if (currentPath.endsWith("Mobile")) {
    itemsToRender = Mobile.map(
      ({ title, price, img, location, time, id, categories }) => (
        <Item
          title={title}
          id={id}
          price={price}
          img={img}
          categories={categories}
          location={location}
          time={time}
        />
      )
    );
  } else if (currentPath.endsWith("bike")) {
    itemsToRender = Bike.map(
      ({ title, price, img, location, time, id, categories }) => (
        <Item
          title={title}
          id={id}
          price={price}
          img={img}
          categories={categories}
          location={location}
          time={time}
        />
      )
    );
  } else if (currentPath.endsWith("car")) {
    itemsToRender = Car.map(
      ({ title, price, img, location, time, id, categories }) => (
        <Item
          title={title}
          id={id}
          price={price}
          img={img}
          categories={categories}
          location={location}
          time={time}
        />
      )
    );
  } else {
    // Default case if the current path doesn't match any of the conditions
    itemsToRender = <div>No items found for this path.</div>;
  }

  return (
    <>
      <div className=" px-8 py-5  flex items-center justify-between sm:mt-10 md:mt-10">
        <span className="text-2xl font-bold text-text">{currentPath}s</span>
      </div>
      <div className="flex gap-5  flex-wrap  ps-5">
        {/* <Title title={currentPath} /> */}
        {itemsToRender}
      </div>
    </>
  );
};

export default FullPage;
