import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../useAuth/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';


const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  console.log(id, user)

  const handleJobApply = e => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin, github, resume);

    const application = {
      id,
      applicant: user.email,
      linkedin,
      github,
      resume
    }

    axios.post('http://localhost:5000/applications', application)
      .then(res => {
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(error => {
        console.log(error)
      })

  }


  return (
    <div>
      <h1 className='text-3xl '>Apply For This Job</h1>
      <form onSubmit={handleJobApply}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


          <label className="label">Linked In</label>
          <input type="url" name='linkedin' className="input" placeholder="LinkedIn Profile url" />

          <label className="label">Github</label>
          <input type="url" name='github' className="input" placeholder="Github Link url" />

          <label className="label">Resume</label>
          <input type="url" name='resume' className="input" placeholder="Resume Link" />
          <input className='btn' type="submit" value="Submit" />
        </fieldset>

      </form>
    </div>
  );
};

export default JobApply;