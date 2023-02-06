import AboutUs from "../components/aboutUs/AboutUs";
import Brands from "../components/brands/Brands";
import Contact from "../components/contact/Contact";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import NavbarMobile from "../components/navbar/NavbarMobile";
import NewProducts from "../components/products/NewProducts";
import Services from "../components/services/Services";

const Home = () => {
  return (
    <>
      <NavbarMobile />
      <Navbar />
      <Main />
      <AboutUs />
      <NewProducts />
      <Services />
      <Brands />
      <Contact />
    </>
  );
};
export default Home;