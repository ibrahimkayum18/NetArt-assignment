import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillDribbbleCircle } from "react-icons/ai";


const Footer = () => {
    return (
        // Footer Section JSX Code
        <div className="bg-red-600 lg:m-3 lg:mt-5 text-white lg:flex justify-around pt-6 pb-16 ">
            <div className="flex justify-center items-center gap-2">
                <FaSquarePhone className="text-3xl"/>
                <p>Toll Free <span className="font-bold">1800 200 1234</span></p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <FaFacebook className="text-3xl"/>
                <p>https://www.facebook.com/smibrahim.kayum</p>
            </div>
            <div className="flex justify-center items-center gap-2">
                <AiFillDribbbleCircle className="text-3xl"/>
                <p>ibrahimkayum017@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;