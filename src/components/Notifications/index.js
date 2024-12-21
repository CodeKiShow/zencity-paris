import React, { useState } from 'react';
import { Bell, Star } from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'review',
      message: 'Nouveau commentaire sur votre avis du Jardin des Plantes',
      time: '2h',
      read: false
    },
    {
      id: 2,
      type: 'spot',
      message: 'Nouveau spot zen ajouté près de chez vous',
      time: '1j',
      read: true
    }
  ]);

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <div className="space-y-4">
          {notifications.map(notif => (
            <div
              key={notif.id}
              className={`p-4 rounded-lg ${notif.read ? 'bg-gray-50' : 'bg-green-50'}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Bell size={16} className={notif.read ? 'text-gray-400' : 'text-green-500'} />
                <span className="text-sm text-gray-500">{notif.time}</span>
              </div>
              <p className={`${notif.read ? 'text-gray-600' : 'text-gray-800'}`}>
                {notif.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;