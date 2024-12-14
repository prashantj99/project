"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const currencies = ["USD", "EUR", "GBP", "JPY"];

export function ClaimValueSection() {
  const [contractValue, setContractValue] = useState("");
  const [claimValue, setClaimValue] = useState("");
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Claim Value</h3>
      <div>
        <Label>Contract Value</Label>
        <Input
          type="number"
          value={contractValue}
          onChange={(e) => setContractValue(e.target.value)}
          placeholder="10,000"
          className="mb-2"
        />
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger>
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((curr) => (
              <SelectItem key={curr} value={curr}>
                {curr}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Claim Value</Label>
        <Input
          type="number"
          value={claimValue}
          onChange={(e) => setClaimValue(e.target.value)}
          placeholder="15,000"
          className="mb-2"
        />
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger>
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            {currencies.map((curr) => (
              <SelectItem key={curr} value={curr}>
                {curr}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}