import Popup from "../components/Popup/Popup"
import React from "react";
const BookingForm = ({title,description,closeHandle})=>{

    return (
        <>
        <Popup title={title} description={description} closeHandle={closeHandle}></Popup>
        </>
    )
}
export default BookingForm;