import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import BookingCard from './BookingCard';
import toast from 'react-hot-toast';
import axios from 'axios';

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((data) => setBookings(data.data));
  }, [user?.email]);

  const handleDeleteBooking = (id) => {
    console.log(id);
    const proceed = confirm('Are sure want delete it?');
    if (proceed) {
      axios.delete(`http://localhost:5000/bookings/${id}`).then((data) => {
        console.log(data);
        if (data.data.deletedCount > 0) {
          toast.success('Successfully Delete');
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        }
      });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //==============বেজাইল্যা
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          console.log(updated);
          updated.status = 'confirm';
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };

  return (
    <div>
      <h2 className='text-3xl font-medium text-center mt-10'>
        Total Bookings : {bookings.length}{' '}
      </h2>
      {bookings.map((booking) => (
        <BookingCard
          key={booking._id}
          booking={booking}
          handleDeleteBooking={handleDeleteBooking}
          handleBookingConfirm={handleBookingConfirm}
        ></BookingCard>
      ))}
    </div>
  );
};

export default Bookings;
