"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Upload } from "lucide-react";

export default function DisputePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Open a Dispute</h1>

      <Card className="max-w-2xl mx-auto p-6">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Dispute Title</Label>
            <Input id="title" placeholder="Enter the title of your dispute" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Dispute Type</Label>
            <select
              id="type"
              className="w-full p-2 border rounded-md"
            >
              <option>Contract Dispute</option>
              <option>Intellectual Property</option>
              <option>Employment</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide details about your dispute"
              rows={5}
            />
          </div>

          <div className="space-y-2">
            <Label>Supporting Documents</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="mx-auto w-8 h-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">
                Drag and drop your files here, or click to select files
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PDF, DOC, DOCX up to 10MB
              </p>
              <Button variant="outline" className="mt-4">
                <FileText className="w-4 h-4 mr-2" />
                Choose Files
              </Button>
            </div>
          </div>

          <Button className="w-full">Submit Dispute</Button>
        </form>
      </Card>
    </div>
  );
}