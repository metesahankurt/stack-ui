import Link from "next/link";
import { Component } from "lucide-react";
import { componentRegistry } from "@/lib/registries/shadcn";

export default function ShadcnPage() {
  return (
    <div className="space-y-6 px-4 sm:px-0 sm:space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <Component className="h-7 w-7 sm:h-8 sm:w-8 text-muted-foreground" />
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight wrap-break-word">
            shadcn/ui Components
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Browse and preview all available components.
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {componentRegistry.map((component) => (
          <Link
            key={component.slug}
            href={`/dashboard/shadcn/${component.slug}`}
            className="group rounded-xl border bg-card p-4 sm:p-5 transition-colors hover:border-foreground/20 hover:bg-accent/50"
          >
            <h3 className="font-semibold group-hover:text-foreground wrap-break-word">
              {component.name}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
              {component.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
