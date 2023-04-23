import { useEffect, useState } from "react";
import { addDays, addMonths, getDay, setHours, setMinutes } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FadeLoader from "react-spinners/FadeLoader";
import Swal from 'sweetalert2'
import exportLinks from "../../links/exportLinks";
import axios from "axios";

const DatePickerRes = () => {
  const now = new Date();
  const [startDate, setStartDate] = useState(now);
  const [startTime, setStartTime] = useState(setHours(setMinutes(new Date(), 0), 9),);
  const [viewSelection, setViewSelection] = useState(false);
  const [hiddenBtn, setHiddenBtn] = useState(false);
  const [alertConfirm, setAlertConfirm] = useState(false);

  const { linkReservation } = exportLinks();
  const handleDate = (date) => {
    return setStartDate(date);
  };
  const handleTime = (date) => {
    return setStartTime(date);
  };
  const viewCite = (option) => {
    setViewSelection(true);
    setHiddenBtn(!hiddenBtn);
    if (option === "cancel") {
      setViewSelection(!viewSelection);
    }
  };
  const messageConfirm = () => {
    Swal.fire({
      icon: 'success',
      title: 'Cita confirmada',
      /* text: 'Te veo pronto!', */
    })
  }
  /*  const setTime = () => {
     useEffect(() => {
       setTimeout(() => {
         setLoading(!loading);
       }, 3000)
     }, [])
     
     
   } */

  const sendReservation = () => {
    setViewSelection(!viewSelection);
    /* setLoading(!loading); */
    const reservationUser = {
      day: startDate.toLocaleDateString(),
      hour: startTime.getHours().toString(),
    };
    /*  console.log(reservationUser);
       setTimeout(() => {
         setLoading(false);
         setAlertConfirm(true)
       }, 3000)
  
     return reservationUser; */
    linkReservation(reservationUser)
  };

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  const [excludeTimesDate, setExcludeTimesDate] = useState([]);

  const [dates, setDates] = useState([]);

  useEffect(() => {
    const tokken = JSON.parse(localStorage.getItem('tokenDentApp'));
    console.log(tokken);
    let headers = {
      Authorization: `Bearer ${tokken}`,
    };
    const init = async () => {
      await axios
        .get(
          'https://dent-app-production.up.railway.app/appointments',
          {
            headers,
          }
        )
        .then((res) => {
          setDates(res.data);
        });
    };
    init();
  }, []);


  useEffect(() => {
    const day = startDate.toLocaleDateString();
    const isDay = dates?.filter((item) => item.day === day);
    const hours = isDay.map((item) =>
      setHours(setMinutes(new Date(), 0), item.hour)
    );
    setExcludeTimesDate(hours);
  }, [startDate, startTime]);


  return (
    <div className="flex flex-col items-center w-8/12 m-auto">
      <div className=" mb-5">
        <DatePicker
          className=" w-full h-10 text-center rounded-xl"
          selected={startDate}
          onChange={handleDate}
          minDate={new Date()}
          maxDate={addMonths(new Date(), 1)}
          filterDate={isWeekday}



          // showDisabledMonthNavigation
          placeholderText="Elije una fecha"
          dateFormat="dd/MM/yyyy"
        /* excludeDateIntervals={[{start: subDays(new Date(), 5), end: addDays(new Date(), 5) }]} */
        />
      </div>

      <div>
        <DatePicker
          className=" w-full h-10 text-center rounded-xl"
          selected={startTime}
          onChange={(date) => handleTime(date)}
          showTimeSelect
          showTimeSelectOnly

          minTime={new Date().setHours(9, 0, 0)}
          maxTime={new Date().setHours(19, 0, 0)}

          excludeTimes={[
            ...excludeTimesDate,
            setHours(setMinutes(new Date(), 0), 12),
            setHours(setMinutes(new Date(), 0), 13),
          ]}

          timeIntervals={60}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText="Elije un horario"
        />
      </div>

      <h1 className="my-5 text-2xl">
        {viewSelection
          ? `Has elegido el dia ${startDate.toLocaleDateString()} a las ${startTime.getHours()} hs`
          : null}
      </h1>
      <button
        onClick={() => viewCite()}
        className={`bg-blue-blue hover:bg-blue-sky text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline text-lg ${hiddenBtn ? "hidden" : null
          }`}
        type="button"
      >
        Reservar cita
      </button>
      <div className="flex flex-col">
        <div className="flex gap-x-5">
          <button
            /* onClick={() => viewCite("cancel")} */
            className={`${hiddenBtn ? null : "hidden"
              } bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline text-lg`}
            type="button"
          >
            Cancelar
          </button>

          <button
            onClick={sendReservation}
            className={`${hiddenBtn ? null : "hidden"
              } bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline text-lg`}
            type="submit"
          >
            Confirmar
          </button>
        </div>

        <div className="mt-5">
          <FadeLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        {
          alertConfirm ? messageConfirm() : null
        }
      </div>
    </div>
  );
};

export default DatePickerRes;

/* Excludes times */
/* () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      excludeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
}; */

/* Exclude date intervals */
/* () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
    selected={startDate}
    onChange={date => setStartDate(date)}
    excludeDateIntervals={[{start: subDays(new Date(), 5), end: addDays(new Date(), 5) }]}
    placeholderText="Select a date other than the interval from 5 days ago to 5 days in the future"
    />
  );
  }; */

/* Filter dates */
/* () => {
  const [startDate, setStartDate] = useState(null);
  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      filterDate={isWeekday}
      placeholderText="Select a weekday"
    />
  );
}; */

/* Filter times */
/* () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9)
  );
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      filterTime={filterPassedTime}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
}; */

/* Include times */
/* () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      includeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
}; */

/* Select time only */
/* () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
}; */
