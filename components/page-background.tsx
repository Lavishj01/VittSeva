"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function PageBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-background relative">
      <BackgroundBeams className="fixed inset-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 