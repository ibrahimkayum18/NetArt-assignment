import serviceImg from "./../assets/3.png";
const Service = () => {
  return (
    <div>
      <p className="px-5  py-5">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </p>
      <img src={serviceImg} className="w-[80%] mx-auto" alt="" />
      <p className="text-center py-5 border-b-2 border-red-700 mx-5">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors{" "}
      </p>
      <div>
        <p className="text-center py-5 font-bold">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p className="text-center px-5">CHEMICALS & PROCESS POWER <span className="text-red-600">|</span> WATER & WASTE WATER <span className="text-red-600">|</span> OILS & GAS PHARMA <span className="text-red-600">|</span> SUGARS & DISTILLERIES <span className="text-red-600">|</span> PAPER & PULP <span className="text-red-600">|</span> MARINE & DEFENCE <span className="text-red-600">|</span> METAL & MINING <span className="text-red-600">|</span> FOOD & BEVERAGE <span className="text-red-600">|</span> PETROCHEMICAL & REFINERIES <span className="text-red-600">|</span> SOLAR <span className="text-red-600">|</span> BUILDING <span className="text-red-600">|</span> HVAC <span className="text-red-600">|</span> FIRE <span className="text-red-600">|</span> FIGHTING <span className="text-red-600">|</span> AGRICULTURE & RESIDENTIAL</p>
      </div>
    </div>
  );
};

export default Service;
