import { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from './ProductCard';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className='grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-2 my-5'>
      {services.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </section>
  );
};

export default Services;
