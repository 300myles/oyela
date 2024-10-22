import React from "react";
import { Separator } from "../ui/separator";

function FooterSection() {
  return (
    <section className="flex flex-col mt-[5rem] gap-[0.6rem] w-full md:mt-[3.44rem] px-4  md:px-[4rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        {/* <div className="flex flex-row items-end">
          <img src="/images/logo_desktop1.png" className="w-[2rem] h-[3rem]" alt="logo" />

          <p className="font-[850] md:leading-[2.0625rem] text-2xl md:text-[2rem] text-darkBlue">
            <span className="text-primary">O</span>
            yela
          </p>
        </div> */}

        <div className="text-primary hidden md:block text-[1rem] md:text-[2rem] font-serif">
          Illuminating your world...
        </div>
        <div className="flex gap-4">
          <p className="text-lightBlue hover:text-primary text-[1rem]">How it Works</p>
          <p className="text-lightBlue hover:text-primary text-[1rem]">Pricing</p>
          <p className="text-lightBlue hover:text-primary text-[1rem]">About</p>
          <p className="text-lightBlue hover:text-primary text-[1rem]">Get Started</p>
        </div>
      </div>
      <Separator />
      <div className=" pt-[1rem] pb-[2.56rem]">
        <p className="text-customGray text-center">
          Copyright @ Oyela. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
