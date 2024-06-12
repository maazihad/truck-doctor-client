import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/AuthPages/Login/LoginPage';
import RegisterPage from '../pages/AuthPages/Register/RegisterPage';
import CheckoutPage from '../pages/Dashboard/CheckOutPage/CheckOutPage';
import Bookings from '../pages/Dashboard/Bookings/Bookings';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div className='flex h-screen justify-center items-center '>
        <p className='text-3xl font-medium'>something here wrong</p>
      </div>
    ),
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>,
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: '/check-out/:id',
        element: (
          <PrivateRoute>
            <CheckoutPage></CheckoutPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
