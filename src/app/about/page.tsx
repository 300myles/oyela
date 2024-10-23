"use client";

import React from "react";
import { FaUsers, FaBrain, FaMobileAlt, FaUserCog } from "react-icons/fa"; // Importing icons from react-icons
import MainButton from "@/components/common/MainButton";
import { useRouter } from "next/navigation";

const AboutPage: React.FC = () => {
  const router = useRouter();
  return (
    <section className="pt-[8rem] md:py-14">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-darkBlue text-center mb-8">
          About Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          At Oyela, we believe in empowering individuals to manage their
          emotions and navigate life{"'"}s challenges with confidence. Our platform
          connects users with professional counselors and provides AI-driven
          support tailored to their unique needs.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaUsers className="text-5xl text-primary mb-4" />{" "}
            {/* Increased size */}
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Expert Guidance
            </h2>
            <p className="text-gray-600 text-center">
              Connect with certified counselors who provide personalized
              guidance to help you navigate your emotional landscape. Gain
              insights and strategies tailored to your needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img
              src={"/images/virtual-ai.png"}
              className="w-12 h-12 mt-3 mb-2"
              alt="service icon"
            />
            <h2 className="text-2xl font-semibold text-primary mb-2">
              AI-Powered Insights
            </h2>
            <p className="text-gray-600 text-center">
              Our AI counselor offers 24/7 support, helping you understand your
              feelings and providing coping strategies when you need them most.
              It{"'"}s like having a friend who{"'"}s always there for you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaMobileAlt className="text-5xl text-primary mb-4" />{" "}
            {/* Increased size */}
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Flexible Accessibility
            </h2>
            <p className="text-gray-600 text-center">
              Access our services anytime, anywhere, through your mobile device
              or desktop, ensuring support is always within reach. Your mental
              wellness should never be out of touch.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaUserCog className="text-5xl text-primary mb-4" />{" "}
            {/* Increased size */}
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Personality Insights
            </h2>
            <p className="text-gray-600 text-center">
              Discover personalized insights that help you understand your
              unique personality traits and how they impact your relationships
              with others. Know yourself better to improve your connections.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <MainButton text="Get Started" disabled={false} action={() => {router.push("/user-app")}} classes="shadow-none text-md" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
