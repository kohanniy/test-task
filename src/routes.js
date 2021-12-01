import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from './layouts/dashboard';

import Dashboard from './pages/Dashboard';
import BukWild from './pages/BukWild';
import NotFound from './pages/Page404';

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/dashboard', element: <Navigate to='/dashboard/wk' replace /> },
        { path: 'wk', element: <Dashboard /> },
        { path: 'bukwild', element: <BukWild /> },
      ],
    },
    {
      path: '/',
      children: [
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to='/dashboard' /> },
        { path: '*', element: <Navigate to='/404' /> },
      ],
    },
    { path: '*', element: <Navigate to='/404' replace /> },
  ]);
}
