import { Link } from "react-router-dom";
import imagePath from "../assets/images/rb_517.png";

const Hero = () => {
  return (
    <div className=" h-screen  lg:min-h-[85vh] bg-gradient-to-r from-[#FF007a] to-[#4b0082]   relative py-32    ">
      <div
        className="flex container mx-auto justify-center items-center h-full        
      "
      >
        {/* right */}
        <div className="w-full lg:w-1/2 ">
          <img src={imagePath} className="w-full h-full object-cover" />
        </div>

        {/* left */}
        <div className="w-full lg:w-1/2 sm:content-center">
          <h1 className="text-white text-right font-bold font-sans text-5xl">
            Grow Your Business with Smarter Inventory Tools
          </h1>
          <p className="my-5 text-base font-mono font-mono text-right text-white">
            Optimize your business processes and enhance efficiency, allowing
            you to dedicate more time and resources to what truly
            matters—creating meaningful value and exceptional experiences for
            your customers.
          </p>
          <div className="flex justify-end">
            <Link
              to="/login"
              className="my-10 p-3 w-48 text-3xl text-indigo-700 font-bold bg-green-400 hover:bg-green-400 transition-all duration-300 rounded-full  text-base"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
