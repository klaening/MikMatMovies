import React, { useState } from "react";
import "./JobOffers.css";
import json from "./jobs.json";

const JobOffers = () => {
  return (
    <div>
      <h1>Job Offers</h1>

      {json.map((job) => (
        <div>
          <ul>
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
