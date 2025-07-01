import { div, form } from 'motion/react-client';
import React from 'react';
import useAuth from '../../useAuth/useAuth';

const AddJob = () => {

  const {user} = useAuth()

  const handleAddJob = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
     
    // process salaryRange
    const {min, max, currency, ...newJob} = data;
    newJob.salaryRange = {min, max, currency}

    // process requirements
    const requirementsString = newJob.requirements;
    
    const requirementsIndiscipline = requirementsString.split(',')
    const requirementsDiscipline = requirementsIndiscipline.map(req => req.trim());
    newJob.requirements = requirementsDiscipline;

    // process responsibility
    newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());

    console.log(newJob)



  }
  return (
    <div>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Please Add Your Job</legend>

          <label className="label">Title</label>
          <input type="text" className="input" placeholder="title" />

          <label className="label">Company Name</label>
          <input type="text" name='name' className="input" placeholder="Company Name" />

          <label className="label">Location</label>
          <input type="text" name='location' className="input" placeholder="Company location" />
          <label className="label">Company logo</label>
          <input type="text" name='logo' className="input" placeholder="Company logo" />
        </fieldset>

        {/* job type */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Types of jobs</legend>
          <div className="filter">
            <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
            <input className="btn" type="radio" name="jobType" value='On-Site' aria-label="On-Site" />
            <input className="btn" type="radio" name="jobType" value='Remote' aria-label="Remote" />
            <input className="btn" type="radio" name="jobType" value='Hybrid' aria-label="Hybrid" />
          </div>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select defaultValue="Pick a color" className="select" name='category'>
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* application deadline */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" name="date" className='input' id="" />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary range</legend>

          <div className='grid lg:grid-cols-3 gap-3'>
            <div>
              <label className="label">Minimum Salary</label>
              <input type="text" name='min' className="input" placeholder="minimum salary" />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input type="text" name='max' className="input" placeholder="maximum salary" />
            </div>

            <div>
              <label className="label">select Currency</label>
              <select defaultValue="Pick a color" className="select" name='currency'>

                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>

        </fieldset>

        {/* job description */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea className="textarea textarea-ghost" name='description' placeholder="JOb Description"></textarea>

        </fieldset>

        {/* job requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea className="textarea textarea-ghost" name='requirements' placeholder="Job requirements (separated by coma)"></textarea>

        </fieldset>

        {/* job responsibilities */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea className="textarea textarea-ghost" name='responsibilities' placeholder="Job requirements (separated by coma)"></textarea>

        </fieldset>

        {/*  Hr related info*/}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input type="text"name='hr_name' className="input" placeholder="title" />

          <label className="label">HR email</label>
          <input type="email" name='hr_email' defaultValue={user.email} className="input" placeholder="Company Name" />

          <label className="label">Location</label>
          <input type="text" name='location' className="input" placeholder="Company location" />
      
        </fieldset>
        <input className='btn w-full bg-amber-600 m-5 ' type="submit" value="Add JOb" />
      </form>
    </div>
  );
};

export default AddJob;