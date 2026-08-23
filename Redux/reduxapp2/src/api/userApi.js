const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsersFromApi = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
};

export const addUserToApi = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error('Failed to add user');
  return response.json();
};

export const updateUserInApi = async (id, userData) => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error('Failed to update user');
  return response.json();
};

export const deleteUserFromApi = async (id) => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete user');
  return true;
};