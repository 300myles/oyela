import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";
import { features } from "process";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/virtual-ai.png",
      title: `Virtual AI Counselor`,
      description:
        // "Our AI-powered Virtual Counselor provides instant, round-the-clock emotional support tailored to your needs. Whether you're feeling anxious, stressed, or need relationship advice, the Virtual Counselor is always available to listen and guide you. Using advanced emotional intelligence, it offers personalized responses, mindfulness exercises, and tips to help you navigate your emotions anytime, anywhere.",
        "Our AI-powered Virtual Counselor provides instant, round-the-clock emotional support tailored to your needs. Whether you're feeling anxious, stressed, or need relationship advice, the Virtual Counselor is always available to listen and guide you.",
      features: [
        "Immediate emotional support.",
        "Personalized mindfulness and coping strategies.",
        "Available 24/7 for whenever you need a listening ear."
      ],
    },
    {
      id: 1,
      iconUrl: "/images/global.png",
      title: "Global Access to Professional Counselors",
      description:
        // "Connect with certified therapists and counselors from around the world through our app. We make it easy to schedule virtual sessions with professionals who understand your unique emotional needs. Whether it's relationship challenges, mental health concerns, or personal growth, you can find the right counselor for you and receive expert advice in a safe, confidential setting",
        "Connect with certified therapists and counselors from around the world through our app. We make it easy to schedule virtual sessions with professionals who understand your unique emotional needs.",
      features: [
        "Access to licensed counselors globally.",
        "Flexible scheduling for virtual therapy sessions.",
        "Secure, private consultations with professionals."
      ],
    },
    {
      id: 2,
      iconUrl: "/images/heart-care.png",
      title: "Therapy & Relationship Assessments",
      description:
        // "Our app offers in-depth personality and relationship assessments that help you understand yourself and your interactions better. These personalized assessments are designed by experts to offer insights into your emotional well-being, attachment styles, and relationship patterns. By understanding your strengths and areas for growth, you can make meaningful changes and enhance your emotional life.",
        "Our app offers in-depth personality and relationship assessments that help you understand yourself and your interactions better. These personalized assessments are designed by experts to offer insights into your emotional well-being and relationships.",
        features: [
          "Tailored personality assessments.",
          "Insights into your emotional well-being and relationships.",
          "xpert advice for personal growth and stronger connections."
        ],
    },
  ];
  return (
    <section className="mt-12">
      <Header title="service" subtitle="Our Vison & Our Goal" />
      <div className="w-full flex flex-col flex-wrap md:flex-row  gap-[1.56rem] justify-around mt-8 md:mt-[4.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
