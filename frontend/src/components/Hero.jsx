const Hero = () => {
  const image =
  return (
    <div className=" h-screen  lg:min-h-[85vh] bg-gradient-to-r from-[#FF007a] to-[#4b0082]   relative py-32    ">
      <div
        className="flex container mx-auto justify-center items-center h-full        
      "
      >
        {/* right */}
        <div className="w-full lg:w-1/2 ">
          <img src={image} className="w-full h-full object-cover" />
        </div>

        {/* left */}
        <div className="w-full lg:w-1/2  ">
          <h1 className="text-white font-bold text-4xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </h1>
          <p className="my-5 text-base text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="my-10 p-5 text-white font-bold bg-green-700 hover:bg-green-400 transition-all duration-300 rounded  text-base">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;