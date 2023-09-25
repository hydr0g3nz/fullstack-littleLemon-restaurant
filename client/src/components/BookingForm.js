import React, { useContext, useEffect } from "react";
import { useState } from "react";
import AuthContext from "../context/AuthContext";
import TablePlan from "../components/TablePlan";

function BookingForm({ className, availableTimes, submitForm, updateTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState("1");
  const [occasion, setOccation] = useState("");
  const [tableSelected, setTableSelected] = useState("");
  const [tableReserved, setTableReserved] = useState([]);
  const { user } = useContext(AuthContext);
  const clearForm = () => {
    setTime("");
    setGuest("1");
    setOccation("");
    console.log("timelist after clear", availableTimes);
  };
  const getIsFormValid = () => {
    return user && date && time !== "" && guest > 0 && occasion !== "" && tableSelected!=='';
  };

  useEffect(() => {
    // const newTime = availableTimes.filter((time) => {
    //   return Math.random() > 0.5;
    // });
    const currentDate = new Date();

    // Extract the date components (year, month, and day)
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
    const day = currentDate.getDate();

    // Create a formatted date string (e.g., "YYYY-MM-DD")
    const ddate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
    console.log("b", ddate);
    setDate(ddate);
    updateTimes(ddate);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    await submitForm({ date, time, guest, occasion });
    await clearForm();
    await updateTimes(date);
  };
  const timesList = [];

  for (let i = 17; i <= 21; i++) timesList.push(i);
  return (
    <div className="table-reserve-row">
      {/* <h1>ReserveTable page</h1>
      <p>date : {date}</p>
      <p>time : {time}</p>
      <p>num guest : {guest}</p>
      <p>occasion : {occasion}</p>
         { getIsFormValid() ? <p>true</p>:<p>false</p> } */}
      <div className="table-reserve-left">
        <form
          style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          onSubmit={handleSubmit}
        >
          <label className="form-label" htmlFor="res-date">
            Choose date
          </label>
          <input
            className="form-control "
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              updateTimes(e.target.value);
            }}
          />
          <label className="form-label" htmlFor="res-time">
            Choose time
          </label>
          <select
            id="res-time "
            className="form-select"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          >
            <option value="">Select time</option>
            {date
              ? timesList.map((time) => {
                  if (availableTimes.includes(time))
                    return (
                      <option disabled>
                        {time}:00 <span>Reserved</span>
                      </option>
                    );
                  else return <option>{time}:00</option>;
                })
              : null}
          </select>
          <label className="form-label" htmlFor="guests">
            Number of guests
          </label>
          <input
            className="form-control"
            type="number"
            placeholder={guest}
            min="1"
            max="10"
            id="guests"
            value={guest}
            onChange={(e) => {
              setGuest(e.target.value);
            }}
          />
          <label className="form-label" htmlFor="occasion">
            Occasion
          </label>
          <select
            id="occasion"
            className="form-select"
            value={occasion}
            onChange={(e) => {
              setOccation(e.target.value);
            }}
          >
            <option value="">Select Occasion</option>

            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          
          <input
            className="btn"
            type="submit"
            value="Make Your reservation"
            disabled={!getIsFormValid()}
          />
          
          {user == null && (
            <p style={{ color: "red" }}>You must Login for reservation</p>
          )}
        </form>
      </div>
      <div className="table-reserve-right">
      <label>Select  Table : <strong>{tableSelected}</strong></label>
        <div className="table-reserve-grid">
          <TablePlan
            normalCol={"black"}
            hoverCol={"#f4ce14"}
            inActiveCol={"darkgrey"}
            tableList={["S1", "S2", "M1", "L1"]}
            tableSelected={tableSelected}
            setTableSelected={setTableSelected}
          ></TablePlan>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
