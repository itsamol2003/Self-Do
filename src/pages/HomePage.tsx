import React from "react";
import { Link, useNavigate } from "react-router-dom";

// ======================================= Pages ====================================
import RentalDeals from "../components/HomeSectio/RentalDeals";
import WhyChooseUs from "../components/HomeSectio/WhyChooseUS";
import HowtoBook from "../components/HomeSectio/HowtoBook";
import OurHappy from "../components/HomeSectio/Our Happy";
import DownloadSelfDo from "../components/HomeSectio/DownloadSelfDo";

// ======================================= Assets ====================================
import road from "../../../project/Assets/road hero.jpg";
import car from "../../../project/Assets/Hero Car.png";
import text from "../../../project/Assets/Text Hero.png";
import brandStrip from "../../../project/Assets/LOGO Hero.png";

// ======================================= Components ====================================
import TopNavbar from "../components/navigation/TopNavbar";
import Footer from "../components/navigation/Footer";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1b2d] via-[#241d3e] to-[#1f1940] text-white">
      <TopNavbar />

      <div className="min-h-screen bg-white text-black">
        {/* Hero Section */}
  <header className="relative w-full bg-white overflow-hidden h-auto sm:min-h-[92vh] pb-[160px] sm:pb-0">
  {/* Road Image */}
{/* Road Image */}
<img
  src={road}
  alt="Road"
  className="absolute bottom-[-50px] sm:bottom-0 w-full h-[160px] sm:h-[220px] md:h-[280px] lg:h-[300px] object-cover z-0"
/>
 {/* Text Image */}
<img
  src={text}
  alt="Text"
  className="absolute top-[6%] left-[4%] w-[130px] sm:top-[6%] sm:left-[6%] sm:w-[300px] md:w-[400px] z-10"
/>



{/* Car Image */}
<img
  src={car}
  alt="Car"
  className="absolute bottom-[-30px] sm:bottom-0 right-[2%] sm:right-[5%] w-[250px] sm:w-[480px] md:w-[600px] lg:w-[750px] xl:w-[850px] z-20"
/>
</header>



        {/* Logo Strip */}
        <div className="bg-black m-0 p-0 border-t border-gray-800 w-full">
          <img
            src={brandStrip}
            alt="Car brand logos"
            className="w-full h-auto block"
          />
        </div>

        {/* Sections */}
        <RentalDeals />
        <WhyChooseUs />
        <HowtoBook />
        <OurHappy />
        <DownloadSelfDo />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
