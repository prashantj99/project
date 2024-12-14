"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Upload } from "lucide-react";

export default function DisputePage() {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    files: [],
  });

  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileUpload = (e) => {
    setFileError(""); // Reset file errors
    const files = Array.from(e.target.files);

    const isValid = files.every((file) => {
      const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      const isValidType = validTypes.includes(file.type);
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
      if (!isValidType) setFileError("Invalid file type. Only PDF, DOC, and DOCX are allowed.");
      if (!isValidSize) setFileError("File size must not exceed 10MB.");
      return isValidType && isValidSize;
    });

    if (isValid) {
      setFormData({ ...formData, files });
    } else {
      e.target.value = ""; // Clear invalid files
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Dispute title is required.";
    if (!formData.type.trim()) newErrors.type = "Dispute type is required.";
    if (!formData.description.trim()) newErrors.description = "Description is required.";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Dispute submitted successfully!");
      // Reset form (if needed)
      setFormData({
        title: "",
        type: "",
        description: "",
        files: [],
      });
      setFileError("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Open a Dispute</h1>

      <Card className="max-w-2xl mx-auto p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="title">Dispute Title</Label>
            <Input
              id="title"
              placeholder="Enter the title of your dispute"
              value={formData.title}
              onChange={handleInputChange}
            />
            {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Dispute Type</Label>
            <select
              id="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select a type</option>
              <option value="Contract Dispute">Contract Dispute</option>
              <option value="Intellectual Property">Intellectual Property</option>
              <option value="Employment">Employment</option>
              <option value="Other">Other</option>
            </select>
            {errors.type && <p className="text-sm text-red-500">{errors.type}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide details about your dispute"
              rows={5}
              value={formData.description}
              onChange={handleInputChange}
            />
            {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
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
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="file-upload"
                onChange={handleFileUpload}
              />
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => document.getElementById("file-upload").click()}
                type="button" // Ensure this button doesn't trigger form submission
              >
                <FileText className="w-4 h-4 mr-2" />
                Choose Files
              </Button>
              {fileError && <p className="text-sm text-red-500 mt-2">{fileError}</p>}
            </div>
          </div>

          <Button className="w-full" type="submit">
            Submit Dispute
          </Button>
        </form>
      </Card>
    </div>
  );
}
