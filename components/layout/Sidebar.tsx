"use client";

import { Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";

const navigationItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "My Cases", path: "/cases" },
  { name: "Activities", path: "/activities" },
  { name: "Calendar", path: "/calendar" },
  { name: "Files", path: "/files" },
  { name: "Open a Dispute", path: "/dispute" },
];

export function Sidebar() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (item: { name: string; path: string }) => {
    setActiveItem(item.name);
    router.push(item.path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        <Scale className="h-6 w-6 text-blue-600" />
      </button>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-40",
        "w-64 bg-white border-r border-gray-200 p-4",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex items-center gap-2 mb-8">
          <Scale className="h-6 w-6 text-blue-600" />
          <span className="font-semibold text-xl">Jur</span>
        </div>
        
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item)}
              className={cn(
                "w-full text-left px-4 py-2 rounded-lg transition-colors",
                activeItem === item.name
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              )}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <Card className="mt-8 p-4 bg-blue-50">
          <div className="flex items-center justify-center mb-4">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=60"
              alt="Justice illustration"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
          <h3 className="font-semibold text-center">Get Justice on every Claims</h3>
        </Card>
      </div>
    </>
  );
}