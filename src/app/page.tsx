import NavBar from "@/components/common/NavBar";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import VideoPlayerSection from "@/components/sections/VideoPlayerSection";

export default function Home() {
  return (
    <main>
      <div className="mt-24 md:32 lg:mt-2 px-4  md:px-[4rem]">
        <HeroSection />
        <ServiceSection />
        {/* <TestimonialSection />
        <TeamSection /> */}
        <NewsletterSection />
        <ContactSection />
      </div>
    </main>
  );
}
