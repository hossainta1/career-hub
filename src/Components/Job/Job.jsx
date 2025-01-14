import React from "react";
import { GoLocation } from "react-icons/go";
import { MdOutlineAttachMoney } from "react-icons/md";

const Job = ({ job }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary,   } = job;
  return (
    <div className="card card-compact bg-base-100">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
        </div>
        <div className=" flex mt-4">
          <h2 className="flex mr-4"><GoLocation className="text-2xl mr-2"></GoLocation>{location},</h2>
          <h2 className="flex">
           <MdOutlineAttachMoney className="text-2xl"></MdOutlineAttachMoney>Salary: {salary}
          </h2>
        </div> 
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
