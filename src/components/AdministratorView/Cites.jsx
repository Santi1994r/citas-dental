import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/Context";
import TableAppointment from "./TableAppointment";
import exportLinks from "../../links/exportLinks";


const Cites = () => {
    const { getUsersWithAppointments, deleteAppointment } = exportLinks();
    const { openCites, setOpenCites } = useContext(GlobalContext)
    const [list, setList] = useState(null);
    const closeModalReservation = () => {
        setOpenCites(!openCites)
    };

    const init = async () => {
        const list = await getUsersWithAppointments();
        const listAppointments = list.map((item) =>
            <TableAppointment
                key={item.id}
                listAppointments={item}
                deleteAppointment={deleteApp}
            />
        );
        console.log(list);
        setList(listAppointments);
    };

    const deleteApp = async (id) => {
        const resul = await deleteAppointment(id);
        init();
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <section className="fixed top-0 bottom-0 left-0 right-0 bg-gray-300 w-w-modal-reservation h-h-modal-reservation m-auto z-50 rounded-xl">
            <div className="w-full flex flex-col justify-end  ">
                <p
                    onClick={closeModalReservation}
                    className="mr-5 mt-4 text-2xl text-black flex self-end hover:text-gray-400 cursor-pointer"
                >
                    X
                </p>

                <div className="max-w-4xl mx-auto  ">
                    <table className="w-full divide-y-2 divide-sky-700 text-lg  text-center overflow-y-auto">
                        <thead className="">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Nombre
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Fecha
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Hora
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Email
                                </th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-sky-700 " >
                            {list &&
                                list
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </section>
    );
};

export default Cites;
