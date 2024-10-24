import React from 'react';

const DepartmentsList = ({ departments, onEdit, onDelete }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {departments.map((department) => (
                <div key={department.id} className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800">{department.name}</h2>
                    <p className="text-gray-600 mb-4">{department.description}</p>
                    <div className="flex justify-between">
                        <button
                            onClick={() => onEdit(department)}
                            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(department.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DepartmentsList;
