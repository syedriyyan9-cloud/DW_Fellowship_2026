import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinaitonsPage';
import PackagesPage from './pages/PackagesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Layout Component that wraps all pages
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream-light">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Create router with all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/destinations',
    element: (
      <Layout>
        <DestinationsPage />
      </Layout>
    ),
  },
  {
    path: '/packages',
    element: (
      <Layout>
        <PackagesPage />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <AboutPage />
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;