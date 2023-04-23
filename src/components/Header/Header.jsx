import "../../index.css";
import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../Context/Context";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import AlertEmail from "../AlertEmail/AlertEmail";

function Header() {
  const { openFormLogin, setOpenFormLogin, alertEmail, setAlertEmail, openReservation, setOpenReservation} = useContext(GlobalContext);
  const formRef = useRef();
  const btnSubmit = useRef();
  const openForm = () => {
    const tokken = localStorage.getItem("tokenDentApp")
    tokken ? setOpenReservation(!openReservation) : setOpenFormLogin(!openFormLogin)
    
  };
  const validationForm = Yup.object({
    from_name: Yup.string().required(
      <p className=" text-red-500 text-sm flex self-center">
        Ingresa tu nombre
      </p>
    ),
    user_id: Yup.string()
      .email(
        <p className="text-red-500 text-sm flex self-center">
          Formato de E-mail invalido
        </p>
      )
      .required(
        <p className="text-red-500 text-sm flex self-center">Ingresa tu mail</p>
      ),
    phoneNumber: Yup.string().required(
      <p className="text-red-500 text-sm flex self-center">
        Ingresa un teléfono
      </p>
    ),
    message: Yup.string().required(
      <p className="text-red-500 text-sm flex self-center">
        Ingresa un mensaje
      </p>
    ),
  });

  const sendEmail = (value) => {
    if (
      formRef.current.from_name.value == "" ||
      formRef.current.message.value == "" ||
      formRef.current.user_id.value == "" || 
      formRef.current.phoneNumber.value == ""
    ) {
      setAlertEmail("error");
      return;
    }
    btnSubmit.current.value = "Enviando";
    emailjs
      .send(
        "service_tkl1cci",
        "template_djzfj1f",
        {
          from_name: formRef.current.from_name.value,
          message: formRef.current.message.value,
          user_id: formRef.current.user_id.value,
          phoneNumber: formRef.current.phoneNumber.value
        },
        "yNLc2Kbwkbsvics7M"
      )
      .then((resp) => {
        btnSubmit.current.value = "Enviar e-mail";
        setAlertEmail(true);
        console.log(resp);
      })
      .catch((err) => {
        btnSubmit.current.value = "Enviar e-mail";
        alert("Ocurrió el siguiente error: " + JSON.stringify(err));
      });
  };
  return (
    <>
      <div
        className="bg-[url(./images/header_img/f1.jpeg)] bg-no-repeat bg-center bg-cover mx-auto flex flex-col md:flex-row lg:justify-end py-4 px-5 bg-opacity-100"
        id="fondo"
      >
        <div
          className="flex flex-col items-start justify-center w-full sm:w-6/12 text-left sm:pl-20"
          id="header"
        >
          <h1 className="text-5xl font-bold text-white pb-7">
            Para Sonrisas <br />
            Saludables
          </h1>
          <h2 className="text-xl text-white pb-7">
            Odontología General y Estética Integral
          </h2>
          <button
            onClick={openForm}
            className="bg-blue-blue hover:bg-blue-sky text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline text-lg"
            type="button"
          >
            Requiero una Cita
          </button>
          <h3 className="text-white pt-4">O llamar al 51-990-645-017</h3>
        </div>
        <div className="mx-auto mt-10 sm:w-6/12 sm:flex sm:flex-col sm:items-center">
          <Formik
            initialValues={{
              from_name: "",
              user_id: "",
              phoneNumber: "",
              message: "",
            }}
            onSubmit={sendEmail}
            validationSchema={validationForm}
          >
            <Form
              ref={formRef}
              className="bg-white shadow-md rounded-3xl pt-6 pb-8 mb-4 w-full sm:w-10/12 lg:w-7/12 px-5"
            >
              <h2 className="text-3xl font-bold mb-4 text-black">
                Deja un mensaje
              </h2>
              <h5 className="text-gray-400 pb-3">
                Nos pondremos en contacto con usted para analizar sus
                necesidades dentales
              </h5>
              <div className="mb-4 flex flex-col items-end relative ">
                <Field
                  className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 z-0"
                  type="text"
                  name="from_name"
                  placeholder="Nombre completo"
                />
                <img
                  src="./images/header_img/User.svg"
                  className="absolute pr-2 pt-2"
                  alt=""
                />
                <ErrorMessage name="from_name" />
              </div>
              <div className="mb-4 flex flex-col items-end relative  ">
                <Field
                  className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 z-0"
                  type="email"
                  name="user_id"
                  placeholder="Correo electrónico"
                />
                <img
                  src="./images/header_img/mail.svg"
                  className="absolute pr-2 pt-2"
                  alt=""
                />
                <ErrorMessage className="" name="user_id" />
              </div>
              <div className="mb-4 flex flex-col items-end relative">
                <Field
                  className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 z-0"
                  type="number"
                  name="phoneNumber"
                  placeholder="Número celular"
                />
                <img
                  src="./images/header_img/PhoneCall.svg"
                  className="absolute pr-2 pt-2"
                  alt=""
                />
                <ErrorMessage className="" name="phoneNumber" />
              </div>
              <div className="mb-6 flex flex-col items-end relative">
                <Field
                  className="shadow appearance-none border rounded-2xl w-full h-24 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 resize-none z-0"
                  type="text"
                  as="textarea"
                  name="message"
                  placeholder="Deja tu Mensaje"
                />
                <img
                  src="./images/header_img/edit.svg"
                  className="absolute pr-2 pt-2"
                  alt=""
                />
                <ErrorMessage className="" name="message" />
              </div>
              <div className="flex items-center justify-between">
                <input
                  ref={btnSubmit}
                  onClick={sendEmail}
                  id="button"
                  type="submit"
                  className="bg-blue-blue hover:bg-blue-sky text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline text-xl cursor-pointer"
                  value="Enviar email"
                />
                <div className="absolute">
                  {alertEmail == true ? (
                    <AlertEmail
                      icon={true}
                      text1={"E-mail enviado con éxito"}
                      text2={"Gracias por tu mensaje."}
                    />
                  ) : alertEmail == "error" ? (
                    <AlertEmail icon={false} />
                  ) : null}
                </div>
                {useEffect(() => {
                  setTimeout(() => {
                    setAlertEmail(false);
                    formRef.current.from_name.value = "";
                    formRef.current.message.value = "";
                    formRef.current.user_id.value = "";
                    formRef.current.phoneNumber.value = "";

                  }, 3000);
                }, [alertEmail])}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <section>
        <div className="container mx-auto flex flex-col md:flex-row justify-around py-4 px-5">
          <div className="mb-4 md:mb-0 flex flex-col items-center">
            <div className="mb-4 md:mb-0 flex flex-col items-center">
              <img src="./images/header_img/clock.svg" alt="" />
              <h4 className="font-bold text-lg mb-2">Horario de Atención</h4>
              <ul>
                <li className="mt-2">Lun-Sab 09:00-15:00</li>
              </ul>
            </div>
          </div>
          <div className="mb-4 md:mb-0 flex flex-col items-center">
            <img
              src="./images/header_img/MapPinLineH.svg"
              className=""
              alt=""
            />
            <h4 className="font-bold text-lg mb-2">Ubicación</h4>
            <ul>
              <li className="mt-2">Calle Los Pinos 830 - Lima</li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 flex flex-col items-center">
            <img src="./images/header_img/PhoneCall.svg" alt="" />
            <h4 className="font-bold text-lg mb-2">Número Telefono</h4>
            <ul>
              <li className="mt-2">+51 990 645 017</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
