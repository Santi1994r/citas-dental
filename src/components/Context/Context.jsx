import { createContext, useState } from 'react'

const GlobalContext = createContext()

const Context = ({ children }) => {
  const [openFormLogin, setOpenFormLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)
  const [alertEmail, setAlertEmail] = useState(false);
  const [openReservation, setOpenReservation] = useState(false);
  const [openCites, setOpenCites] = useState(false);


  return (
    <GlobalContext.Provider value={{openFormLogin, setOpenFormLogin, openRegister, setOpenRegister, alertEmail, setAlertEmail, openReservation, setOpenReservation, openCites, setOpenCites}}>
        {children}
    </GlobalContext.Provider>    
  )
}

export {Context, GlobalContext}