import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { AuthProvider } from './hooks/useAuth';
import { HomeScreen } from './components/HomeScreen';
import { motion } from 'motion/react';

const Root = () => {
  return (
    <AuthProvider>
      <HomeScreen />
    </AuthProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}