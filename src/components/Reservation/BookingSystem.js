
import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

export default function BookingSystem({ restaurantId, restaurantName }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  
  const handleBooking = () => {
    // Logic for booking
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Réserver une table</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded-lg"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Heure</label>
          <select 
            className="w-full p-2 border rounded-lg"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Sélectionner une heure</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Nombre de personnes</label>
          <select
            className="w-full p-2 border rounded-lg"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} personne{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
        <button 
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
          onClick={handleBooking}
        >
          Réserver maintenant
        </button>
      </div>
    </div>
  );
}