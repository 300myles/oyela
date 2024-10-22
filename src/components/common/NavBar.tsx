"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import Link from "next/link";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0 md:shadow-sm  md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden md:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between  mx-[2rem] lg:mx-[9rem] items-center">
          <div className="flex flex-row">
            <img src="/images/logo_desktop1.png" className="inw-[3rem] h-[4rem]" alt="logo" />

            <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[3rem] text-darkBlue">
              <span className="text-primary">O</span>
              yela
            </p>
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            <Link
              href="/"
              className={`hover:text-primary cursor-pointer items-center gap-2 unique-link font-[500] text-gray`}
            >
              Home
            </Link>
            <p
              className={`hover:text-primary cursor-pointer flex items-center gap-2 unique-link font-[500] text-gray`}
            >
              About Us
            </p>
            <Link href="#"
              className={`hover:text-primary cursor-pointer flex items-center gap-2 unique-link font-[500] text-gray`}
            >
              Our App
            </Link>
            <Link href="/pricing"
              className={`hover:text-primary cursor-pointer flex items-center gap-2 unique-link font-[500] text-gray`}
            >
              Pricing
            </Link>
            <Link href="#"
              className={`hover:text-primary cursor-pointer flex items-center gap-2 unique-link font-[500] text-gray`}
            >
              Contacts
            </Link>
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <MainButton text="Download now" classes="px-2 text-md shadow-none" />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block md:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="w-full flex flex-row self-center items-center justify-center">
            <img src="/images/logo_desktop1.png" className="w-[2rem] h-[3rem]" alt="logo" />

            <p className="font-[850] text-2xl md:text-[2rem] text-darkBlue">
              <span className="text-primary">O</span>
              yela
            </p>
          </div>

          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/svgs/hamburger.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="h-screen my-8 select-none bg-[#000000a4] animate-in slide-in-from-right">
            <div className="w-[50%] border flex flex-col gap-8 mt-8 mx-4">
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Home
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                About Us
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Our App
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Contacts
              </p>
              <Link href="#"
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                Pricing
              </Link>

              <div className="flex flex-col gap-[40px] select-none">
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                  Login
                </p>
                <MainButton text="Sign up" classes="shadow-none" />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
