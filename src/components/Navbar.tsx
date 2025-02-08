import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HandHelping as HandWaving, User, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <HandWaving className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">GestureAI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/gesture" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              Recognition
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;