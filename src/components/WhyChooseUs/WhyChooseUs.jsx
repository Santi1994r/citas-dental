import { useContext } from "react";
import CarouselC from "../Carousel/CarouselC";
import { GlobalContext } from "../Context/Context";
import FormLogin from "../Forms/FormLogin";
import FormRegister from "../Forms/FormRegister";


const WhyChooseUs = () => {
  const {openFormLogin, setOpenFormLogin, openRegister, openReservation, setOpenReservation} = useContext(GlobalContext)

  
  const ourSkills = [
    {
      image: "./images/whyChooseUs/heart.svg",
      title: "Atención profesional",
      info: "Profesionales altamente capacitados y calificados en resolver su problema dental.",
    },
    {
      image: "./images/whyChooseUs/dentist.svg",
      title: "Personal encantador",
      info: "Nuestra actitud hace que le dé gusto a usted y su familia contar con nuestros servicios",
    },
    {
      image: "./images/whyChooseUs/medicine.svg",
      title: "Medicina general",
      info: "En todo momento nuestras recetas las podrá encontrar en cualquier farmacia",
    },
    {
      image: "./images/whyChooseUs/calendar.svg",
      title: "Citas 24/7",
      info: "Separe su cita en el momento que usted tenga disponibilidad y gustosos le atenderemos",
    },
  ];

  const openForm = () => {
    const tokken = localStorage.getItem("tokenDentApp")
    tokken ? setOpenReservation(!openReservation) : setOpenFormLogin(!openFormLogin)  
  }
  return (
    <section className=" bg-gray-100 mt-20 flex flex-col items-center">
      <h2 className="text-5xl font-bold pt-20 pb-8 text-center">
        ¿Por que elegirnos?
      </h2>
      <p className="m-auto text-2xl w-10/12 sm:w-6/12 text-center">
        Nosotros sabemos tus necesidades y nuestro objetivo es que salgas con
        una hermosa sonrisa
      </p>
      <CarouselC
        ourSkills={ourSkills}
        watchMobile={1}
        watchTablet={3}
        watchDesktop={4}
        wSkills={"w-full"}
      />
      <button onClick={openForm} className=" bg-sky-600 rounded-3xl p-2 w-60 sm:w-72 text-white hover:bg-sky-800 font-semibold mb-20">
        Separe su cita
      </button>
      <div className=" bg-cyan-500 w-full h-auto sm:h-36 flex flex-col items-center sm:flex-row sm:justify-around sm:items-center">
        <div>
          <h4 className=" text-white text-3xl sm:text-4xl font-bold pb-3 pt-5 text-center sm:text-left">QUIERES DIENTES RECTOS?</h4>
          <p className=" text-white text-xl text-center">
            Adultos o Niños tenemos el tratamiento de Ortodoncia adecuado para
            ti.
          </p>
        </div>
        <button onClick={openForm} className=" bg-white rounded-3xl text-xl mt-8 mb-5 w-60 h-14 sm:w-60 text-sky-600 hover:bg-sky-800 hover:text-white font-semibold shadow-slate-500 shadow-md">
          Separe su cita ahora
        </button>
      </div>
      {
        openFormLogin ? (
          <FormLogin />
        ) : openRegister ? <FormRegister /> : null
      }
    </section>
  );
};

export default WhyChooseUs;
