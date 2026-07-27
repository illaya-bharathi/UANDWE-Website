import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/Whyuandwe";
import Contactus from "../components/ContactUs";
import Industries from "../components/Sectorweserve";
import CareersSection from "../components/CareersSection";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Industries />
      <Services />
      <CareersSection />
      <WhyChooseUs />
      <div id="contactus">
        <Contactus />
      </div>
    </>
  );
};

export default Home;