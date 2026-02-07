import Link from "next/link";
import { Component } from "lucide-react";
import { componentRegistry } from "@/lib/component-registry";

export default function ShadcnPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Component className="h-8 w-8 text-muted-foreground" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            shadcn/ui Components
          </h1>
          <p className="text-muted-foreground">
            Browse and preview all available components.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {componentRegistry.map((component) => (
          <Link
            key={component.slug}
            href={`/dashboard/shadcn/${component.slug}`}
            className="group rounded-xl border bg-card p-5 transition-colors hover:border-foreground/20 hover:bg-accent/50"
          >
            <h3 className="font-semibold group-hover:text-foreground">
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
