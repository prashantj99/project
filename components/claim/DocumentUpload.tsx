"use client";

import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface DocumentUploadProps {
  title: string;
}

export function DocumentUpload({ title }: DocumentUploadProps) {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  return (
    <div>
      <h3 className="font-medium mb-4">{title}</h3>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
          ${isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'}
          ${file ? 'bg-green-50 border-green-300' : ''}`}
      >
        <input {...getInputProps()} />
        {file ? (
          <div className="space-y-2">
            <p className="text-green-600">{file.name}</p>
            <Button
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
              }}
            >
              Remove File
            </Button>
          </div>
        ) : (
          <Button variant="outline" className="w-full">
            <FileText className="w-4 h-4 mr-2" />
            {isDragActive ? "Drop the file here" : "Upload File"}
          </Button>
        )}
      </div>
    </div>
  );
}