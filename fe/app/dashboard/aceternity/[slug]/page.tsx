"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { aceternityRegistry } from "@/lib/aceternity-registry";

export default function AceternityComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const entry = aceternityRegistry.find((c) => c.slug === slug);

  if (!entry) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Component not found</h1>
        <Button variant="outline" asChild>
          <Link href="/dashboard/aceternity">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to components
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/aceternity">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to components
          </Link>
        </Button>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {entry.name}
            </h1>
            <p className="mt-1 text-muted-foreground">{entry.description}</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href={entry.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Docs
            </a>
          </Button>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Aceternity UI</Badge>
          <Badge variant="outline">Animated</Badge>
        </div>
        <Separator />
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Installation</h3>
          <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
            <code>npx aceternity-ui@latest add {entry.slug}</code>
          </pre>
        </div>
        <Separator />
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Documentation</h3>
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            {entry.url}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
