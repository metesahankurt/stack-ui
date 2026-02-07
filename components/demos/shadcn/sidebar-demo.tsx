"use client";

import { Component } from "lucide-react";

export default function SidebarDemo() {
  return (
    <div className="flex items-center gap-3 rounded-md border p-4">
      <Component className="h-6 w-6 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">
        Sidebar component is used in the dashboard layout
      </p>
    </div>
  );
}
