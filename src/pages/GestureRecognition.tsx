import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const GestureRecognition = () => {
  const webcamRef = useRef<Webcam>(null);
  const [gesture, setGesture] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      }
    };
    checkAuth();
  }, [navigate]);

  const saveGesture = async (gestureData: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { error } = await supabase
        .from('gestures')
        .insert([
          {
            user_id: user.id,
            gesture: gestureData,
            timestamp: new Date().toISOString(),
          },
        ]);
      
      if (error) {
        console.error('Error saving gesture:', error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Gesture Recognition</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <Webcam
              ref={webcamRef}
              mirrored={true}
              className="rounded-lg w-full"
            />
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold mb-2">
              Current Gesture: <span className="text-blue-600">{gesture}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestureRecognition;