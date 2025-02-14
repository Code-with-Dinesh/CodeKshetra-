// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { setJobs } from '../store/jobSlice';
// import { addJob } from '../store/jobSlice';
// import { deleteJob } from '../store/jobSlice';
import React from "react";
const RecuratorDashboard = () => {
//   const dispatch = useDispatch();
//   const { jobs } = useSelector((state) => state.job);

//   const [jobTitle, setJobTitle] = useState('');
//   const [jobDescription, setJobDescription] = useState('');
//   const [jobLocation, setJobLocation] = useState('');
//   const [jobSalary, setJobSalary] = useState('');

//   useEffect(() => {
//     // Fetch job postings from API
//     fetch('/api/jobs')  // Replace with your actual API endpoint
//       .then((res) => res.json())
//       .then((data) => dispatch(setJobs(data)));
//   }, [dispatch]);

//   const handleAddJob = (e) => {
//     e.preventDefault();

    // const newJob = {
    //   id: Math.random(),  // In a real-world app, the id should come from the database
    //   title: jobTitle,
    //   description: jobDescription,
    //   location: jobLocation,
    //   salary: jobSalary,
    // };

//     dispatch(addJob(newJob));
//     console.log(newJob)
//     // Reset form
//     setJobTitle('');
//     setJobDescription('');
//     setJobLocation('');
//     setJobSalary('');
//   };

//   const handleDeleteJob = (id)=>{
//     dispatch(deleteJob(id))
    
//     console.log("job is delete successfully")
//   }

return (
    <div className="mx-auto p-10 bg-gradient-to-br bg-black text-white shadow-xl  grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Section */}
      <div>
        <h1 className="text-4xl font-extrabold text-center text-purple-400 mb-8 drop-shadow-lg">
          Recruiter Dashboard
        </h1>
  
        {/* Job Listings */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Job Listings</h2>
          <ul className="space-y-5">
            {/* {jobs.map((job) => ( */}
            <li className="p-5 bg-gray-800/90 backdrop-blur-lg border border-gray-700 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-xl font-semibold text-purple-400">Software Engineer</h3>
              <p className="text-gray-400">Build scalable web applications.</p>
              <p className="text-gray-500">Location: Remote</p>
              <p className="text-gray-300">Salary: $90,000</p>
              <button className="mt-4 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition duration-200">
                Delete Job
              </button>
            </li>
            {/* ))} */}
          </ul>
        </div>
  
        {/* Add New Job */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Add New Job</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Job Title"
                required
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 text-white shadow-md"
              />
            </div>
            <div>
              <textarea
                placeholder="Job Description"
                required
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 text-white shadow-md"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Job Location"
                required
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 text-white shadow-md"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Salary"
                required
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 text-white shadow-md"
              />
            </div>
            <button className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 transition duration-200 shadow-lg">
              Add Job
            </button>
          </form>
        </div>
      </div>
  
      {/* Right Section - Recruiter Info */}
      <div className="bg-gray-800/90 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Recruiter Info</h2>
        <p className="text-gray-400 mb-4">
          Welcome to the Recruiter Dashboard! Here you can manage job listings and add new job positions for your company.
        </p>
        <p className="text-gray-400">
          As a recruiter, you'll be able to view applicants, track your postings, and manage open job roles in one central place. Keep your job posts updated regularly to attract the best candidates!
        </p>
      </div>
    </div>
  );
  
};

export default RecuratorDashboard;