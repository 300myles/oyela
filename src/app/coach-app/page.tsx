"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface Feature {
  name: string;
  feature: string;
}

interface Plan {
  name: string;
  desc: string;
  price: number;
  icon: string;
  features: Feature[];
}



const OurApp: React.FC = () => {
  const router = useRouter();
  const plans: Plan[] = [
    {
      name: "Individual",
      icon: "/svgs/app-store.svg",
      desc: "App Store Features",
      price: 12,
      features: [
        { name: "Company", feature: "Oyela Ltd." },
        { name: "Updated", feature: "Oct. 22, 2024" },
        { name: "Version", feature: "1.0.0" },
        { name: "Size", feature: "143.2 MB" },
        { name: "Language", feature: "English" },
        { name: "Seller", feature: "Eki-Conet Digital" },
      ],
    },
    {
      name: "Organisation",
      desc: "Play Store Features",
      price: 35,
      icon: "/svgs/play-store.svg",
      features: [
        { name: "Company", feature: "Oyela Ltd." },
        { name: "Updated", feature: "Oct. 22, 2024" },
        { name: "Version", feature: "1.0.0" },
        { name: "Size", feature: "143.2 MB" },
        { name: "Language", feature: "English" },
        { name: "Seller", feature: "Eki-Conet Digital" },
      ],
    },
  ];

  return (
    <section className="pt-[8rem] md:py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Unlock New Opportunities with{" "}
            <span className="text-primary">O</span>yela Coach App
          </h3>
          <div className="mt-3 max-w-xl">
            <p>
            Take the first step toward expanding your practice and helping more clients achieve their wellness goals. Download Oyela Coach today and unlock new opportunities in counseling.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col flex-wrap md:flex-row gap-[1.56rem] justify-center mt-8 md:mt-[2.75rem]">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-1 md:min-w-[20rem] md:max-w-[24rem] shadow-xl items-center flex-col rounded-xl border mt-6 border-primary sm:mt-0 pb-8 px-12"
            >
              <div className="p-8 flex flex-col items-center">
                <img
                  src={item.icon}
                  className="md:scale-150"
                  alt={`${item.name} icon`}
                />
                <p className="mt-4">{item.desc}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <span>Ratings</span>
                  <span>3.5/5.0</span>
                  <img
                    src="/images/star.png"
                    className="inline w-4 h-4"
                    alt="ratings star"
                  />
                </div>
              </div>

              <ul className="py-4 border-t w-full space-y-3">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span>{featureItem.name}:</span>
                    <span>{featureItem.feature}</span>
                  </li>
                ))}
              </ul>

              <button className="px-3 py-3 mt-12 mb-4 rounded-lg w-full font-semibold text-sm md:text-xl border-2 duration-150 text-white bg-primary hover:bg-white hover:border-primary hover:text-primary">
                Download
              </button>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center gap-[1.56rem] justify-center mt-8 md:mt-[2.75rem]">
          <h3 className="text-gray-800 mt-12 text-center text-3xl font-semibold sm:text-4xl">
            Register as a Client
          </h3>
          <button onClick={() => router.push("/user-app")} className="px-3 flex items-center gap-3 py-2 mb-4 rounded-lg font-semibold text-sm md:text-xl border-2 duration-150 text-gray-700 bg-white hover:bg-white hover:border-primary hover:text-primary">
            Continue
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurApp;
