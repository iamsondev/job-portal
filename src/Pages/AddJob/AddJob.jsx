import { div, form } from 'motion/react-client';
import React from 'react';

const AddJob = () => {
  return (
    <div>
      <form>
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
            <input className="btn" type="radio" name="jobType" aria-label="On-Site" />
            <input className="btn" type="radio" name="jobType" aria-label="Remote" />
            <input className="btn" type="radio" name="jobType" aria-label="Hybrid" />
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
              <input type="text" name='minimum salary' className="input" placeholder="minimum salary" />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input type="text" name='maximum salary' className="input" placeholder="maximum salary" />
            </div>

            <div>
              <label className="label">select Currency</label>
              <select defaultValue="Pick a color" className="select" name='category'>

                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>

        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Please Add Your Job</legend>

        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;