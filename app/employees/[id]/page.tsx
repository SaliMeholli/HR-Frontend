'use client';
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Sidebar from '../../components/Sidebar';

type Employee = {
  id: number;
  name: string;
  surname: string;
  email: string;
  joinedAt: string;
  role: string;
  phoneNumber: string;
  address: string;
  department: string;
  status: string;
  hireDate: string;
  manager: string;
  salary: string;
  employmentType: string;
  notes: string;
};

const EmployeePage: React.FC = () => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams(); // Using useParams to get the id

  useEffect(() => {
    if (id) {
      // Fetch employee details by ID from localhost:4000
      fetch(`http://localhost:4000/users/${id}`)
        .then((response) => response.json())
        .then((data) => setEmployee(data))
        .catch((error) => {
          console.error("Error fetching employee:", error);
        });
    }
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (employee) {
      fetch(`http://localhost:4000/users/${employee.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to update employee');
          }
          return response.json();
        })
        .then((data) => {
          setEmployee(data);
          setIsEditing(false);
        })
        .catch((error) => console.error('Error updating employee:', error));
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 text-black">
      <Sidebar />
      <main className="flex-1 p-6">
        {employee ? (
          isEditing ? (
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Employee</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label htmlFor="name" className="block text-gray-700 font-medium">Name:</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={employee.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label htmlFor="surname" className="block text-gray-700 font-medium">Surname:</label>
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    value={employee.surname}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={employee.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label htmlFor="role" className="block text-gray-700 font-medium">Role:</label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    value={employee.role}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label htmlFor="address" className="block text-gray-700 font-medium">Address:</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={employee.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label htmlFor="department" className="block text-gray-700 font-medium">Department:</label>
                  <input
                    id="department"
                    name="department"
                    type="text"
                    value={employee.department}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label htmlFor="status" className="block text-gray-700 font-medium">Status:</label>
                  <input
                    id="status"
                    name="status"
                    type="text"
                    value={employee.status}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label htmlFor="manager" className="block text-gray-700 font-medium">Manager:</label>
                  <input
                    id="manager"
                    name="manager"
                    type="text"
                    value={employee.manager}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label htmlFor="employmentType" className="block text-gray-700 font-medium">Employment Type:</label>
                  <input
                    id="employmentType"
                    name="employmentType"
                    type="text"
                    value={employee.employmentType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-2 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label htmlFor="notes" className="block text-gray-700 font-medium">Notes:</label>
                  <input
                    id="notes"
                    name="notes"
                    type="text"
                    value={employee.notes}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-col md:flex-row md:justify-between">
                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200">
                  Save
                </button>
                <button type="button" onClick={handleCancel} className="bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-200 mt-4 md:mt-0">
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 max-w-4xl mx-auto">
              <h2 className
="text-2xl font-bold mb-4 text-gray-800">{employee.name} {employee.surname}</h2> <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <div className="bg-gray-50 p-4 rounded-lg border border-gray-200"> <p><span className="font-semibold text-gray-700">Email:</span> {employee.email}</p> </div> <div className="bg-gray-50 p-4 rounded-lg border border-gray-200"> <p><span className="font-semibold text-gray-700">Role:</span> {employee.role}</p> </div> <div className="bg-gray-50 p-4 rounded-lg border border-gray-200"> <p><span className="font-semibold text-gray-700">Address:</span> {employee.address}</p> </div> <div className="bg-gray-50 p-4 rounded-lg border border-gray-200"> <p><span className="font-semibold text-gray-700">Department:</span> {employee.department}</p> </div> <div className="bg-gray-50 p-4 rounded-lg border border-gray-200"> <p><span className="font-semibold text-gray-700">Status:</span> {employee.status}</p> </div> <div className="bg-gray-50 p-4 rounded-lg border border-gray-200"> <p><span className="font-semibold text-gray-700">Manager:</span> {employee.manager}</p> </div> <div className="bg-gray-50 p-4 rounded-lg border border-gray-200"> <p><span className="font-semibold text-gray-700">Employment Type:</span> {employee.employmentType}</p> </div> <div className="col-span-2 bg-gray-50 p-4 rounded-lg border border-gray-200"> <p><span className="font-semibold text-gray-700">Notes:</span> {employee.notes}</p> </div> </div> <button onClick={handleEditClick} className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"> Edit </button> </div> ) ) : ( <p className="text-gray-700">Loading...</p> )} </main> </div> ); };

export default EmployeePage;