"use client";

import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const cases = [
  { id: "001", title: "Contract Dispute", status: "Active", date: "2024-03-15", type: "Commercial" },
  { id: "002", title: "IP Infringement", status: "Pending", date: "2024-03-14", type: "Intellectual Property" },
  { id: "003", title: "Employment Case", status: "Closed", date: "2024-03-10", type: "Employment" },
];

export default function CasesPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Cases</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input className="pl-10" placeholder="Search cases..." />
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cases.map((case_) => (
              <TableRow key={case_.id}>
                <TableCell className="font-medium">#{case_.id}</TableCell>
                <TableCell>{case_.title}</TableCell>
                <TableCell>{case_.type}</TableCell>
                <TableCell>
                  <Badge variant={
                    case_.status === "Active" ? "default" :
                    case_.status === "Pending" ? "secondary" : "outline"
                  }>
                    {case_.status}
                  </Badge>
                </TableCell>
                <TableCell>{case_.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}