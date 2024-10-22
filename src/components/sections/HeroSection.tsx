// import React from "react";
// import MainButton from "../common/MainButton";

// function HeroSection() {
//   return (
//     <section className="flex relative pt-6 md:pt-0 justify-between flex-col md:flex-row gap-4 items-center">
//       <div className="">
//         <p className="font-[850] text-center md:text-start md:leading-[4.5625rem] text-2xl md:text-[3.5rem] lg:text-[4.375rem] text-darkBlue">
//         Transform your emotions, strengthen your relationships.
//           <div className="md:hidden">
//             <img
//               src="/images/happy_guy.png"
//               alt="guy with phone surrounded by action icons"
//             />
//             <div className="md:hidden flex gap-[1.75rem] items-center">
//               <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" />

//               <div className="flex gap-[1.56rem] items-center">
//                 {/* <img src="/images/fancy_play_icon.png" alt="play icon" /> */}
//                 <p className="font-bold text-normal border-2 rounded-xl hover:border-primary px-3 py-2">Download</p>
//               </div>
//             </div>
//           </div>
//         </p>
//         <p className="text:xl md:text-[1.375rem] mt-16 md:mt-8 font-[500]">
//         Our app is designed to be your go-to source for emotional well-being and relationship advice. With personalized therapy sessions and comprehensive personality assessments, we help you understand yourself better, improve your relationships, and cultivate emotional resilience.
//         <div className="mt-2" />
//         Because a healthier mind leads to a healthier life.
//         </p>
//         <div className="flex gap-[1.75rem] justify-center md:justify-start md:items-center mt-[2rem]">
//           <MainButton text="Get Started" classes="hidden md:flex shadow-none w-[10.125rem]" />
//           <div className="flex gap-[1.56rem] self-center items-center">
//             {/* <img src="/images/fancy_play_icon.png" alt="play icon" /> */}
//             <p className="font-bold text-normal border-2 rounded-xl hover:border-primary px-3 py-2">Learn More</p>
//           </div>
//         </div>
//       </div>
//       <div className="hidden md:w-[180%] md:mb-24 lg:self-center lg:mb-12 md:block">
//         <img
//           src="/images/happy_guy.png"
//           alt="guy with phone surrounded by action icons"
//           className="scale-160"
//         />
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


"use client";

import Link from "next/link";
import { useState } from "react";

interface NavigationItem {
  title: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [state, setState] = useState<boolean>(false);

  const navigation: NavigationItem[] = [
    { title: "Partners", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Team", path: "javascript:void(0)" },
  ];

  return (
    <>
      <section className="py-2 pt-6 md:pt-0">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-primary font-medium">Over 200 thousand downloads</h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
            Transform your emotions, strengthen your relationships.
            </h2>
            <p>
            Our app is designed to be your go-to source for emotional well-being and relationship advice. With personalized therapy sessions and comprehensive personality assessments, we help you understand yourself better, improve your relationships, and cultivate emotional resilience.
            </p>

            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-center text-white font-medium bg-primary duration-150 hover:opacity-[0.8] active:opacity-[0.5] rounded-lg shadow-lg hover:shadow-none"
              >
                Let's get started
              </a>
              <Link
                href="/pricing"
                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              >
                Get access
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src="/images/happy_guy.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-14 px-4 md:px-8">
          <p className="text-center text-sm text-gray-700 font-semibold">Trusted by the best companies</p>
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="33" fill="none">
              <g fill="#4B5563" clipPath="url(#a)">
                <path d="M16.416 32.17v-6.175c6.554 0 11.596-6.49 9.106-13.36-.945-2.552-2.961-4.6-5.514-5.514-6.869-2.49-13.36 2.552-13.36 9.106H.473c0-10.43 10.083-18.559 21.016-15.156 4.79 1.481 8.57 5.294 10.052 10.052 3.403 10.965-4.695 21.048-15.125 21.048Z" />
                <path fillRule="evenodd" d="M16.416 25.995h-6.144v-6.144h6.144v6.144ZM10.272 30.721H5.546v-4.726h4.726v4.726ZM5.546 25.995h-3.97v-3.939h3.97v3.939Z" clipRule="evenodd" />
                {/* Additional SVG paths can be added here */}
              </g>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
