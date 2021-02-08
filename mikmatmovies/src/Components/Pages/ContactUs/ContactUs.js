import React from "react";
import "./ContactUs.css";
import staffJson from "./staff.json";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact us</h1>

      <div className="staff">
        {staffJson.map((staff) => (
          <div>
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
