import leftImg from "./../assets/1.png";
import bannerRightImage from "./../assets/2.png";
const Banner = () => {
  return (
    // Full Banner Section
    <div className="lg:flex justify-center items-center gap-5">
      {/* Left side Image */}
      <div className="w-[95%] lg:w-[35%]">
        <img src={leftImg} alt="" />
      </div>

      {/* Right side Contents */}
      <div className=" w-full px-5 lg:px-0 lg:w-[65%]">
        <h2 className="font-bold">
          {" "}
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h2>
        <div className="">
          {/* Banner Contents */}
          <ul className="list-disc px-10">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>

          {/* Banner Right side Image */}
          <img src={bannerRightImage} alt="" />

          {/* Description */}
          <h5 className="py-5">
            Government of India has awarded the{" "}
            <span className="font-bold">
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
