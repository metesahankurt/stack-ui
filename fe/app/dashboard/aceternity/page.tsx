import Link from "next/link";
import { Sparkles, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { aceternityRegistry } from "@/lib/aceternity-registry";

export default function AceternityPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Sparkles className="h-8 w-8 text-muted-foreground" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Aceternity UI
          </h1>
          <p className="text-muted-foreground">
            Browse {aceternityRegistry.length} animated components from Aceternity UI.
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aceternityRegistry.map((component) => (
          <Link
            key={component.slug}
            href={`/dashboard/aceternity/${component.slug}`}
            className="group rounded-xl border bg-card p-5 transition-colors hover:border-foreground/20 hover:bg-accent/50"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold group-hover:text-foreground">
                {component.name}
              </h3>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
              {component.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
