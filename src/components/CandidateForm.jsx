import React, { useState } from "react";

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    expectedSalary: "",
    preferredLocation: "",
    skills: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
    setFormData({name:"",email:"",phone:"",education:"",experience:"",expectedSalary:"",preferredLocation:"",skills:"",resume:""})
  };

  return (
    <div className="bg-gradient-to-bl from-black to-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Candidate Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-2 border rounded" required />
          <input type="text" name="education" value={formData.education} onChange={handleChange} placeholder="Education" className="w-full p-2 border rounded" required />
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience (Years)" className="w-full p-2 border rounded" required />
          <input type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} placeholder="Expected Salary" className="w-full p-2 border rounded" required />
          <input type="text" name="preferredLocation" value={formData.preferredLocation} onChange={handleChange} placeholder="Preferred Location" className="w-full p-2 border rounded" required />
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="w-full p-2 border rounded" required />
          <input type="file" accept=".pdf" onChange={handleFileChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CandidateForm;
