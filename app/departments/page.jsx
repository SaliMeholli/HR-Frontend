"use client";
import { useEffect, useState } from 'react';
import DepartmentsList from '../components/DepartmentsList';
import AddDepartment from '../components/AddDepartment';
import EditDepartment from '../components/EditDepartment';
import DeleteDepartment from '../components/DeleteDepartment';

function Page() {
  const [departments, setDepartments] = useState([]);
  const [editingDepartment, setEditingDepartment] = useState(null);

  async function getData() {
    try {
      const res = await fetch("http://localhost:4000/departments");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setDepartments(data);
    } catch (error) {
      console.error("Error fetching departments data:", error);
    }
  }

  function handleDepartmentAdded(newDepartment) {
    setDepartments([...departments, newDepartment]);
  }

  function handleDepartmentUpdated(updatedDepartment) {
    setDepartments(departments.map(dep => dep.id === updatedDepartment.id ? updatedDepartment : dep));
    setEditingDepartment(null);
  }

  function handleDepartmentDeleted(deletedDepartmentId) {
    setDepartments(departments.filter(dep => dep.id !== deletedDepartmentId));
  }
  function DepartmentsList({ departments, onEdit, onDelete }) {
    return (
      <div className="space-y-4">
        {departments.map(department => (
          <div key={department.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">{department.name}</h2>
            <p className="text-gray-600">{department.description}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => onEdit(department)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Edit
              </button>
              <DeleteDepartment
                departmentId={department.id}
                onDepartmentDeleted={onDelete}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Departments Management</h1>
      <AddDepartment onDepartmentAdded={handleDepartmentAdded} />
      {editingDepartment ? (
        <EditDepartment
          department={editingDepartment}
          onDepartmentUpdated={handleDepartmentUpdated}
        />
      ) : (
        <DepartmentsList
          departments={departments}
          onEdit={setEditingDepartment}
          onDelete={handleDepartmentDeleted}
        />
      )}
    </div>
  );
}

export default Page;
