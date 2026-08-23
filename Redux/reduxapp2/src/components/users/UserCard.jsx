import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/slices/userSlice";

const UserCard = ({ user, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm(`Delete ${user.name}?`)) {
      dispatch(deleteUser(user.id));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {user.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {user.phone || "N/A"}
          </p>
        </div>
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => onEdit(user)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm transition-colors duration-200"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
