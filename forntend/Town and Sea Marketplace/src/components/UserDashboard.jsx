import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [offers, setOffers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(''); 

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get('http://localhost:3400/offers/alloffers'); 
        setOffers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching offers:', error);
        setError('Failed to fetch offers');
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) return <p>Loading offers...</p>; 
  if (error) return <p>{error}</p>; 

  return (
    <div>
      
      {offers.length > 0 ? (
        <div>
          {offers.map((offer, index) => (
            <div key={index} className="offer-card">
              <h3>{offer.productName}</h3>
              <p><strong>Actual Price:</strong> ${offer.productPrice}</p>
              <p><strong>Asking Price:</strong> ${offer.makeanoffer}</p>
              <p><strong>Reason:</strong> {offer.reason}</p>
              <button>Accept</button>
              <button>Decline</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No offers available.</p>
      )}
    </div>
  );
};

export default UserDashboard;
