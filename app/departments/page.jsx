"use client";
import React, { useEffect, useState } from 'react';
import DepartmentsList from '../components/DepartmentsList';
import AddDepartment from '../components/AddDepartment';
import EditDepartment from '../components/EditDepartment';
import Sidebar from '../components/Sidebar'; 

const DepartmentPage = () => {
    const [departments, setDepartments] = useState([]);
    const [editingDepartment, setEditingDepartment] = useState(null);

    useEffect(() => {
        const fetchDepartments = async () => {
            const response = await fetch('http://localhost:4000/departments');
            const data = await response.json();
            setDepartments(data);
        };
        fetchDepartments();
    }, []);

    const handleEdit = (department) => {
        setEditingDepartment(department);
    };

    const handleDelete = async (id) => {
        await fetch(`http://localhost:4000/departments/${id}`, {
            method: 'DELETE',
        });
        setDepartments(departments.filter((dept) => dept.id !== id));
    };

    const handleUpdate = (updatedDepartment) => {
        setDepartments(departments.map((dept) => (dept.id === updatedDepartment.id ? updatedDepartment : dept)));
        setEditingDepartment(null);
    };

    const handleAdd = (newDepartment) => {
        setDepartments([...departments, newDepartment]);
    };

    return (
      <div className="flex min-h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 p-6 bg-gray-50 md:ml-64 transition-all duration-300">
              <h1 className="text-3xl font-bold mb-6 text-gray-800">Departments</h1>
              <AddDepartment onDepartmentAdded={handleAdd} />
  
              {editingDepartment && (
                  <EditDepartment
                      department={editingDepartment}
                      onUpdate={handleUpdate}
                      onClose={() => setEditingDepartment(null)}
                  />
              )}
              <DepartmentsList departments={departments} onEdit={handleEdit} onDelete={handleDelete} />
          </div>
      </div>
  );
  
};

export default DepartmentPage;
