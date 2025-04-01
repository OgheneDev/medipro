import HeroSection from "@/components/landing page/HeroSection";
import ContactSection from "@/components/landing page/ContactSection";
import MedicalServices from "@/components/landing page/MedicalServices";
import MedicalServicesList from "@/components/landing page/MedicalServicesList";
import Appointments from "@/components/landing page/Appointments";
import HowWeWork from "@/components/landing page/HowWeWork";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <MedicalServices />
      <MedicalServicesList />
      <Appointments />
      <HowWeWork />
    </div>
  );
}
