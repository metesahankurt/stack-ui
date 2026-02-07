"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="/placeholder.svg" alt="User avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
