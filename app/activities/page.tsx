"use client";

import { Card } from "@/components/ui/card";
import { Badge, FileText, MessageSquare, Scale } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "Document",
    title: "Contract uploaded",
    description: "New document added to case #001",
    time: "2 hours ago",
    icon: FileText,
  },
  {
    id: 2,
    type: "Message",
    title: "New comment",
    description: "Response received from opposing party",
    time: "5 hours ago",
    icon: MessageSquare,
  },
  {
    id: 3,
    type: "Case",
    title: "Case status updated",
    description: "Case #002 moved to review phase",
    time: "1 day ago",
    icon: Scale,
  },
];

export default function ActivitiesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Activities</h1>

      <div className="space-y-4">
        {activities.map((activity) => (
          <Card key={activity.id} className="p-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <activity.icon className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{activity.title}</h3>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    {activity.type}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}