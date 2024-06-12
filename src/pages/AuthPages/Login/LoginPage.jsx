import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';

const LoginPage = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };
    console.log(newUser);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        const user = { email };
        axios
          .post('http://localhost:5000/jwt', user, { withCredentials: true })
          .then((res) => {
            console.log(res.data.success);
            toast.success('Successfully Login.');
            if (res.data.success) {
              navigate(location?.state || '/');
            }
          });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
        <form onSubmit={handleLogin}>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 mb-2' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200'
          >
            Login
          </button>
        </form>
        <div className='mt-6 text-center'>
          <a href='#' className='text-blue-600 hover:underline'>
            Forgot your password?
          </a>
        </div>
        <div className='mt-4 text-center'>
          <p>
            Don't have an account?{' '}
            <Link to='/register' className='text-blue-600 hover:underline'>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
