import DeleteLeave from './DeleteLeave';
interface Leave {
    id: number;
    startDate: string;
    endDate: string;
    type: string;
    reason: string;
  }
  
  interface Props {
    leaves: Leave[];
    onEdit: (leave: Leave) => void;
    onDelete: (leaveId: number) => void;
  }
  
  function LeaveList({ leaves, onEdit, onDelete }: Props) {
    return (
      <div className="space-y-4">
        {leaves.map(leave => (
          <div key={leave.id} className="p-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">{leave.type}</h2>
            <p className="text-gray-600">{leave.startDate} - {leave.endDate}</p>
            <p className="text-gray-600">Reason: {leave.reason}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => onEdit(leave)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
              <DeleteLeave
                leaveId={leave.id}
                onLeaveDeleted={onDelete}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default LeaveList;
  