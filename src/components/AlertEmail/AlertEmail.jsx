import React from "react";
import { VscError } from 'react-icons/vsc';
import { HiOutlineCheckCircle } from 'react-icons/hi';


const AlertEmail = ({icon, text1, text2}) => {
  return (
    <div role="alert" className={`rounded-xl border ${icon ? 'bg-green-900' : ' bg-red-700'}  border-gray-100 p-4 shadow-xl`}>
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          {
            icon ? <HiOutlineCheckCircle className=' h-8 w-10 text-green-300' /> : <VscError className=" h-8 w-10 text-white" />
          }          
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-white">
            {`${icon ? 'E-mail enviado con éxito' : 'Error'}`}
          </strong>

          <p className="mt-1 text-sm text-white">
          {`${icon ? 'Gracias por tu mensaje' : 'No se puede enviar el mail vacío ó incompleto'}`}
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertEmail;
