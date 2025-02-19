import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs, deleteJobs, addJobs } from '../redux/JobSlice';

const RecuratorDashboard = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.job);

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobSalary, setJobSalary] = useState('');

  useEffect(() => {
    // Fetch job postings from API
    fetch('/api/jobs')  // Replace with your actual API endpoint
      .then((res) => res.json())
      .then((data) => dispatch(setJobs(data)));
  }, [dispatch]);

  const handleAddJob = (e) => {
    e.preventDefault();

    const newJob = {
      id: Math.random(),  // In a real-world app, the id should come from the database
      title: jobTitle,
      description: jobDescription,
      location: jobLocation,
      salary: jobSalary,
    };

    dispatch(addJobs(newJob));
    console.log(newJob);

    // Reset form
    setJobTitle('');
    setJobDescription('');
    setJobLocation('');
    setJobSalary('');
  };

  const handleDeleteJob = (id) => {
    dispatch(deleteJobs(id));
    console.log("Job deleted successfully");
  };

  return (
    <div className="mx-auto p-10  bg-black text-white shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Section */}
      <div>
        <h1 className="text-4xl font-extrabold text-center text-purple-300 mb-8 drop-shadow-lg">
          Recruiter Dashboard
        </h1>

        {/* Job Listings */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Job Listings</h2>
          <ul className="space-y-5">
            {jobs.map((job) => (
              <li
                key={job.id} // Add a key here for better rendering
                className="p-5 bg-gradient-to-bl from-black to-gray-900 backdrop-blur-lg border border-gray-700 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-zinc-400">Role : {job.title}</h3>
                <p className="text-gray-400">Description : {job.description}</p>
                <p className="text-gray-500">Location {job.location}</p>
                <p className="text-gray-300">Salary: {job.salary}</p>
                <button
                  onClick={() => handleDeleteJob(job.id)}
                  className="mt-4 px-5 py-2 bg-red-500 cursor-pointer text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition duration-200"
                >
                  Delete Job
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Add New Job */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Add New Job</h2>
          <form onSubmit={handleAddJob} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Job Title"
                required
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}  // Bind the state to the input
                className="w-full p-4 bg-gradient-to-bl from-black to-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 text-white shadow-md"
              />
            </div>
            <div>
              <textarea
                placeholder="Job Description"
                required
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}  // Bind the state to the input
                className="w-full p-4 bg-gradient-to-bl from-black to-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 text-white shadow-md"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Job Location"
                required
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}  // Bind the state to the input
                className="w-full p-4 bg-gradient-to-bl from-black to-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 text-white shadow-md"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Salary"
                required
                value={jobSalary}
                onChange={(e) => setJobSalary(e.target.value)}  // Bind the state to the input
                className="w-full p-4 bg-gradient-to-bl from-black to-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 text-white shadow-md"
              />
            </div>
            <button className="w-full cursor-pointer py-3 bg-blue-500 text-white font-semibold rounded-lg  focus:ring-2 focus:ring-purple-400 transition duration-200 shadow-lg">
              Add Job
            </button>
          </form>
        </div>
      </div>

      {/* Right Section - Recruiter Info */}
      <div className="bg-gradient-to-bl from-black to-gray-900 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700">
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
