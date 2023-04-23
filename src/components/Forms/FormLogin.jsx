import React, { useContext, useRef } from "react";
import { GlobalContext } from "../Context/Context";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import exportLinks from "../../links/exportLinks";
import Swal from 'sweetalert2'

const { linkLogin } = exportLinks();

const FormLogin = () => {
  const formRegister = useRef()
  const btnSubmit = useRef()
  const { setOpenFormLogin, setOpenRegister } =
    useContext(GlobalContext);

  const openFormReg = () => {
    setOpenFormLogin(false);
    setOpenRegister(true);
  };

  const closeModal = () => {
    setOpenFormLogin(false);
  };

  const validationForm = Yup.object({
    email: Yup.string()
      .email(
        <p className="text-sky-800 font-bold text-xl">
          Formato de E-mail invalido
        </p>
      )
      .required(<p className="text-sky-800 font-bold text-xl">Ingresa tu mail</p>),
    password: Yup.string().required(
      <p className=" text-sky-800 font-bold text-xl">Ingresa tu contraseña</p>
    ),
  });


  const sendEmail = async (values) => {
    const { email, password } = values
    const loginUser = {
      "email": email,
      "password": password,
    }
  /*   const signUp = (user) => {
      if(user) {

      }
    } */

    if (loginUser.email && loginUser.password) {
      const result = await linkLogin(loginUser);
      if(result) {
        closeModal()
        console.log(result);
       /*  signUp() */
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El usuario o contraseña no son correctos'
        })
      }
    }
    /*  if (
       formRegister.current.email.value == "" ||
       formRegister.current.password.value == ""
     ) {
       return;
     } */
    /* btnSubmit.current.value = "Enviando"; */
  };
  return (
    <>
      <div
        className=" bg-black opacity-70 h-full w-full fixed top-0"
        onClick={() => closeModal()}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={sendEmail}
        validationSchema={validationForm}
      >
        <Form
          ref={formRegister}
          className="flex flex-col items-center justify-center bg-gradient-form sm:w-96 w-11/12 h-96 m-auto rounded-2xl fixed top-0 right-0 left-0 bottom-0 z-50"
        >
          <p
            onClick={closeModal}
            className=" text-white text-xl self-end mr-5 cursor-pointer hover:opacity-50 w-10  p-1 flex justify-center"
          >
            X
          </p>
          <h5 className="text-2xl text-white mb-3">Iniciar sesión</h5>
          <Field
            className="w-10/12 sm:w-8/12 rounded-lg p-1 shadow-black shadow-md mt-4 mb-1"
            type="email"
            name="email"
            placeholder="Correo electrónico"
          />
          <ErrorMessage name="email" />
          <Field
            className="w-10/12 sm:w-8/12 rounded-lg p-1 shadow-black shadow-md mt-4 mb-1"
            type="password"
            name="password"
            placeholder="Contraseña"
          />
          <ErrorMessage name="password" />
          {/* <button className=" bg-sky-800 rounded-3xl p-2 mt-5 w-60 sm:w-72 text-white hover:bg-sky-600 font-semibold">
          Iniciar sesión
        </button> */}
          <input
            ref={btnSubmit}
            onClick={sendEmail}
            type="submit"
            className="bg-sky-800 rounded-3xl p-2 my-5 w-60 sm:w-72 text-white hover:bg-sky-600 font-semibold cursor-pointer"
            value="Iniciar sesión"
          />
          <p className=" text-white mb-5">
            Si no estas registrado{" "}
            <span
              onClick={openFormReg}
              className=" text-sky-300 underline cursor-pointer"
            >
              Regístrate
            </span>
          </p>
        </Form>
      </Formik>
    </>
  );
};

export default FormLogin;
