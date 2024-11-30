import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AdminLayout from './layouts/AdminLayout';
import PublicLayout from './layouts/PublicLayout';
import Dashboard from './pages/admin/Dashboard';
import Calendar from './pages/admin/Calendar';
import Settings from './pages/admin/Settings';
import Payments from './pages/admin/Payments';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/calendar" element={<Calendar />} />
              <Route path="/admin/settings" element={<Settings />} />
              <Route path="/admin/payments" element={<Payments />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;