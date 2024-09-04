// pages/[id].tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      // Fetch employee details by ID
      fetch(`/api/employees/${id}`)
        .then((response) => response.json())
        .then((data) => setEmployee(data));
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
            {/* Add additional fields here */}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Save
            </button>
            <button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
              Cancel
            </button>
          </form>
        ) : (
          <div>
            <h2>{employee.name} {employee.surname}</h2>
            <p>Email: {employee.email}</p>
            <p>Joined At: {employee.joinedAt}</p>
            <p>Role: {employee.role}</p>
            {/* Add additional fields here */}
            <button onClick={handleEditClick} className="bg-blue-500 text-white px-4 py-2 rounded">
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
