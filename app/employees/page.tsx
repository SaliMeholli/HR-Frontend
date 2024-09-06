import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

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
      fetch(`http://localhost:3000/users/${id}`)
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
      fetch(`/api/employees/${employee.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      })
        .then((response) => response.json())
        .then((data) => {
          setEmployee(data);
          setIsEditing(false);
        });
    }
  };

  return (
    <div className="p-6">
      {employee ? (
        isEditing ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                name="name"
                type="text"
                value={employee.name}
                onChange={handleChange}
                className="border p-2"
              />
            </div>
            <div>
              <label htmlFor="surname">Surname:</label>
              <input
                id="surname"
                name="surname"
                type="text"
                value={employee.surname}
                onChange={handleChange}
                className="border p-2"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                type="text"
                value={employee.email}
                onChange={handleChange}
                className="border p-2"
              />
            </div>
            <div>
              <label htmlFor="role">Role:</label>
              <input
                id="role"
                name="role"
                type="text"
                value={employee.role}
                onChange={handleChange}
                className="border p-2"
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                id="address"
                name="address"
                type="text"
                value={employee.address}
                onChange={handleChange}
                className="border p-2"
              />
            </div>
            <div>
              <label htmlFor="department">Department:</label>
              <input
                id="department"
                name="department"
                type="text"
                value={employee.department}
                onChange={handleChange}
                className="border p-2"
              />
            </div>
            <div>
              <label htmlFor="status">Status:</label>
              <input
                id="status"
                name="status"
                type="text"
                value={employee.status}
                onChange={handleChange}
                className="border p-2"
              />
            </div>
            <div>
              <label htmlFor="manager">Manager:</label>
              <input
                id="manager"
                name="manager"
                type="text"
                value={employee.manager}
                onChange={handleChange}
                className="border p-2"
              />
            </div>
            <div>
              <label htmlFor="employmentType">Employment Type:</label>
              <input
                id="employmentType"
                name="employmentType"
                type="text"
                value={employee.employmentType}
                onChange={handleChange}
                className="border p-2"
              />
            </div>
            <div>
              <label htmlFor="notes">Notes:</label>
              <input
                id="notes"
                name="notes"
                type="text"
                value={employee.notes}
                onChange={handleChange}
                className="border p-2"
              />
            </div>
            {/* Do fusha mungojn */}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
            >
              Cancel
            </button>
          </form>
        ) : (
          <div>
            <h2>
              {employee.name} {employee.surname}
            </h2>
            <p>Email: {employee.email}</p>
            <p>Role: {employee.role}</p>
            <p>Address: {employee.address}</p>
            <p>Department: {employee.department}</p>
            <p>Status: {employee.status}</p>
            <p>Manager: {employee.manager}</p>
            <p>Employment Type: {employee.employmentType}</p>
            <p>Notes: {employee.notes}</p>
            {/* Do atribute mungojn */}
            <button
              onClick={handleEditClick}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
          </div>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmployeePage;
