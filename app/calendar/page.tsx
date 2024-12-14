"use client";

import { Card } from "@/components/ui/card";
import { Badge, Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const events = [
  { id: 1, title: "Case Hearing", time: "10:00 AM", type: "Hearing" },
  { id: 2, title: "Document Review", time: "2:00 PM", type: "Review" },
  { id: 3, title: "Client Meeting", time: "4:00 PM", type: "Meeting" },
];

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Calendar</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-4 lg:col-span-1">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <CalendarIcon className="w-5 h-5 text-blue-500" />
                <div className="flex-1">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-gray-500">{event.time}</p>
                </div>
                <Badge variant="outline">{event.type}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}