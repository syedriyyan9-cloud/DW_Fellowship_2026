import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../../store/slices/userSlice";

const UserForm = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      dispatch(updateUser({ id: user.id, ...formData }));
    } else {
      dispatch(addUser(formData));
    }
    onClose();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        {user ? "Edit User" : "Add New User"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-200"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
          >
            {user ? "Update" : "Save"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
