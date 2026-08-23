import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsersFromApi, addUserToApi, updateUserInApi, deleteUserFromApi } from '../../api/userApi';

// Async thunks for API calls
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUsersFromApi();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await addUserToApi(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await updateUserInApi(userData.id, userData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId, { rejectWithValue }) => {
    try {
      await deleteUserFromApi(userId);
      return userId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    searchTerm: '',
    loading: false,
    error: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add User
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      // Update User
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      // Delete User
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      });
  },
});

export const { setSearchTerm } = userSlice.actions;
export default userSlice.reducer;