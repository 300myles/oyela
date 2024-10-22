"use client";

import React, { useState } from "react";
import MainButton from "../common/MainButton";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  summary: string;
  action?: () => void;
}

function ServiceCard({ iconUrl, title, description, summary, action }: IProps) {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="flex flex-1 md:min-w-[24rem] md:max-w-[24rem] flex-col gap-[2.56rem]  pt-[1.91rem] pb-[2.81rem] px-[1.5rem] items-center service-card-shadow rounded-[1.75rem]">
      <div>
        <img src={iconUrl} alt="service icon" />
      </div>
      <p className="text-[1.5rem] text-center font-[700]">{title}</p>
      <p className="text-normal">{viewMore ? description : summary}</p>
      <MainButton text={viewMore ? "Show Less" : "Learn More"} action={() => setViewMore(!viewMore)} classes="w-[10.125rem] text-md" />
    </div>
  );
}

export default ServiceCard;
