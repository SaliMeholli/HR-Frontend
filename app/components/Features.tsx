import React from 'react'

export const Features = () => {
    return (
        <section className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">System Features</h2>
            <div className="text-left max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Job Posting Management</h3>
                        <p className="text-gray-600">Admins can create and manage job positions with ease.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Employee Onboarding</h3>
                        <p className="text-gray-600">Admins have the ability to add new employees to the system.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Employee Offboarding</h3>
                        <p className="text-gray-600">Admins can efficiently remove employees who are no longer with the company.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Department Management</h3>
                        <p className="text-gray-600">Admins can add and remove departments as needed.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Attendance Tracking</h3>
                        <p className="text-gray-600">Admins can perform check-ins and check-outs for employees, ensuring accurate attendance records.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Leave Management</h3>
                        <p className="text-gray-600">Admins can grant and manage employee leave requests.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">Employee Profiles</h3>
                        <p className="text-gray-600">Admins can view and manage all employee profiles, providing a comprehensive overview of the workforce.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">View Statistics</h3>
                        <p className="text-gray-600">Admins can view and analyze various statistics to monitor system performance and employee data.</p>
                    </div>

                </div>
            </div>
        </section>)
}
