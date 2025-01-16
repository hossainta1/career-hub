import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/LocalStorage";

const AppliedJobs = () => {

  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] =useState([]);

  const handleJobFilter = filter => {
        if(filter === 'all'){
        setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter( job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }

        else if (filter === 'Onsite'){
            const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onSiteJobs);
        }
  }

  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      //   const jobApplied = jobs.filter((job) => storedJobsIds.includes(job.id));
      const jobsApplied = [];
      for (const id of storedJobsIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-2xl">This is Applied Jobs: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleJobFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobFilter('Onsite')}>
            <a>On site</a>
          </li>
        </ul>
      </details>

      {
      displayJobs.map((job) => (
        <li key={job.id}>
          <span>
            {job.job_title} {job.company_name} : {job.remote_or_onsite}
          </span>
        </li>
      ))
      
      }
    </div>
  );
};

export default AppliedJobs;
