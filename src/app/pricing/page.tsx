"use client";

import TogglePricing from "@/components/common/pricingToggleButton";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Plan {
  name: string;
  desc: string;
  isMostPop: boolean;
  features: string[];
}

const PricingSection: React.FC = () => {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false); // State for toggling feature visibility
  const plans: Plan[] = [
    {
      name: "Individual",
      desc: "Personalized emotional and mental wellness assessments.",
      isMostPop: true,
      features: [
        "Personalized Wellness Assessments",
        "24/7 Access to AI Counselor",
        "Extensive Resource Library",
      ],
    },
    {
      name: "Organisation",
      desc: "Tailored wellness assessments for organizations' employee health.",
      isMostPop: false,
      features: [
        "100% Complete Access",
        "Employee or member emotional wellness assessments.",
        "Direct delivery of assessment results to clients.",
        "counselors (via admin accounts) and clients both receive assessment results for Organisation.",
        "Comprehensive support for emotional health within the organization.",
      ],
    },
    {
      name: "Coach",
      desc: "Personalized wellness assessments for coaches’ client success.",
      isMostPop: false,
      features: [
        "Full access to client assessments.",
        "Access to client reports",
        "Professional tools to support clients' emotional and mental health",
        "Ability to track and manage multiple clients.",
      ],
    },
  ];

  return (
    <section className="pt-[8rem] md:py-14 ">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            All Available Packages
          </h3>
          <div className="mt-3 max-w-xl">
            <p>
              Choose between flexible monthly or yearly plans for personalized
              support and expert guidance on your journey to emotional
              well-being!
            </p>
          </div>
        </div>

        {/* <div className="flex items-center justify-center mt-8">
          <TogglePricing />
        </div> */}

        <div className="w-full flex flex-col flex-wrap md:flex-row gap-[1.56rem] justify-around mt-8 md:mt-[2rem]">
          {plans.map((item, idx) => {
            const displayedFeatures = showAll
              ? item.features
              : item.features.slice(0, 3); // Show all or first 3 features

            return (
              <div
                key={idx}
                className={`relative flex flex-1 md:min-w-[20rem] md:max-w-[24rem] items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${
                  item.isMostPop ? "mt-10" : ""
                }`}
              >
                {item.isMostPop && (
                  <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                    Most popular
                  </span>
                )}
                <div className="p-8 space-y-4 border-b">
                  <span className="text-primary text-2xl font-semibold font-medium">
                    {item.name}
                  </span>
                  <div className="text-gray-800 text-3xl font-semibold">
                    {item.name === "Individual" && (
                      <>
                        <p>
                          $9.99{" "}
                          <span className="text-gray-500 text-sm">
                            One-time Payment
                          </span>
                        </p>
                      </>
                    )}

                    {item.name === "Organisation" && (
                      <>
                        <p className="text-xl">
                          $999{" "}
                          <span className="text-gray-500 text-[13px]">
                            Small | 0-100 employees
                          </span>
                        </p>

                        <div className="my-3">
                          <p className="text-xl">
                            $2,499{" "}
                            <span className="text-gray-500 text-[13px]">
                              Medium | over 100-500 employees
                            </span>
                          </p>
                        </div>

                        <p className="text-xl">
                          $4,999{" "}
                          <span className="text-gray-500 text-[13px]">
                            Large | over 500+ employees
                          </span>
                        </p>
                      </>
                    )}

                    {item.name === "Coach" && (
                      <>
                        <p className="text-2xl">
                          $39{" "}
                          <span className="text-gray-500 text-sm">
                            Montly Payment
                          </span>
                        </p>
                        <p className="mt-2 text-2xl">
                          $419{" "}
                          <span className="text-gray-500 text-sm">
                            Annual Payment
                          </span>
                        </p>
                      </>
                    )}
                  </div>
                  <p>{item.desc}</p>
                  <button
                    onClick={() =>
                      router.push(
                        item.name !== "Coach" ? "/user-app" : "/coach-app"
                      )
                    }
                    className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white border-2 bg-primary hover:bg-white hover:border-primary hover:text-primary"
                  >
                    Get Started
                  </button>
                </div>
                <ul className="p-8 space-y-3">
                  <li className="pb-2 text-gray-800 font-medium">
                    <p>Features</p>
                  </li>
                  {displayedFeatures.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="min-h-5 max-h-5 max-5 min-w-5 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul>
                {/* Button for toggling feature visibility */}
                {item.features.length > 3 && (
                  <div className="flex justify-center p-4">
                    <button
                      className="p-2 text-sm text-primary hover:underline"
                      onClick={() => setShowAll((prev) => !prev)}
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
