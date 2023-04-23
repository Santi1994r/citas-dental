import axios from "axios";

const exportLinks = () => {

  const apiUrl = "https://dentist-app.onrender.com"

  const linkLogin = async (form) => {
    let data;
    await axios
      .post(`${apiUrl}/users/login`, form)
      .then(async (params) => (data = params.data))
      .catch((error) => console.log(error));
    if (data) {
      await localStorage.setItem("tokenDentApp", JSON.stringify(data.token));
      await localStorage.setItem("userDentApp", JSON.stringify(data.user));
    }
    return data;
  };
  const linkRegister = async (form) => {
    let data;
    await axios
      .post(`${apiUrl}/users`, form)
      .then(
        async (params) =>
        (data = await linkLogin({
          email: form.email,
          password: form.password,
        }))
      )
      .catch((error) => console.log(error));
    return data;
  };

  /* const linkReservation = async (form) => {
    let data;
    await axios
      .post("https://dent-app-production.up.railway.app/appointments", form)
      .then(
        async (params) => {data = await params.data}
      )
      .catch((error) => console.log(error));
      console.log(data);
    return data;
  }; */


  const linkReservation = async (form) => {
    const tokken = JSON.parse(localStorage.getItem("tokenDentApp"));
    let headers = {
      "Authorization": `Bearer ${tokken}`
    }
    let data;
    await axios
      .post(`${apiUrl}/appointments`, form, { headers })
      .then(async (params) => (data = await params.data))
      .catch((error) => console.log(error));
    console.log(data);
    return data;
  };

  const getUsersWithAppointments = async () => {
    const tokken = JSON.parse(localStorage.getItem("tokenDentApp"));
    let headers = {
      "Authorization": `Bearer ${tokken}`
    }


    let data;
    await axios
      .get(`${apiUrl}/users/appointments`, { headers })
      .then(async (params) => { data = params.data })
      .catch(error => console.log(error));
    return data
  };

  const deleteAppointment = async (id) => {
    const tokken = JSON.parse(localStorage.getItem("tokenDentApp"));
    let headers = {
      "Authorization": `Bearer ${tokken}`
    }
    let data;
    await axios
      .delete(`${apiUrl}/appointments/${id}`, { headers })
      .then(async params => data = params.data)
      .catch(error => console.log(error));
    return data;
  };

  return {
    linkLogin,
    linkRegister,
    linkReservation,
    getUsersWithAppointments,
    deleteAppointment
  };
};

export default exportLinks;
