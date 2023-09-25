import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
function OrderOnline({ className }) {
  const [data, setData] = useState(null);
  let { authToken } = useContext(AuthContext);
  let getOrdered = async (e) => {
    let response = await fetch(
      "http://127.0.0.1:8000/api/booking/tables/user/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authToken?.access),
        },
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      setData(data);
    }
    console.log(response.body);
  };
  useEffect(() => {
    // Use the fetch API to make a GET request
    getOrdered();
  }, []);
  return (
    <div className={"container"}>
      <h1>Menu</h1>
      {data ? (
        <ol>
          {data.map((item) => (
            <li key={item.id}>
              {item.booking_date} Geust : {item.no_of_guests} Time : {item.time}
              :00
            </li>
          ))}
        </ol>
      ) : (
        <h2>Loading .... </h2>
      )}
    </div>
  );
}

export default OrderOnline;
