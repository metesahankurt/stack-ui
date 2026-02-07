"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FormDemo() {
  return (
    <form className="w-full max-w-sm space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Enter your username" />
        <p className="text-sm text-muted-foreground">
          This is your public display name.
        </p>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
