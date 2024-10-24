import React, { useState } from 'react';

const AddDepartment = ({ onDepartmentAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newDepartment = { name, description };
        const response = await fetch('http://localhost:4000/departments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newDepartment),
        });
        if (response.ok) {
            const addedDepartment = await response.json();
            onDepartmentAdded(addedDepartment);
            setName('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Create a New Department</h2>
            <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="name">
                    Department Name
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Department Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-800"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-800 mb-2" htmlFor="description">
                    Department Description
                </label>
                <textarea
                    id="description"
                    placeholder="Department Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-800"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
                Add Department
            </button>
        </form>
    );
};

export default AddDepartment;
