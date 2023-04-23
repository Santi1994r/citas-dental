import React, { useEffect, useState } from "react";
import { HiUser } from "react-icons/hi";
import Cites from "../AdministratorView/Cites";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const MainUser = ({ setTokken }) => {
  const [openMainUser, setOpenMainUser] = useState(false);
  const { openCites, setOpenCites } = useContext(GlobalContext)


  const openMain = () => {
    setOpenMainUser(!openMainUser);
  };

  const tokken = localStorage.getItem("tokenDentApp");
  const userSignUp = JSON.parse(localStorage.getItem("userDentApp"));

  const closeSesion = async () => {
    await localStorage.removeItem("tokenDentApp");
    await localStorage.removeItem("userDentApp");
    setTokken(null);
    setOpenMainUser(!openMainUser);
  };
  console.log(tokken);
  useEffect(() => { }, [openMainUser]);
  const viewCites = () => {
    setOpenMainUser(!openMainUser);
    setOpenCites(!openCites)
  };

  return (
    <>
      {tokken && (
        <div className="relative">
          <button
            onClick={openMain}
            type="button"
            className=" flex shrink-0 items-center rounded-lg transition"
          >
            <span className="sr-only">Menu</span>
            <HiUser className=" text-2xl text-green-600" />

            <p className="ml-2 hidden text-left text-xs sm:block">
              <strong className="block text-lg font-medium">{`${userSignUp.firstName} ${userSignUp.lastName}`}</strong>
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            className={`${openMainUser ? "null" : "hidden"
              } absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg`}
            role="menu"
          >
            <div className="p-2">
              <button
                onClick={viewCites}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-black hover:bg-sky-300"
              >
                Ver citas
              </button>
              <button
                onClick={closeSesion}
                className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
              >
                Cerrar sesión
              </button>

            </div>
          </div>
          {
            openCites ? <Cites /> : null
          }
        </div>
      )}
    </>
  );
};

export default MainUser;
