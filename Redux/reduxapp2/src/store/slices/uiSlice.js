import { createSlice } from '@reduxjs/toolkit';

// Get initial theme from localStorage or system preference
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: getInitialTheme(),
    loading: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      // Save to localStorage
      localStorage.setItem('theme', state.theme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, setLoading } = uiSlice.actions;
export default uiSlice.reducer;