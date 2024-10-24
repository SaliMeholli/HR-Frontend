import React, { useState, ChangeEvent } from 'react';

interface Leave {
  id: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
}

interface Props {
  onLeaveAdded: (newLeave: Leave) => void;
}

function AddLeave({ onLeaveAdded }: Props) {
  const [leave, setLeave] = useState<Leave>({
    id: Date.now(),
    startDate: '',
    endDate: '',
    type: 'Annual',
    reason: ''
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/leaves", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leave),
      });
      const data: Leave = await res.json();
      onLeaveAdded(data);
    } catch (error) {
      console.error('Error adding leave:', error);
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setLeave((prevLeave) => ({
      ...prevLeave,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="date"
        name="startDate"
        value={leave.startDate}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="date"
        name="endDate"
        value={leave.endDate}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <select
        name="type"
        value={leave.type}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="Annual">Annual</option>
        <option value="Sick">Sick</option>
        <option value="Personal">Personal</option>
      </select>
      <textarea
        name="reason"
        value={leave.reason}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
        placeholder="Reason for leave"
        required
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Leave</button>
    </form>
  );
}

export default AddLeave;
