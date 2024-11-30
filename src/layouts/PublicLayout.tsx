import { Outlet, Link } from 'react-router-dom';
import { Home, Calendar, LogIn } from 'lucide-react';

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold">JUN n RIE</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link
                to="/booking"
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Now</span>
              </Link>
              <Link
                to="/login"
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                <LogIn className="w-5 h-5" />
                <span>Admin Login</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} JUN n RIE Transient Home. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}