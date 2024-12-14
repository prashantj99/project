"use client";

import { Progress } from "@/components/ui/progress";
import { Scale, FileText, Users, FileCheck, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

export const steps = [
  { id: 1, name: "Preliminary", icon: FileText },
  { id: 2, name: "Your Details", icon: Users },
  { id: 3, name: "KYC", icon: FileCheck },
  { id: 4, name: "Parties", icon: Users },
  { id: 5, name: "Claim", icon: Scale },
  { id: 6, name: "Review", icon: FileText },
  { id: 7, name: "Payment", icon: CreditCard },
];

interface ProgressStepsProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function ProgressSteps({ currentStep, onStepClick }: ProgressStepsProps) {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex justify-between mb-4 min-w-[800px]">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => onStepClick(index)}
            className="flex flex-col items-center group"
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
              index <= currentStep
                ? "bg-blue-600 text-white"
                : "bg-gray-200 group-hover:bg-gray-300"
            )}>
              <step.icon className="w-4 h-4" />
            </div>
            <span className="text-sm mt-2">{step.name}</span>
            <span className="text-xs text-gray-400">(Approx. 5 Min)</span>
          </button>
        ))}
      </div>
      <Progress value={(currentStep / (steps.length - 1)) * 100} className="h-1" />
    </div>
  );
}