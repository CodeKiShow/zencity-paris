import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ZenSpots from './components/ZenSpots';
import RestaurantsView from './components/RestaurantsView';
import BookingSystem from './components/BookingSystem';
import ReviewSystem from './components/ReviewSystem';
import GamificationSystem from './components/GamificationSystem';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Routes>
        <Route path="/" element={<ZenSpots />} />
        <Route path="/restaurants" element={<RestaurantsView />} />
        <Route path="/booking" element={<BookingSystem />} />
        <Route path="/reviews" element={<ReviewSystem />} />
        <Route path="/profile" element={<GamificationSystem />} />
      </Routes>
    </div>
  );
}

export default App;