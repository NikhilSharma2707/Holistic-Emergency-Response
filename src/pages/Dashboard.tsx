import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Activity, Calendar } from 'lucide-react';

interface GestureRecord {
  id: string;
  gesture: string;
  timestamp: string;
}

const Dashboard = () => {
  const [gestures, setGestures] = useState<GestureRecord[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
        return;
      }
      fetchGestures(session.user.id);
    };
    checkAuth();
  }, [navigate]);

  const fetchGestures = async (userId: string) => {
    const { data, error } = await supabase
      .from('gestures')
      .select('*')
      .eq('user_id', userId)
      .order('timestamp', { ascending: false });

    if (error) {
      console.error('Error fetching gestures:', error);
      return;
    }

    setGestures(data || []);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Recent Activity</h2>
            </div>
            <p className="text-gray-600">
              Total Gestures Recorded: {gestures.length}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">History</h2>
            </div>
            <p className="text-gray-600">
              Last Session: {gestures[0]?.timestamp ? new Date(gestures[0].timestamp).toLocaleDateString() : 'No sessions yet'}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Gestures</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gesture
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {gestures.map((gesture) => (
                  <tr key={gesture.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {gesture.gesture}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(gesture.timestamp).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(gesture.timestamp).toLocaleTimeString()}
                    </td>
                  </tr>
                ))}
                {gestures.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                      No gestures recorded yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;