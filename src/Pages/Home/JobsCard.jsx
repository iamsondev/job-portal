import React from 'react';

const JobsCard = ({ job }) => {
  const { title, location, jobType, company_logo, category } = job;

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200">
      {/* Header with gradient and logo */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-40 flex items-center justify-center p-4">
        <img
          src={company_logo}
          alt={`${title} logo`}
          className="max-h-full max-w-full object-contain drop-shadow-md"
        />
      </div>

      {/* Body Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{location}</p>

        <div className="flex gap-2 flex-wrap mt-3">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
            {jobType}
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-100 text-pink-700">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
