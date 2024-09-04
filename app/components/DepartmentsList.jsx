"use client";
import DeleteDepartment from './DeleteDepartment';

function DepartmentsList({ departments, onEdit, onDelete }) {
  return (
    <div className="space-y-6">
      {departments.length === 0 ? (
        <p className="text-gray-600">No departments found.</p>
      ) : (
        departments.map(department => (
          <div key={department.id} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800">{department.name}</h2>
            <p className="text-gray-600 mt-2">{department.description}</p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => onEdit(department)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Edit
              </button>
              <DeleteDepartment
                departmentId={department.id}
                onDepartmentDeleted={onDelete}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default DepartmentsList;
