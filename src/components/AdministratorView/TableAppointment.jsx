import React, { useEffect, useState } from 'react';
import exportLinks from "../../links/exportLinks";



const TableAppointment = ({ listAppointments, deleteAppointment }) => {
    const [items, setItems] = useState(null)

    useEffect(() => {
        const user = listAppointments.appointments.map(item =>
            <tr >
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {listAppointments.firstName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.day}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.hour}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {listAppointments.email}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                    <a
                        onClick={() => deleteAppointment(item.id)}
                        href="#"
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                        Eliminar
                    </a>
                </td>
            </tr>
        )
        setItems(user);
    }, [listAppointments])

    return (
        <>
            {items &&
                items
            }
        </>
    );
};

export default TableAppointment;