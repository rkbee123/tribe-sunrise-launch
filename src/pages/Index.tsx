
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import WhyJoin from "@/components/WhyJoin";
import MeetupDetails from "@/components/MeetupDetails";
import RunnerMatch from "@/components/RunnerMatch";
import RegistrationForm from "@/components/RegistrationForm";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <AboutUs />
      <WhyJoin />
      <MeetupDetails />
      <RunnerMatch />
      <RegistrationForm />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
