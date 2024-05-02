import React from "react";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import Title from "../components/Title";
import Mobile from "../utils/demo/Mobile";
import Item from "../components/Item";
import car from "../utils/demo/Car";
import bike from "../utils/demo/Bike";
const Home = () => {
  return (
    <>
      <div className=" flex flex-col ">
        <HeroBanner />
        <Categories />
        //
        <Title title="Mobile Phones" product="Mobile" />
        <div className="flex flex-wrap  gap-x-3 gap-y-4  justify-center">
          {Mobile.slice(0, 4).map(
            ({ title, price, img, location, time, id, categories }) => {
              return (
                <Item
                  id={id}
                  categories={categories}
                  title={title}
                  price={price}
                  img={img}
                  location={location}
                  time={time}
                />
              );
            }
          )}
        </div>
        <Title title="Cars" product="car" />
        <div className="flex flex-wrap gap-x-3 gap-y-4  justify-center">
          {car
            .slice(0, 4)
            .map(({ title, price, img, location, time, id, categories }) => {
              return (
                <Item
                  title={title}
                  id={id}
                  categories={categories}
                  price={price}
                  img={img}
                  location={location}
                  time={time}
                />
              );
            })}
        </div>
        <Title title="Bikes & Motorcycles" product="bike" />
        <div className="flex flex-wrap gap-x-3 gap-y-4  justify-center">
          {bike
            .slice(0, 4)
            .map(({ title, price, img, location, time, id, categories }) => {
              return (
                <Item
                  title={title}
                  id={id}
                  price={price}
                  img={img}
                  categories={categories}
                  location={location}
                  time={time}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
