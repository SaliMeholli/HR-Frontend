"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardEmployees from "../components/DashboardEmployees";
import { useAuth } from "../context/AuthProvider";
import ProtectedRoute from "../protected-route";

function Dashboard() {
  const [employeesData, setEmployeesData] = useState([]);
  console.log(employeesData);
  async function getData() {
    try {
      const res = await fetch("http://localhost:4000/users");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setEmployeesData(data);
    } catch (error) {
      console.error("Error fetching employees data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProtectedRoute allowedRoles={['admin']}>
    <div className="flex bg-gray-300 ">
      
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">
        <DashboardNavbar />
        <DashboardEmployees employees={employeesData} />
      </div>
    </div>
    </ProtectedRoute>
  );
}

export default Dashboard;
