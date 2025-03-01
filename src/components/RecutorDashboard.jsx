import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs, addJobs } from '../redux/JobSlice';
import axios from 'axios';


const RecuratorDashboard = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.job);

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobSalary, setJobSalary] = useState(0);
  const [experienceRequired, setExperienceRequired] = useState('');
  const [educationRequirement, setEducationRequirement] = useState('');
  const [skillsRequired, setSkillsRequired] = useState([]);
  const [candidaterank,setcandidaterank] = useState([])

  useEffect(() => {
    fetchJobs();
    handleAddJob();
  }, [dispatch]);

  // Fetch all jobs
  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:8080/jobs');
      dispatch(setJobs(response.data));
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  // Fetch candidate ranking for a job
  const fetchCandidateRanking = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/jobs/${id}/rank-candidates`);
      console.log('Candidate Ranking:', response.data);
      setcandidaterank(response.data)
    } catch (error) {
      console.error('Error fetching ranking:', error);
    }
  };

  // Fetch job details by ID  
  const fetchJobDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/jobs/${id}`);
      console.log('Job Details:', response.data);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  // Add new job
  const handleAddJob = async (e) => {
    e.preventDefault();
    const newJob = {
      title: jobTitle,
      description: jobDescription,
      location: jobLocation,
      salary: jobSalary,
      skills: typeof skillsRequired === "string" ? skillsRequired.split(",").map(skill => skill.trim()) : skillsRequired,
      experience: experienceRequired,
      education: educationRequirement,
    };

    try {
      const response = await axios.post('http://localhost:8080/jobs', newJob);
      dispatch(addJobs(response.data));
      dispatch(setJobs([...jobs, response.data]));
      console.log('New job added:', response.data);
    } catch (error) {
      console.error('Error adding job:', error);
    }

    // Reset form
    setJobTitle('');
    setJobDescription('');
    setJobLocation('');
    setJobSalary('');
    setEducationRequirement('');
    setExperienceRequired('');
    setSkillsRequired(null);
  };



  

  return (
    <div className="mx-auto p-10 bg-black text-white shadow-xl grid grid-cols-1 md:grid-cols-2 gap-10">
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
                key={job.id}
                className="p-5 bg-gradient-to-bl from-black to-gray-900 backdrop-blur-lg border border-gray-700 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-zinc-400">Role: {job.title}</h3>
                <p className="text-gray-400">Description: {job.description}</p>
                <p className="text-gray-500">Location: {job.location}</p>
                <p className="text-gray-300">Salary: {job.salary}</p>
                <button
                  onClick={() => fetchCandidateRanking(job.id)}
                  className="mt-4 px-5 py-2 bg-red-500 cursor-pointer text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition duration-200"
                >
                  Rank Candidate
                </button>
                <button
                  onClick={() => fetchJobDetails(job.id)}
                  className="bg-white cursor-pointer text-black rounded-lg mt-4 px-5 py-2 ml-2"
                >
                  Info
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Add New Job */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Add New Job</h2>
          <form onSubmit={handleAddJob} className="space-y-4">
            <input
              type="text"
              placeholder="Job Title"
              required
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="input-field"
            />
            <textarea
              placeholder="Job Description"
              required
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Job Location"
              required
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Salary"
              required
              value={jobSalary}
              onChange={(e) => setJobSalary(e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Education Requirement"
              required
              value={educationRequirement}
              onChange={(e) => setEducationRequirement(e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Experience Required"
              required
              value={experienceRequired}
              onChange={(e) => setExperienceRequired(e.target.value)}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Skills Required"
              required
              value={skillsRequired}
              onChange={(e) => setSkillsRequired(e.target.value)}
              className="input-field"
            />
            <button className="w-full cursor-pointer py-3 bg-blue-500 text-white font-semibold rounded-lg focus:ring-2 focus:ring-purple-400 transition duration-200 shadow-lg">
              Add Job
            </button>
          </form>
        </div>
      </div>
      {
        candidaterank.map((ele,index)=>{
          <div>
            <li>{ele.id}</li>
            <li>{ele.title}</li>
            <li>{ele.location}</li>
            <li>{ele.expectedSalary}</li>
            <li>{ele.education}</li>
            <li>{ele.experience}</li>

            <ul className="flex flex-wrap gap-2 mt-2">
                  {candidaterank.skills.skills.map((skill, i) => (
                    <li key={i} className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">{skill}</li>
                  ))}
                </ul>
            </div>
        })
      }
    </div>
  );
};

export default RecuratorDashboard;
