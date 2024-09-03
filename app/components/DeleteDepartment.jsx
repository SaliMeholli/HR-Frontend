"use client";
import { useState } from 'react';

function DeleteDepartment({ departmentId, onDepartmentDeleted }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);

    try {
      const res = await fetch(`http://localhost:4000/departments/${departmentId}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error("Failed to delete department");
      }

      onDepartmentDeleted(departmentId);
    } catch (error) {
      console.error("Error deleting department:", error);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-red-300"
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  );
}

export default DeleteDepartment;
