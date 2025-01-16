import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../utility/LocalStorage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  
  const handleApplyJob = () => {
    saveJobApplication(idInt)
    toast('You have appy this job successfully')
  }
  return (
    <div>
      <Helmet>
        <title>
          Career Hub | Job Details
        </title>
      </Helmet>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="text-2xl">Details Comming Here</h2>
          <h2>Job Details of: {job.job_title}</h2>
          <p>{job.company_name}</p>
        </div>
        <div className="border">
          <h2 className="text-xl">Side things</h2>
          <button onClick={handleApplyJob} className="btn btn-success w-full">Apply Now</button>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default JobDetails;
