"use client";

import { use } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { componentRegistry } from "@/lib/component-registry";
import { Skeleton } from "@/components/ui/skeleton";

const demoComponents: Record<string, ReturnType<typeof dynamic>> = {
  accordion: dynamic(() => import("@/components/shadcn-components/accordion-demo"), { loading: () => <DemoSkeleton /> }),
  alert: dynamic(() => import("@/components/shadcn-components/alert-demo"), { loading: () => <DemoSkeleton /> }),
  "alert-dialog": dynamic(() => import("@/components/shadcn-components/alert-dialog-demo"), { loading: () => <DemoSkeleton /> }),
  "aspect-ratio": dynamic(() => import("@/components/shadcn-components/aspect-ratio-demo"), { loading: () => <DemoSkeleton /> }),
  avatar: dynamic(() => import("@/components/shadcn-components/avatar-demo"), { loading: () => <DemoSkeleton /> }),
  badge: dynamic(() => import("@/components/shadcn-components/badge-demo"), { loading: () => <DemoSkeleton /> }),
  breadcrumb: dynamic(() => import("@/components/shadcn-components/breadcrumb-demo"), { loading: () => <DemoSkeleton /> }),
  button: dynamic(() => import("@/components/shadcn-components/button-demo"), { loading: () => <DemoSkeleton /> }),
  calendar: dynamic(() => import("@/components/shadcn-components/calendar-demo"), { loading: () => <DemoSkeleton /> }),
  card: dynamic(() => import("@/components/shadcn-components/card-demo"), { loading: () => <DemoSkeleton /> }),
  carousel: dynamic(() => import("@/components/shadcn-components/carousel-demo"), { loading: () => <DemoSkeleton /> }),
  checkbox: dynamic(() => import("@/components/shadcn-components/checkbox-demo"), { loading: () => <DemoSkeleton /> }),
  collapsible: dynamic(() => import("@/components/shadcn-components/collapsible-demo"), { loading: () => <DemoSkeleton /> }),
  command: dynamic(() => import("@/components/shadcn-components/command-demo"), { loading: () => <DemoSkeleton /> }),
  "context-menu": dynamic(() => import("@/components/shadcn-components/context-menu-demo"), { loading: () => <DemoSkeleton /> }),
  dialog: dynamic(() => import("@/components/shadcn-components/dialog-demo"), { loading: () => <DemoSkeleton /> }),
  drawer: dynamic(() => import("@/components/shadcn-components/drawer-demo"), { loading: () => <DemoSkeleton /> }),
  "dropdown-menu": dynamic(() => import("@/components/shadcn-components/dropdown-menu-demo"), { loading: () => <DemoSkeleton /> }),
  form: dynamic(() => import("@/components/shadcn-components/form-demo"), { loading: () => <DemoSkeleton /> }),
  "hover-card": dynamic(() => import("@/components/shadcn-components/hover-card-demo"), { loading: () => <DemoSkeleton /> }),
  input: dynamic(() => import("@/components/shadcn-components/input-demo"), { loading: () => <DemoSkeleton /> }),
  "input-otp": dynamic(() => import("@/components/shadcn-components/input-otp-demo"), { loading: () => <DemoSkeleton /> }),
  label: dynamic(() => import("@/components/shadcn-components/label-demo"), { loading: () => <DemoSkeleton /> }),
  menubar: dynamic(() => import("@/components/shadcn-components/menubar-demo"), { loading: () => <DemoSkeleton /> }),
  "navigation-menu": dynamic(() => import("@/components/shadcn-components/navigation-menu-demo"), { loading: () => <DemoSkeleton /> }),
  pagination: dynamic(() => import("@/components/shadcn-components/pagination-demo"), { loading: () => <DemoSkeleton /> }),
  popover: dynamic(() => import("@/components/shadcn-components/popover-demo"), { loading: () => <DemoSkeleton /> }),
  progress: dynamic(() => import("@/components/shadcn-components/progress-demo"), { loading: () => <DemoSkeleton /> }),
  "radio-group": dynamic(() => import("@/components/shadcn-components/radio-group-demo"), { loading: () => <DemoSkeleton /> }),
  resizable: dynamic(() => import("@/components/shadcn-components/resizable-demo"), { loading: () => <DemoSkeleton /> }),
  "scroll-area": dynamic(() => import("@/components/shadcn-components/scroll-area-demo"), { loading: () => <DemoSkeleton /> }),
  select: dynamic(() => import("@/components/shadcn-components/select-demo"), { loading: () => <DemoSkeleton /> }),
  separator: dynamic(() => import("@/components/shadcn-components/separator-demo"), { loading: () => <DemoSkeleton /> }),
  sheet: dynamic(() => import("@/components/shadcn-components/sheet-demo"), { loading: () => <DemoSkeleton /> }),
  sidebar: dynamic(() => import("@/components/shadcn-components/sidebar-demo"), { loading: () => <DemoSkeleton /> }),
  skeleton: dynamic(() => import("@/components/shadcn-components/skeleton-demo"), { loading: () => <DemoSkeleton /> }),
  slider: dynamic(() => import("@/components/shadcn-components/slider-demo"), { loading: () => <DemoSkeleton /> }),
  switch: dynamic(() => import("@/components/shadcn-components/switch-demo"), { loading: () => <DemoSkeleton /> }),
  table: dynamic(() => import("@/components/shadcn-components/table-demo"), { loading: () => <DemoSkeleton /> }),
  tabs: dynamic(() => import("@/components/shadcn-components/tabs-demo"), { loading: () => <DemoSkeleton /> }),
  textarea: dynamic(() => import("@/components/shadcn-components/textarea-demo"), { loading: () => <DemoSkeleton /> }),
  toggle: dynamic(() => import("@/components/shadcn-components/toggle-demo"), { loading: () => <DemoSkeleton /> }),
  "toggle-group": dynamic(() => import("@/components/shadcn-components/toggle-group-demo"), { loading: () => <DemoSkeleton /> }),
  tooltip: dynamic(() => import("@/components/shadcn-components/tooltip-demo"), { loading: () => <DemoSkeleton /> }),
};

function DemoSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-32 w-full" />
    </div>
  );
}

export default function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const entry = componentRegistry.find((c) => c.slug === slug);
  const DemoComponent = demoComponents[slug];

  if (!entry || !DemoComponent) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Component not found</h1>
        <Button variant="outline" asChild>
          <Link href="/dashboard/shadcn">
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
          <Link href="/dashboard/shadcn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to components
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{entry.name}</h1>
          <p className="mt-1 text-muted-foreground">{entry.description}</p>
        </div>
      </div>
      <div className="rounded-xl border bg-card p-6">
        <DemoComponent />
      </div>
    </div>
  );
}
