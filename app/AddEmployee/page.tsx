"use client"; 
// pages/AddEmployee/page.tsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const AddEmployeePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    joinedAt: '',
    role: '',
    phoneNumber: '',
    location: '',
    department: '',
    status: '',
    hireDate: '',
    manager: '',
    salary: '',
    employmentType: '',
    notes: ''
  });

  // Handle form input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add employee");
      }

      // Reset form data after successful submission
      setFormData({
        name: '',
        surname: '',
        email: '',
        joinedAt: '',
        role: '',
        phoneNumber: '',
        location: '',
        department: '',
        status: '',
        hireDate: '',
        manager: '',
        salary: '',
        employmentType: '',
        notes: ''
      });

      console.log('Employee added successfully!');
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="max-w-6xl mx-auto p-8 bg-gray-100 shadow-lg rounded-lg border border-gray-200 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            {/* Surname */}
            <div>
              <label htmlFor="surname" className="block text-sm font-medium text-gray-900">Surname</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-900">Role</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-900">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-900">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-900">Status</label>
              <input
                type="text"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            

            {/* Manager */}
            <div>
              <label htmlFor="manager" className="block text-sm font-medium text-gray-900">Manager</label>
              <input
                type="text"
                id="manager"
                name="manager"
                value={formData.manager}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

          

        
            {/* Employment Type */}
            <div>
              <label htmlFor="employmentType" className="block text-sm font-medium text-gray-900">Employment Type</label>
              <input
                type="text"
                id="employmentType"
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-900">Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                rows={4}
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div> 
  );
};

export default AddEmployeePage;
