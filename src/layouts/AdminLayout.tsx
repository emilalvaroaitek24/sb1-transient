import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, Calendar, Settings, CreditCard, LogOut } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function AdminLayout() {
  const { signOut } = useAuth();

  const navItems = [
    { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/calendar', icon: Calendar, label: 'Calendar' },
    { to: '/admin/settings', icon: Settings, label: 'Settings' },
    { to: '/admin/payments', icon: CreditCard, label: 'Payments' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <div className="p-6">
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <nav className="px-4 py-2">
            {navItems.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
            <Button
              variant="ghost"
              className="w-full mt-4 flex items-center gap-2 justify-start"
              onClick={() => signOut()}
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}