import React, { useState } from "react";
import "./JobOffers.css";
import "../About/About.css";
import json from "./jobs.json";

const JobOffers = () => {
  return (
    <div className="about_main">
      <h1>Job Offers</h1>

      {json.map((job) => (
        <div>
          <ul className="job_list">
            <li>
              <h2>{job.jobTitle}</h2>
              <p>{job.description}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default JobOffers;
