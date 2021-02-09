import React from "react";
import "./ContactUs.css";
import staffJson from "./staff.json";

const ContactUs = () => {
  return (
    <div className="contact_us_main">
      <h1>Contact us</h1>

      <div className="staff_main">
        {staffJson.map((staff) => (
          <div className="staff" key={staff.id}>
            <h2>{staff.name}</h2>
            <div className="description">
              {staff.img ? (
                <img src={staff.img} alt="Staff Image" />
              ) : (
                <p>No image available</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
