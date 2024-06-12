import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';

const CheckoutPage = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price, img } = loadedData;

  const [formData, setFormData] = useState({
    name: '',
    email: user?.email || '',
    date: '',
    dueAmount: '$' + price,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const bookingInfo = {
      customerName: formData.name,
      email: user?.email,
      date: formData.date,
      service_title: title,
      service_id: _id,
      price: price,
      img,
      message: formData.message,
    };
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('Product Booking');
        }
      });
    console.log('Form Data Submitted:', bookingInfo);
  };

  return (
    <div className='max-w-full mx-auto bg-white p-8 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-gray-800'>
        Product Name : {title}
      </h2>
      <form onSubmit={handleBooking}>
        <div className='grid md:grid-cols-2 lg:gap-8 md:gap-5'>
          <div className='mb-4'>
            <label className='block text-gray-700'>Customer Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Date</label>
            <input
              type='date'
              name='date'
              value={formData.date}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              required
            />
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-5'>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Due Amount</label>
            <input
              type='text'
              name='dueAmount'
              value={formData.dueAmount}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              required
            />
          </div>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Your Message</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
            rows='4'
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out'
        >
          Order Confirm
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
