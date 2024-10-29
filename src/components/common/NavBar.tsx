"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/blogs", label: "Articles" },
    { href: "/user-app", label: "Our App" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contacts" },
  ];

  return (
    <>
      <div className="md:sticky md:top-0 md:shadow-sm z-20">
        {/* DESKTOP */}
        <div className="hidden md:block animate-in fade-in zoom-in bg-white p-4">
          <div className="flex justify-between lg:mx-[4rem] items-center">
            <div onClick={() => router.push("/")} className="flex items-center">
              <img
                src="/images/logo_desktop1.png"
                className="inw-[3rem] h-[4rem]"
                alt="logo"
              />
              <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[3rem] text-darkBlue">
                <span className="text-primary">O</span>
                yela
              </p>
            </div>
            <div className="flex gap-[38px] xl:gap-[50px] text-[16px] items-center select-none">
              {navLinks.map(({ href, label }) => {
                if (href === "/") return;
                return(
                <Link
                  key={href}
                  href={href}
                  className="hover:text-primary unique-link font-semibold cursor-pointer font-[500] text-gray"
                >
                  {label}
                </Link>
              )})}
            </div>
            <div className="flex items-center gap-[40px] select-none">
              <MainButton
                text="Download Now"
                disabled={false}
                action={() => {
                  router.push("/user-app");
                }}
                classes="shadow-none px-2 text-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div
        className={`flex flex-col md:hidden fixed top-0 w-full z-[999] bg-transparent`}
      >
        <div className="flex justify-between bg-white pt-4 mx-[10px]">
          <div className="flex items-center justify-center w-full">
            <img
              src="/images/logo_desktop1.png"
              className="w-[2rem] h-[3rem]"
              alt="logo"
            />
            <p className="font-[850] text-2xl md:text-[2rem] text-darkBlue">
              <span className="text-primary">O</span>
              yela
            </p>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X className="cursor-pointer text-black" onClick={toggleMenu} />
            ) : (
              <img
                src="/svgs/hamburger.svg"
                alt="Menu"
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        {/* Dark Overlay for Menu */}
        {menu && (
          <div
            className="fixed inset-0 top-[4rem] left-0 w-full h-full bg-black bg-opacity-50"
            onClick={toggleMenu}
          />
        )}

        {/* Slide-In Menu */}
        <div
          className={`fixed top-[4rem] left-0 h-screen w-1/2 bg-white border transition-transform transform ${
            menu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-8 px-3 py-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenu(false)}
                className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray"
              >
                {label}
              </Link>
            ))}
            <MainButton
              text="Download Now"
              disabled={false}
              action={() => {
                router.push("/user-app");
              }}
              classes="shadow-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
