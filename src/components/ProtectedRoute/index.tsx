import React from 'react';

import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
