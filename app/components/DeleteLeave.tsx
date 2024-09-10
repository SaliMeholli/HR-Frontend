interface Props {
    leaveId: number;
    onLeaveDeleted: (deletedLeaveId: number) => void;
  }
  
  function DeleteLeave({ leaveId, onLeaveDeleted }: Props) {
    async function handleDelete() {
      try {
        await fetch(`http://localhost:4000/leaves/${leaveId}`, {
          method: 'DELETE',
        });
        onLeaveDeleted(leaveId);
      } catch (error) {
        console.error('Error deleting leave:', error);
      }
    }
  
    return (
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
      >
        Delete
      </button>
    );
  }
  
  export default DeleteLeave;
  