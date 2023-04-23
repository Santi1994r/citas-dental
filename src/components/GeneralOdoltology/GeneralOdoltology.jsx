const GeneralOdoltology = () => {
    return (
      <div>
          <h5 className="text-center text-5xl font-bold pt-20 pb-5">Odontología General</h5>
          <div className=" w-full flex flex-col sm:flex-row mt-10 mb-20">
              <div className="w-full sm:w-6/12 flex justify-end items-start h-full">
                  <img className=" w-11/12 m-auto sm:w-9/12 rounded-3xl sm:mr-8" src="./images/generalOdol/consultorio.svg" alt="" />
              </div>
              <div className="w-full sm:w-6/12">
                  <p className=" text-2xl w-full sm:w-9/12 px-5">Brindamos la atención preventiva esencial para toda su familia y ofrecemos los servicios dentales avanzados necesarios para solucionar problemas dentales comunes. Nuestros servicios de odontología general incluyen:</p>
                  <div className="flex flex-col mt-8">
                      <div className=" flex items-center mb-5 px-5">
                          <img src="./images/generalOdol/check-ok.svg" alt="" />
                          <p className=" text-2xl">Chequeos dentales y Limpieza</p>
                      </div>
                      <div className="flex items-center mb-5 px-5">
                          <img src="./images/generalOdol/check-ok.svg" alt="" />
                          <p className=" text-2xl">Extracciones dentales</p>
                      </div>
                      <div className="flex items-center px-5">
                          <img src="./images/generalOdol/check-ok.svg" alt="" />
                          <p className=" text-2xl">Mantenimiento Periódico</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default GeneralOdoltology
