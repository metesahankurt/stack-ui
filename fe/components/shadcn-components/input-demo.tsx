"use client"

import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Input type="text" placeholder="Default input" />
      <Input type="email" placeholder="Email address" />
      <Input type="text" placeholder="Disabled input" disabled />
    </div>
  )
}
