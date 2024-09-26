import Accordion from "../../components/home/Accordion";
import { Hero } from "../../components/home/Hero";
import Team from "../../components/home/Team";
import Testimonial from "../../components/home/Testimonial";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Footer from "../../components/root/Footer";
import Navbar from "../../components/root/Navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div data-aos="fade-up" className="">
        <WhyChooseUs />
      </div>
      <div data-aos="fade-up" className="">
        <Team />
      </div>
      <div data-aos="fade-up" className="">
        <Testimonial />
      </div>
      <div data-aos="fade-up" className="">
        <Accordion />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
