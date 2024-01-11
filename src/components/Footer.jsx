import React from "react";
import { FaInstagram,  FaWhatsapp } from "react-icons/fa";

//import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container mt-24 lg:mt-6 mx-auto p-5 ">
      <div className=" lg:mx-5 lg:mt-6">
        <h1 className="text-grey-600 font-bold text-2xl lg:text-3xl text-left">
          Quick <span className="text-blue-500">Links</span>
        </h1>
        <hr className="my-6"></hr>
        <div className="max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8">
          <div>
            <p className="py-4">
              Biocakes: Elevate your moments with our{" "}
              <span className="text-blue-500">Homemade</span>  delights, blending organic goodness and irresistible flavors. From classic to innovative, indulge in cakes that redefine sweet perfection.
            </p>
            <div className="flex justify-around md:w-[75%] my-6">
              <a href="https://wa.me/9443512036">
                {" "}
                <FaWhatsapp
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-blue-500"
                />{" "}
              </a>
              <a href="https://instagram.com/bio_cakes_">
                {" "}
                <FaInstagram
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-blue-500"
                />{" "}
              </a>
              {/* <a href="https://twitter.com/adarhx">
                <FaXTwitter
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-blue-500"
                />
              </a> */}
              <a href="mailto:biocakes@gmail.com">
                <FiMail
                  size={30}
                  className="hover:scale-110 duration-300 hover:text-blue-500"
                />
              </a>
            </div>
            <h3 className="text-sm">Made with Love by Code Uchay</h3>
          </div>
          {  /*  <div className="lg:col-span-2 flex justify-between sm:mx-10 lg:mx-14  mt-6"> */}
            <div>
              <h6 className="font-medium text-blue-500">Links</h6>
              <ul className=" flex flex-col">
                <li className="py-2 text-sm hover:text-blue-600 cursor-pointer">
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li className="py-2 text-sm hover:text-blue-600 cursor-pointer">
                  <Link to="/menu">Menu</Link>
                </li>
                <li className="py-2 text-sm hover:text-blue-600 cursor-pointer">
                  <Link to="/categories">Categories</Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h6 className="font-medium text-blue-500">Support</h6>
              <ul>
                <li className="py-2 text-sm ">
                  About
                </li>
                <li className="py-2 text-sm ">
                  FAQ
                </li>
                <li className="py-2 text-sm ">
                  Ts&Cs
                </li>
              </ul>
            </div> */}
        
        </div>
      </div>
    </div>
  );
}

export default Footer;