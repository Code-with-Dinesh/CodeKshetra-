import React, { useState } from "react";
import pdfToText from 'react-pdftotext';
import toast, { Toaster } from 'react-hot-toast';
const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    expectedSalary: "",
    location: "",
    skills: [],
    resume: "",
    resumeText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "skills") {
      setFormData({ ...formData, skills: value.split(",").map(skill => skill.trim()) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const extractText = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const text = await pdfToText(file);
        setFormData(prevData => ({ ...prevData, resume: file, resumeText: text }));
      } catch (error) {
        console.error("Failed to extract text from PDF:", error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    toast.success('Profile Created Succesfully')
    setFormData({
      name: "",
      email: "",
      phone: "",
      education: "",
      experience: "",
      expectedSalary: "",
      location: "",
      skills: [],
      resume: "",
      resumeText: "",
    });
  };

  return (
    <div className="bg-gradient-to-bl from-black to-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto p-6 bg-gradient-to-b to-black from-gray-800 text-gray-400 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Candidate Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border bg-gray-900 text-gray-400 rounded" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full bg-gray-900 text-gray-400 p-2 border rounded" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-gray-900 text-gray-400 p-2 border rounded" required />
          <input type="text" name="education" value={formData.education} onChange={handleChange} placeholder="Education" className="w-full p-2 bg-gray-900 text-gray-400 border rounded" required />
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience (Years)" className="w-full p-2 bg-gray-900 text-gray-400 border rounded" required />
          <input type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} placeholder="Expected Salary" className="w-full p-2 bg-gray-900 text-gray-400 border rounded" required />
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="w-full p-2 bg-gray-900 text-gray-400 border rounded" required />
          <input type="text" name="skills" value={formData.skills.join(", ")} onChange={handleChange} placeholder="Skills (comma separated)" className="w-full bg-gray-900 text-gray-400 p-2 border rounded" required />
          <input type="file" accept="application/pdf" onChange={extractText} className="w-full p-2 bg-gray-900 text-gray-400 border rounded" required />
          {/* <textarea value={formData.resumeText} readOnly className="w-full p-2 bg-gray-800 text-gray-300 border rounded mt-2" placeholder="Extracted Resume Text"></textarea> */}
          <button type="submit" className="w-full cursor-pointer bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-all duration-300">Submit</button>
        </form>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
};

export default CandidateForm;
