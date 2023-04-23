import React from "react";
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'
import { BiMessageDots } from 'react-icons/bi'


function Footer() {
  return (
    <>
    <footer id="contact" className="bg-blue-sky text-white">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-around py-4 px-5">
        <div className="mb-4 md:mb-0 flex flex-col items-center">
          <div className=""><img src="./images/footer_img/MapPinLine.svg" className="" alt="" /></div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-center">Ponte en Contacto</h4>
            <ul>
              <li className="mt-2 text-center ">Calle los Pinos 830 - Lima</li>
              <li className="mt-2 text-center ">info@sonrisasdental.com</li>
              <li className="mt-2 text-center ">+51 990 645 017</li>
            </ul>
          </div>
        </div>
        <div className="mb-4 md:mb-0 flex flex-col items-center pt-6">
          <BiMessageDots className="text-3xl"/>
          <div>
            <h4 className="font-bold text-lg mb-2 text-center">Social Media</h4>
            <ul className="flex flex-col items-center">
              <li className="mt-2 text-center">Síguenos en:</li>
              <li className="mt-2 text-center">Nuestras Redes</li>
              <li className="mt-2 "><BsFacebook /></li>
            </ul>
          </div>
        </div>
       
        <div className="mb-4 md:mb-0 flex flex-col items-center pt-6">
          <AiOutlineLink className="text-3xl "/>
          <h4 className="font-bold text-lg mb-2 text-center">Links</h4>
          <ul>
            <li className="mt-2 text-center">Vacantes</li>
            <li className="mt-2 text-center">Unete a nuestro Equipo</li>
            <li className="mt-2 text-center">Preguntas</li>
          </ul>
        </div>
      </div>
    </footer>
    <div className="bg-blue-blue text-white text-center pb-10 pt-10">
      <h4>Copyright © 2023    Citas Dental.    All rights reserved       Terms of Service  |  Privacy & Cookie Policy</h4>
    </div>
    </>
  );
}

export default Footer;