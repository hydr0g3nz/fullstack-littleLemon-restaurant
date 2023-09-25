import { useState, useContext } from "react";
import ConfirmedBooking from "../components/ConfirmedBooking";

import BookingForm from "../components/BookingForm";
import AuthContext from "../context/AuthContext";
import "./reserveTable.css";
function ReserveTable({ className, children }) {
  const [isConfirmSubmit, setConfirmSubmit] = useState(false);
  const [availableTimes, setTimes] = useState([]);
  const { authToken } = useContext(AuthContext);
  const submitForm = async (data) => {
    let response = await fetch("http://127.0.0.1:8000/api/booking/tables/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authToken?.access),
      },
      body: JSON.stringify({
        booking_date: data.date,
        no_of_guests: Number(data.guest),
        time: Number(data.time.substring(0, 2)),
      }),
    });
    console.log(response);
  };
  const closeHandle = () => {
    setConfirmSubmit(false);
  };
  const updateTimes = (date) => {
    fetch(`http://127.0.0.1:8000/api/booking/tables/?date=${date}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + String(authToken.access),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let times = data.map((time) => time.time);
        console.log("f", times);
        setTimes(times);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      {isConfirmSubmit ? (
        <ConfirmedBooking
          closeHandle={closeHandle}
          title="Reservation Completed!"
          description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
        ></ConfirmedBooking>
      ) : null}

      
          <BookingForm
            availableTimes={availableTimes}
            updateTimes={updateTimes}
            submitForm={submitForm}
          ></BookingForm>
        
        
      
    </>
  );
}

export default ReserveTable;
