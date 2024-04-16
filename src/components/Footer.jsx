import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex bg-[#f7f9fa] mt-10 gap-5 flex-wrap items-center justify-center py-4">
        <img
          className="h-[200px] ps-1"
          loading="lazy"
          src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
          alt="app"
        />
        <span className="flex flex-col items-start justify-center gap-2">
          <p className="text-3xl text-text font-bold">TRY THE OLX APP</p>
          <p className="text-xl w-[420px] text-text">
            Buy, sell and find just about anything using the app on your mobile.
          </p>
        </span>
        <span className="h-36 w-[2px] bg-primary/30 sm:hidden md:hidden"></span>
        <span className="flex flex-col gap-3">
          <p className="text-sm font-bold text-text">GET YOUR APP TODAY</p>

          <span className="flex gap-1">
            <a
              href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                className="w-[128px] h-[40px]"
                alt=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.olx.pk"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                className="w-[128px] h-[40px]"
                alt=""
              />
            </a>
            <a
              href="https://appgallery.huawei.com/#/app/C104375435"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
                className="w-[128px] h-[40px]"
                alt=""
              />
            </a>
          </span>
        </span>
      </div>

      <div className="flex flex-wrap bg-[#ebeff0] border-t-[1px] border-text/50  px-4 text-text gap-4 justify-around py-10 pt-7">
        <div>
          <p className="font-bold text-sm">POPULAR CATEGORIES</p>
          <ul className="text-xs flex flex-col gap-1 mt-3 md:gap-y-2 sm:gap-y-2">
            <li className="cursor-pointer text-text/75 hover:text-text">
              Cars
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              Flats for rent
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              Mobile Phones
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              Jobs
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-sm">TRENDING SEARCHES</p>
          <ul className="text-xs flex flex-col gap-1 mt-3 md:gap-y-2 sm:gap-y-2">
            <li className="cursor-pointer text-text/75 hover:text-text">
              Bikes
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              Watches
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              Boks
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              Dogs
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-sm">ABOUT US</p>
          <ul className="text-xs flex flex-col gap-1 mt-3 md:gap-y-2 sm:gap-y-2">
            <li className="cursor-pointer text-text/75 hover:text-text">
              About Dubizzle Group
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              OLX Blog
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              Contact Us
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              OLX for Businesses
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-sm">OLX</p>
          <ul className="text-xs flex flex-col gap-1 mt-3 md:gap-y-2 sm:gap-y-2">
            <li className="cursor-pointer text-text/75 hover:text-text">
              Help
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              Sitemap
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              Terms of use
            </li>
            <li className="cursor-pointer text-text/75 hover:text-text">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-sm">FOLLOW US</p>
          <span className="flex gap-2 text-text/65 mt-3">
            <i class="ri-twitter-x-line text-xl cursor-pointer"></i>
            <i class="ri-facebook-circle-line text-xl cursor-pointer"></i>
            <i class="ri-app-store-line text-xl cursor-pointer"></i>
            <i class="ri-instagram-line text-xl cursor-pointer"></i>
          </span>
          <span className="flex gap-1">
            <a
              href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
                className="w-[88px] h-[40px]"
                alt=""
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.olx.pk"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
                className="w-[88px] h-[40px]"
                alt=""
              />
            </a>
            <a
              href="https://appgallery.huawei.com/#/app/C104375435"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
                className="w-[88px] h-[40px]"
                alt=""
              />
            </a>
          </span>
        </div>
      </div>

      <div className="flex bg-primary items-center justify-end py-3 pt-4 gap-3 px-8">
        <p className=" text-sm font-medium text-[#ffff]">
          Free Classifieds in Pakistan
        </p>
        <span className="text-xs font-light text-[#ffff]">
          {" "}
          © 2006-2024 OLX
        </span>
      </div>
    </>
  );
};

export default Footer;
