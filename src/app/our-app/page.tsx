"use server";

import React from "react";

interface Plan {
  name: string;
  desc: string;
  price: number;
  icon: string;
  features: object[];
}

const OurApp: React.FC = () => {

  const plans: Plan[] = [
    {
      name: "Individual",
      icon: "/svgs/app-store.svg",
      desc: "App Store Features",
      price: 12,
      features: [
        {
          name: "company",
          feature: "Oyela ltd."
        },
        {
          name: "Updated",
          feature: "Oct.22.2024"
        },
        {
          name: "Version",
          feature: "1.0.0"
        },
        {
          name: "Size",
          feature: "143.2 mb"
        },
        {
          name: "Language",
          feature: "English"
        },
        {
          name: "Seller",
          feature: "Eki-Conet Digital"
        },
      ],
    },
    {
      name: "Organisation",
      desc: "Play Store Features",
      price: 35,
      icon: "/svgs/play-store.svg",
      features: [
        {
          name: "company",
          feature: "Oyela ltd."
        },
        {
          name: "Updated",
          feature: "Oct.22.2024"
        },
        {
          name: "Version",
          feature: "1.0.0"
        },
        {
          name: "Size",
          feature: "143.2 mb"
        },
        {
          name: "Language",
          feature: "English"
        },
        {
          name: "Seller",
          feature: "Eki-Conet Digital"
        },
      ],
    },
  ];

  return (
    <section className="pt-[8rem] md:py-14 ">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Unlock Emotional Wellness with{" "}
            <span className="text-primary">O</span>yela
          </h3>
          <div className="mt-3 max-w-xl">
            <p>
              Start your journey toward emotional well-being and better
              relationships today. Find Oyela on the App Store and Google Play
              Store!
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col flex-wrap md:flex-row  gap-[1.56rem] justify-center mt-8 md:mt-[2.75rem]">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex flex-1 md:min-w-[20rem] md:max-w-[24rem] shadow-xl items-center flex-col rounded-xl border mt-6 border-primary sm:mt-0 pb-8 px-12`}
            >
              <div className="p-8 flex flex-col items-center">
                <img src={item.icon} className="md:scale-150" alt="service icon" />

                <p className="mt-4">{item.desc}</p>

                <p className="m-0 h-8 flex flex-row justify-between items-center">
                  Ratings
                  3.5/5.0
                  <img src="/images/star.png" className="m-0 inline w-4 h-4" alt="service icon" />
                </p>
              </div>

              <ul className="py-4 border-t w-full space-y-3">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex justify-between  items-center">
                    <span>{featureItem.name}:</span>
                    {featureItem.feature}
                  </li>
                ))}
              </ul>

              <button className="px-3 py-3 mt-12 mb-4 rounded-lg w-full font-semibold text-sm md:text-xl duration-150 text-white bg-primary hover:bg-indigo-500 active:bg-indigo-700">
                  Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApp;