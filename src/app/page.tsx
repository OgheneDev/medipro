import HeroSection from "@/components/landing page/HeroSection";

import ContactSection from "@/components/landing page/ContactSection";
import MedicalServices from "@/components/landing page/MedicalServices";
import MedicalServicesList from "@/components/landing page/MedicalServicesList";
import Appointments from "@/components/landing page/Appointments";
import HowWeWork from "@/components/landing page/HowWeWork";
import FAQS from "@/components/landing page/FAQS";
import Testimonials from "@/components/landing page/Testimonials";
import BlogSection from "@/components/landing page/Blog";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <MedicalServices />
      <MedicalServicesList />
      <Appointments />
      <HowWeWork />
      <FAQS />
      <Testimonials />
      {/* <BlogSection /> */}
    </div>
  );
}
