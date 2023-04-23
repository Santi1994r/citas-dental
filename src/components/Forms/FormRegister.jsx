import React, { useContext, useRef } from "react";
import { GlobalContext } from "../Context/Context";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import exportLinks from "../../links/exportLinks";

const { linkRegister } = exportLinks();

const FormRegister = () => {
  const { openRegister, setOpenRegister } = useContext(GlobalContext);
  const formRef = useRef();

  const closeModal = () => {
    setOpenRegister(false);
  };

  const validationForm = Yup.object({
    firstName: Yup.string().required(
      <p className=" text-sky-800 font-bold text-sm">Ingresa tu nombre</p>
    ),
    lastName: Yup.string().required(
      <p className=" text-sky-800 font-bold text-sm">Ingresa tu apellido</p>
    ),
    email: Yup.string()
      .email(
        <p className="text-sky-800 font-bold text-sm">
          Formato de e-mail invalido
        </p>
      )
      .required(
        <p className="text-sky-800 font-bold text-sm">Ingresa tu correo</p>
      ),
    phoneNumber: Yup.string().required(
      <p className=" text-sky-800 font-bold text-sm">Ingresa tu teléfono</p>
    ),
  }).shape({
    password: Yup.string()
      .min(
        6,
        <p className=" text-sky-800 font-bold text-sm">
          La contraseña debe tener al menos 6 caracteres
        </p>
      )
      .required(
        <p className=" text-sky-800 font-bold text-sm">
          Debes ingresar una contraseña
        </p>
      ),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        <p className=" text-sky-800 font-bold text-sm">
          Las contraseñas deben coincidir
        </p>
      )
      .required(
        <p className=" text-sky-800 font-bold text-sm">
          Confirme la contraseña
        </p>
      ),
  });
  

  const sendEmail = async (values) => {
    const { firstName, lastName, email, phoneNumber, password } = values;
    console.log(email);
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };
    if (newUser.email && newUser.firstName) {
      const result = await linkRegister(newUser);
      result && closeModal();
    }

    /*  console.log(values); */
    /*  linkRegister({
       "firstName": "Gonzalo",
       "lastName": "Gonzalo",
       "email": "gonzalo@gmail.com",
       "password": "123456",
       "phoneNumber": "8878787787"
   }) */
  };
  return (
    <>
      <div
        className=" bg-black opacity-70 h-full w-full fixed top-0"
        onClick={() => closeModal()}
      />
      
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={sendEmail}
        validationSchema={validationForm}
      >
        <Form className="flex flex-col items-center justify-center w-11/12 bg-gradient-form sm:w-96 h-full sm:h-5/6 m-auto rounded-2xl right-0 sm:top-0 bottom-0 left-0 fixed">
          <p
            onClick={closeModal}
            className=" text-white text-xl self-end sm:mt-0 mr-5 cursor-pointer hover:opacity-50"
          >
            X
          </p>
          <h5 className="text-2xl text-white -mt-4">Regístrate</h5>
          <Field
            className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-4"
            type="text"
            name="firstName"
            placeholder="Nombre"
          />
          <ErrorMessage name="firstName" />
          <Field
            className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-3"
            type="text"
            name="lastName"
            placeholder="Apellido"
          />
          <ErrorMessage name="lastName" />
          <Field
            className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-3"
            type="email"
            name="email"
            placeholder="Correo electrónico"
          />
          <ErrorMessage name="email" />
          <Field
            className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-3"
            type="number"
            name="phoneNumber"
            placeholder="Celular"
          />
          <ErrorMessage name="phoneNumber" />
          <Field
            className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-3"
            type="password"
            name="password"
            placeholder="Contraseña"
          />
          <ErrorMessage name="password" />
          <Field
            className="w-8/12 rounded-lg p-1 shadow-black shadow-md mt-3"
            type="password"
            name="confirmPassword"
            placeholder="Reingresa tu Contraseña"
          />
          <ErrorMessage name="confirmPassword" />
          <input
            onClick={sendEmail}
            type="submit"
            className="bg-sky-600 sm:bg-transparent  rounded-3xl p-2 w-60 sm:w-72 text-white sm:hover:bg-sky-600 font-semibold cursor-pointer mt-1"
            value="Registrarme"
          />
        </Form>
      </Formik>
    </>
  );
};

export default FormRegister;
