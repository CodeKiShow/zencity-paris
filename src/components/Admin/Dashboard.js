import React from 'react';
import { Users, Star, MapPin } from 'lucide-react';

const AdminDashboard = () => {
  const stats = {
    totalUsers: 1234,
    activeSpots: 89,
    pendingReviews: 23,
    dailyVisits: 456
  };

  const recentActivities = [
    {
      id: 1,
      type: 'new_spot',
      message: 'Nouveau spot ajouté: Jardin Zen',
      time: '2h'
    },
    {
      id: 2,
      type: 'report',
      message: 'Signalement sur avis #2453',
      time: '4h'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord administrateur</h1>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4">
            <Users className="text-blue-500" />
            <div>
              <h3 className="text-gray-600">Utilisateurs</h3>
              <p className="text-2xl font-bold">{stats.totalUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4">
            <MapPin className="text-green-500" />
            <div>
              <h3 className="text-gray-600">Spots actifs</h3>
              <p className="text-2xl font-bold">{stats.activeSpots}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4">
            <Star className="text-yellow-500" />
            <div>
              <h3 className="text-gray-600">Avis en attente</h3>
              <p className="text-2xl font-bold">{stats.pendingReviews}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-4">
            <Users className="text-purple-500" />
            <div>
              <h3 className="text-gray-600">Visites aujourd'hui</h3>
              <p className="text-2xl font-bold">{stats.dailyVisits}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Activités récentes</h2>
        <div className="space-y-4">
          {recentActivities.map(activity => (
            <div key={activity.id} className="flex items-center justify-between py-2 border-b">
              <p className="text-gray-600">{activity.message}</p>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;