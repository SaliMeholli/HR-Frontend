const DeleteDepartment = ({ departmentId, onDepartmentDeleted }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      try {
        const response = await fetch(`http://localhost:4000/departments/${departmentId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          onDepartmentDeleted(departmentId);
        } else {
          console.error('Error deleting department');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Delete
    </button>
  );
};

export default DeleteDepartment;
