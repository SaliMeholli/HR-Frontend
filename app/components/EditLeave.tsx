import { useState } from 'react';
interface Leave {
    id: number;
    startDate: string;
    endDate: string;
    type: string;
    reason: string;
  }
  
  interface Props {
    leave: Leave;
    onLeaveUpdated: (updatedLeave: Leave) => void;
  }
  
  function EditLeave({ leave, onLeaveUpdated }: Props) {
    const [updatedLeave, setUpdatedLeave] = useState(leave);
  
    async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      try {
        const res = await fetch(`http://localhost:4000/leaves/${leave.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedLeave),
        });
        const data: Leave = await res.json();
        onLeaveUpdated(data);
      } catch (error) {
        console.error('Error updating leave:', error);
      }
    }
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form Fields */}
      </form>
    );
  }
  
  export default EditLeave;
  