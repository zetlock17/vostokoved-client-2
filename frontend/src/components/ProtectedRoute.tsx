import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { newUser } from '../services/DialogServices';

const ProtectedRoute = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const sessionId = localStorage.getItem('sessionId');
      if (!sessionId) {
        try {
          const newSessionId = await newUser();
          if (newSessionId.status == 200 || newSessionId.status == 201) {
            localStorage.setItem('sessionId', newSessionId.data);
          }
        } catch (error) {
          console.error('Failed to get new user session:', error);
        }
      }
      setIsLoading(false);
    };

    checkSession();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Outlet />;
};

export default ProtectedRoute;
