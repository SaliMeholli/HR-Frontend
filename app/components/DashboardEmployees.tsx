"use client";
import React, { useState } from "react";

type Employee = {
    id: number;
    name: string;
    surname: string;
    email: string;
    joinedAt: string;
    role: string;
    phoneNumber: string,
    address: string,
    department: string,
    status: string,
    hireDate: string,
    manager: string,
    salary: string,
    employmentType: string,
    notes: string
  };
  
  type DashboardEmployeesProps = {
    employees: Employee[];
  };
  
  function DashboardEmployees({ employees }: DashboardEmployeesProps) {
    console.log(employees);
    const employeesCount = employees.length;

  const handleDelete = async (id: number) => {
    console.log(`Employee with id ${id} deleted`);

    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }), // Send the id in the body
      });

      if (response.ok) {
        console.log(`Employee with id ${id} was successfully deleted.`);
        // Optionally, you can update the state to remove the deleted employee from the list
        // setEmployeesData((prev) => prev.filter((employee) => employee.id !== id));
      } else {
        console.error("Failed to delete employee:", await response.text());
      }
    } catch (error) {
      console.error("Error occurred while deleting employee:", error);
    }
  };

  return (
    <div className="w-full p-10 text-black">
      <div className="bg-white p-10 rounded-lg">
        <div className="flex justify-between mb-5">
          <div>
            <h1>Last Employees</h1>
            <p className="text-lg">
              <span className="font-bold">
                {employeesCount} Total Employees
              </span>
              , proceed to see them
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-center">
              <span className="font-bold">
                {employeesCount} <br /> Employees
              </span>
            </h1>
          </div>
        </div>
        <table className="min-w-full  bg-white">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Surname</th>
              <th className="py-2">Email</th>
              <th className="py-2">Joined At</th>
              <th className="py-2">Role</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b ">
                <td className="py-10 text-center text-black">{employee.id}</td>
                <td className="py-10 text-center text-black">{employee.name}</td>
                <td className="py-10 text-center text-black">{employee.surname}</td>
                <td className="py-10 text-center text-black">{employee.email}</td>
                <td className="py-10 text-center text-black">
                  {" "}
                  {new Date(employee.joinedAt).toLocaleDateString()}
                </td>
                <td className="py-10 text-center text-black">{employee.role}</td>
                <td className="py-10 text-center text-black">
                <a
                    href={`/employees/${employee.id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  More Details
                </a>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardEmployees;
