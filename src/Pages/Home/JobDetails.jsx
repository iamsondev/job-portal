import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
  const job = useLoaderData();
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Header section */}
      <div className="max-w-6xl mx-auto p-6 mt-10 bg-white shadow-md rounded-xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-6">
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-24 h-24 object-contain rounded-md shadow"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-500">{company} • {location}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">{jobType}</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">{category}</span>
              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">Deadline: {applicationDeadline}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Salary</h2>
              <p className="text-gray-700">
                {salaryRange.min.toLocaleString()} – {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">HR Contact</h2>
              <p className="text-gray-700">Name: {hr_name}</p>
              <p className="text-gray-700">Email: {hr_email}</p>
            </div>
          </section>
        </div>
      </div>

      {/* Sticky Apply Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t px-6 py-4 shadow-inner flex justify-center md:justify-between items-center">
        <div className="hidden md:block text-gray-700 font-medium">
          Interested in this position? Submit your application today!
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg transition duration-200">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
