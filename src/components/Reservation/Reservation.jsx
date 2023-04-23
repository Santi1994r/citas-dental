import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import DatePickerRes from "../DatePicker/DatePicker";

const Reservation = () => {
  const { openReservation, setOpenReservation } = useContext(GlobalContext);
  const userSignUp = JSON.parse(localStorage.getItem("userDentApp"));

  const closeModalReservation = () => {
    setOpenReservation(!openReservation);
  };
  return (
    <section>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-cyan-500 w-w-modal-reservation h-h-modal-reservation m-auto z-50 rounded-xl">
        <div className="flex w-full">
          {/* <div className="hidden sm:flex relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src="./images/reservation/dentistas.avif"
                className=""
              />
            </div>
          </div> */}
          <div className="hidden sm:flex w-6/12">
            <div className="flex flex-col justify-center h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src="./images/reservation/dentistas.avif"
                className=""
              />
            </div>
          </div>

          <div className="sm:w-6/12  bg-gray-100">
            {/* <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span> */}

            <div className="h-full w-full flex flex-col items-center">
              <div className="w-full flex justify-end  ">
                <p
                  onClick={closeModalReservation}
                  className="mr-5 mt-4 text-2xl text-black hover:text-gray-400 cursor-pointer"
                >
                  X
                </p>
              </div>
              <h6 className="sm:mt-10 text-center">
                <span className="text-black text-2xl sm:text-3xl font-bold ml-4 mr-1">
                  Bienvenido/a
                </span>{" "}
                <span className="text-blue-blue text-2xl sm:text-3xl font-bold ml-1 mr-2">
                  {userSignUp.firstName.charAt(0).toUpperCase() +
                    userSignUp.firstName.slice(1)}
                </span>
                <span className="text-black text-2xl sm:text-3xl font-bold ml-1 mr-2">
                  a
                </span>
                <span className="text-blue-sky text-2xl sm:text-3xl font-bold ml-2 mr-2">
                  Citas
                </span>
                <span className="text-blue-blue text-2xl sm:text-3xl font-bold">
                  Dental
                </span>
              </h6>
              <div className="mt-5 h-96 w-full flex flex-col items-center">
                <DatePickerRes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

/* <section className="fixed top-0 bottom-0 left-0 right-0 bg-gray-300 w-w-modal-reservation h-h-modal-reservation m-auto z-50 rounded-xl">
      <div className="w-full flex justify-end  ">
        <p onClick={closeModalReservation} className="mr-5 mt-4 text-2xl text-black hover:text-gray-400 cursor-pointer">
          X
        </p>
      </div>
      <h6 className=" text-center">
      <span className="text-black text-2xl sm:text-3xl font-bold ml-4 mr-1">
          Bienvenido
        </span> <span className="text-blue-blue text-2xl sm:text-3xl font-bold ml-1 mr-2">
          {userSignUp.firstName.charAt(0).toUpperCase() + userSignUp.firstName.slice(1)}
        </span>
        <span className="text-black text-2xl sm:text-3xl font-bold ml-1 mr-2">
          a
        </span>
        <span className="text-blue-sky text-2xl sm:text-3xl font-bold ml-2 mr-2">
          Citas
        </span>
        <span className="text-blue-blue text-2xl sm:text-3xl font-bold">
          Dental
        </span>
      </h6>
      <div className="mt-5 h-96 w-full flex flex-col items-center">
        <DatePickerRes />
        
      </div>
    </section> */
