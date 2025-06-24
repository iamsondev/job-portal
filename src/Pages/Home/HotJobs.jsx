import React, { use } from 'react';
import JobsCard from './JobsCard';

const HotJobs = ({jobsPromise}) => {
  const jobs = use(jobsPromise);

  return (
    <div>
           <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                 {
                  jobs.map(job=> <JobsCard key={job._id} job={job}></JobsCard>)
                 }
           </div>
    </div>
  );
};

export default HotJobs;