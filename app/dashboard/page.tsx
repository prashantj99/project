"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Activity, Clock, Calendar } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { title: "Active Cases", value: "12", icon: BarChart, change: "+2 this month" },
    { title: "Pending Reviews", value: "5", icon: Activity, change: "-1 this week" },
    { title: "Hours Saved", value: "128", icon: Clock, change: "+12 this month" },
    { title: "Upcoming Hearings", value: "3", icon: Calendar, change: "Next: Tomorrow" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
              </div>
              <stat.icon className="w-5 h-5 text-blue-500" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <Activity className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Case #{i} Updated</p>
                  <p className="text-xs text-gray-500">{i} hour{i !== 1 ? 's' : ''} ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <Calendar className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Hearing for Case #{i}</p>
                  <p className="text-xs text-gray-500">In {i} day{i !== 1 ? 's' : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}