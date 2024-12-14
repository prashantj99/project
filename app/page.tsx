"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ProgressSteps } from "@/components/claim/ProgressSteps";
import { ClaimValueSection } from "@/components/claim/ClaimValueSection";
import { DocumentUpload } from "@/components/claim/DocumentUpload";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 p-4 lg:p-8 ml-0">
        <ProgressSteps
          currentStep={currentStep}
          onStepClick={setCurrentStep}
        />

        {/* Form content */}
        <div className="max-w-4xl">
          <h2 className="text-xl font-semibold mb-6">File your Claim</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            <ClaimValueSection />

            {/* Place Section */}
            <div className="space-y-4">
              <h3 className="font-medium">Place</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">
                  Is the place for the proceedings the one mentioned in the agreement?
                </p>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Language Section */}
            <div className="space-y-4">
              <h3 className="font-medium">Language</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">
                  Is the language for the proceedings the one mentioned in the agreement?
                </p>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="lang-yes" />
                    <Label htmlFor="lang-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="lang-no" />
                    <Label htmlFor="lang-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          {/* Document Upload Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-8">
            <DocumentUpload title="Statement" />
            <DocumentUpload title="Agreement under Disputes" />
            <DocumentUpload title="Additional Documentation" />
          </div>
        </div>
      </div>
    </div>
  );
}