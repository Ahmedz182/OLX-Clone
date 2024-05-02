import React, { useEffect, useState } from "react";
import car from "../utils/demo/Car";

const CarDetailPage = () => {
  const [localId, setLocalId] = useState(null);
  const [Like, setLike] = useState(false);
  //
  const detail = car.find((car) => car.id === localId);

  const share = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link is copied share it with your friends");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const getId = () => {
      const url = window.location.href;
      // Find the index of '/item/'
      const index = url.indexOf("/Car/") + "/Car/".length;
      // Extract the ID from the URL
      const id = url.substring(index);
      setLocalId(id);
    };
    getId();
  }, []);

  return (
    <>
      <div className="flex  sm:flex-col md:flex-col overflow-hidden">
        <div>
          {detail && (
            <>
              <div className="m-8 flex flex-col gap-y-7 sm:w-[95dvw] md:w-[95dvw]">
                <div className="bg-[#000] w-[65dvw] sm:w-[85dvw] md:w-[85dvw] overflow-hidden h-[80dvh] flex items-center justify-center outline outline-2 rounded outline-grey ">
                  <img
                    className="object-contain w-[70%] "
                    src={detail.img}
                    alt={detail.title}
                  />
                </div>
                <div className="outline outline-2 rounded outline-grey p-5 flex flex-col gap-4 sm:w-[85dvw] md:w-[85dvw]">
                  <div className="flex justify-between">
                    <p className="text-4xl text-text font-bold">
                      Rs {detail.price}
                    </p>
                    <span className="flex gap-x-3 items-center">
                      <i
                        className="text-2xl ri-share-line icon-share"
                        onClick={share}></i>
                      <i
                        className={`text-3xl cursor-pointer ${
                          Like
                            ? "ri-heart-fill text-[#E62727]"
                            : "ri-heart-line"
                        }`}
                        onClick={() => setLike(!Like)}
                        style={{
                          transition: "transform 0.2s ease-in-out",
                        }}></i>
                    </span>
                  </div>
                  <p className="text-2xl text-text font-bold">{detail.title}</p>
                  <span className="flex gap-x-2 items-center">
                    <i class="ri-map-pin-line"></i>
                    <p className="text-sm text-text">{detail.location}</p>
                  </span>
                </div>

                <div className="outline outline-2 rounded sm:w-[85dvw] md:w-[85dvw] outline-grey p-5 flex flex-col gap-4">
                  <p className="text-2xl text-text font-bold">Description</p>
                  <p>{detail.Description}</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div>
          {detail && (
            <>
              <div className="outline outline-2 rounded outline-grey p-2 sm:w-[90dvw] md:w-[90dvw] flex gap-4 sm:ms-8 md:ms-8 sm:justify-center  mt-8 sm:mt-0 md:mt-0 items-center ">
                <img
                  className="w-20 img-user"
                  src="https://images.olx.com.pk/thumbnails/450202914-400x300.webp"
                  alt="user"
                />
                <div className="flex flex-col gap-y-1 w-[18dvw] text-text">
                  <p className="font-bold">{detail.user}</p>
                  <p className="text-sm">Member since july 2022</p>
                  <p className="font-bold text-sm cursor-pointer">
                    See Profile <i className="ri-arrow-right-s-line"></i>
                  </p>
                </div>
              </div>

              <div className="outline outline-2 rounded flex flex-col text-text outline-grey p-2 sm:w-[90dvw] md:w-[90dvw]  gap-4 sm:ms-8 md:ms-8  mt-8 sm:mt-0 md:mt-0  ">
                <p className="text-xl font-bold text-text">Location</p>
                <p>{detail.location}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CarDetailPage;
