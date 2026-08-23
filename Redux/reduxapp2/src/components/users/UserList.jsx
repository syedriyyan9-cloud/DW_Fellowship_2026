import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setSearchTerm } from "../../store/slices/userSlice";
import UserCard from "./UserCard";
import UserForm from "./UserForm";
import LoadingSpinner from "../common/LoadingSpinner";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error, searchTerm } = useSelector(
    (state) => state.users
  );
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (users.length === 0 && !loading) {
      dispatch(fetchUsers());
    }
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading && users.length === 0) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 dark:text-red-400">Error: {error}</p>
        <button
          onClick={() => dispatch(fetchUsers())}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Users ({filteredUsers.length})
        </h2>
        <button
          onClick={() => {
            setEditingUser(null);
            setShowForm(true);
          }}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
        >
          + Add User
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-200"
        />
      </div>

      {showForm && (
        <div className="mb-6">
          <UserForm
            user={editingUser}
            onClose={() => {
              setShowForm(false);
              setEditingUser(null);
            }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={(user) => {
              setEditingUser(user);
              setShowForm(true);
            }}
          />
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          No users found
        </p>
      )}
    </div>
  );
};

export default UserList;
