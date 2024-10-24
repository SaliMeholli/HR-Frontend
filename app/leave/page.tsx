"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import AddLeave from '../components/AddLeave';
import LeaveList from '../components/LeaveList';
import { Leave } from '../components/types';

const AddLeavePage = () => {
  const [leaves, setLeaves] = useState<Leave[]>([]);
  const [formData, setFormData] = useState({
    employeeName: '',
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
    status: ''
  });

  // Fetch leaves data
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:4000/leaves");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data: Leave[] = await res.json();
      setLeaves(data);
    } catch (error) {
      console.error("Error fetching leaves data:", error);
    }
  };

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
      const response = await fetch("http://localhost:4000/leaves", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add leave");
      }

      const newLeave: Leave = await response.json();

      // Update leaves state
      setLeaves(prevLeaves => [...prevLeaves, newLeave]);

      // Reset form data
      setFormData({
        employeeName: '',
        leaveType: '',
        startDate: '',
        endDate: '',
        reason: '',
        status: ''
      });

      console.log('Leave added successfully!');
    } catch (error) {
      console.error("Error adding leave:", error);
    }
  };

  // Handle leave updates
  const handleLeaveUpdated = (updatedLeave: Leave) => {
    setLeaves(prevLeaves => prevLeaves.map(leave => leave.id === updatedLeave.id ? updatedLeave : leave));
  };

  // Handle leave deletion
  const handleLeaveDeleted = (deletedLeaveId: number) => {
    setLeaves(prevLeaves => prevLeaves.filter(leave => leave.id !== deletedLeaveId));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="max-w-6xl mx-auto p-8 bg-gray-100 shadow-lg rounded-lg border border-gray-200 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Leave Management</h2>

        {/* Add Leave Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Employee Name */}
            <div>
              <label htmlFor="employeeName" className="block text-sm font-medium text-gray-900">Employee Name</label>
              <input
                type="text"
                id="employeeName"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            {/* Leave Type */}
            <div>
              <label htmlFor="leaveType" className="block text-sm font-medium text-gray-900">Leave Type</label>
              <input
                type="text"
                id="leaveType"
                name="leaveType"
                value={formData.leaveType}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            {/* Start Date */}
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-900">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            {/* End Date */}
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-900">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
              />
            </div>

            {/* Reason */}
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-900">Reason</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg py-2 px-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
                rows={4}
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
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Leave
            </button>
          </div>
        </form>

        {/* Leave List */}
        <div className="mt-10">
          <LeaveList leaves={leaves} onEdit={handleLeaveUpdated} onDelete={handleLeaveDeleted} />
        </div>
      </div>
    </div> 
  );
};

export default AddLeavePage;
