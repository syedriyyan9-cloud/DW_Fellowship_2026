import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/common/Header";
import Users from "./pages/Users";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
            <div className="container mx-auto px-4">
              <ul className="flex space-x-6 py-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/users"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <div className="container mx-auto px-4 py-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-200">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                      Welcome to User Dashboard
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      Click on <strong>Users</strong> to manage your user list
                    </p>
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        💡 <strong>Features:</strong> View, Add, Edit, Delete
                        users • Search functionality
                      </p>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
