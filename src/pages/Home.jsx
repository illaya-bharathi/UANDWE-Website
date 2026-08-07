import Hero from "../components/Hero";
import NewsInsights from "../components/NewsInsights";
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
      <NewsInsights />
      <CareersSection />
      <WhyChooseUs />
      <div id="contactus">
        <Contactus />
      </div>
    </>
  );
};

export default Home;