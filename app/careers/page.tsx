"use client";
import { useState, useEffect } from "react";

function CareersPage() {
  const [careers, setCareers] = useState([]);
  const [newCareer, setNewCareer] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch careers data from API on component mount
  useEffect(() => {
    async function fetchCareers() {
      try {
        const response = await fetch("http://localhost:4000/careers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch careers data");
        }

        const data = await response.json();
        setCareers(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchCareers();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCareer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission to add new career
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:4000/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newCareer,
          salary: Number(newCareer.salary), // Ensure salary is a number
          joinedAt: new Date().toISOString(), // Current timestamp
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add new career");
      }

      const addedCareer = await response.json();
      setCareers((prev) => [...prev, addedCareer]); // Add the new career to the list
      setNewCareer({ title: "", description: "", location: "", salary: "" }); // Reset form
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Careers</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Form to add a new career */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow-md mb-8"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={newCareer.title}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Description:
          </label>
          <textarea
            name="description"
            value={newCareer.description}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Location:
          </label>
          <input
            type="text"
            name="location"
            value={newCareer.location}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Salary:</label>
          <input
            type="number"
            name="salary"
            value={newCareer.salary}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {loading ? "Adding..." : "Add Career"}
        </button>
      </form>

      {/* Display list of careers */}
      <h2 className="text-2xl font-bold mb-4">Available Careers</h2>
      <ul className="space-y-4">
        {careers.length > 0 ? (
          careers.map((career) => (
            <li
              key={career.joinedAt}
              className="p-4 bg-white shadow-md rounded-lg"
            >
              <strong className="text-lg font-bold">{career.title}</strong>
              <p>{career.description}</p>
              <p>
                <span className="font-bold">Location:</span> {career.location}
              </p>
              <p>
                <span className="font-bold">Salary:</span> ${career.salary}
              </p>
              <p>
                <span className="font-bold"></span>{" "}
                {new Date(career.joinedAt).toLocaleString()}
              </p>
            </li>
          ))
        ) : (
          <p>No careers available.</p>
        )}
      </ul>
    </div>
  );
}

export default CareersPage;
