import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { componentRegistry } from "@/lib/registries/shadcn";
import { Skeleton } from "@/components/ui/skeleton";
import { getComponentCode, getInstallCommand } from "@/lib/code-helpers";
import { CodeBlock } from "@/components/shared/code-block";

const demoComponents: Record<string, ReturnType<typeof dynamic>> = {
  accordion: dynamic(() => import("@/components/demos/shadcn/accordion-demo"), { loading: () => <DemoSkeleton /> }),
  alert: dynamic(() => import("@/components/demos/shadcn/alert-demo"), { loading: () => <DemoSkeleton /> }),
  "alert-dialog": dynamic(() => import("@/components/demos/shadcn/alert-dialog-demo"), { loading: () => <DemoSkeleton /> }),
  "aspect-ratio": dynamic(() => import("@/components/demos/shadcn/aspect-ratio-demo"), { loading: () => <DemoSkeleton /> }),
  avatar: dynamic(() => import("@/components/demos/shadcn/avatar-demo"), { loading: () => <DemoSkeleton /> }),
  badge: dynamic(() => import("@/components/demos/shadcn/badge-demo"), { loading: () => <DemoSkeleton /> }),
  breadcrumb: dynamic(() => import("@/components/demos/shadcn/breadcrumb-demo"), { loading: () => <DemoSkeleton /> }),
  button: dynamic(() => import("@/components/demos/shadcn/button-demo"), { loading: () => <DemoSkeleton /> }),
  calendar: dynamic(() => import("@/components/demos/shadcn/calendar-demo"), { loading: () => <DemoSkeleton /> }),
  card: dynamic(() => import("@/components/demos/shadcn/card-demo"), { loading: () => <DemoSkeleton /> }),
  carousel: dynamic(() => import("@/components/demos/shadcn/carousel-demo"), { loading: () => <DemoSkeleton /> }),
  checkbox: dynamic(() => import("@/components/demos/shadcn/checkbox-demo"), { loading: () => <DemoSkeleton /> }),
  collapsible: dynamic(() => import("@/components/demos/shadcn/collapsible-demo"), { loading: () => <DemoSkeleton /> }),
  command: dynamic(() => import("@/components/demos/shadcn/command-demo"), { loading: () => <DemoSkeleton /> }),
  "context-menu": dynamic(() => import("@/components/demos/shadcn/context-menu-demo"), { loading: () => <DemoSkeleton /> }),
  dialog: dynamic(() => import("@/components/demos/shadcn/dialog-demo"), { loading: () => <DemoSkeleton /> }),
  drawer: dynamic(() => import("@/components/demos/shadcn/drawer-demo"), { loading: () => <DemoSkeleton /> }),
  "dropdown-menu": dynamic(() => import("@/components/demos/shadcn/dropdown-menu-demo"), { loading: () => <DemoSkeleton /> }),
  form: dynamic(() => import("@/components/demos/shadcn/form-demo"), { loading: () => <DemoSkeleton /> }),
  "hover-card": dynamic(() => import("@/components/demos/shadcn/hover-card-demo"), { loading: () => <DemoSkeleton /> }),
  input: dynamic(() => import("@/components/demos/shadcn/input-demo"), { loading: () => <DemoSkeleton /> }),
  "input-otp": dynamic(() => import("@/components/demos/shadcn/input-otp-demo"), { loading: () => <DemoSkeleton /> }),
  label: dynamic(() => import("@/components/demos/shadcn/label-demo"), { loading: () => <DemoSkeleton /> }),
  menubar: dynamic(() => import("@/components/demos/shadcn/menubar-demo"), { loading: () => <DemoSkeleton /> }),
  "navigation-menu": dynamic(() => import("@/components/demos/shadcn/navigation-menu-demo"), { loading: () => <DemoSkeleton /> }),
  pagination: dynamic(() => import("@/components/demos/shadcn/pagination-demo"), { loading: () => <DemoSkeleton /> }),
  popover: dynamic(() => import("@/components/demos/shadcn/popover-demo"), { loading: () => <DemoSkeleton /> }),
  progress: dynamic(() => import("@/components/demos/shadcn/progress-demo"), { loading: () => <DemoSkeleton /> }),
  "radio-group": dynamic(() => import("@/components/demos/shadcn/radio-group-demo"), { loading: () => <DemoSkeleton /> }),
  resizable: dynamic(() => import("@/components/demos/shadcn/resizable-demo"), { loading: () => <DemoSkeleton /> }),
  "scroll-area": dynamic(() => import("@/components/demos/shadcn/scroll-area-demo"), { loading: () => <DemoSkeleton /> }),
  select: dynamic(() => import("@/components/demos/shadcn/select-demo"), { loading: () => <DemoSkeleton /> }),
  separator: dynamic(() => import("@/components/demos/shadcn/separator-demo"), { loading: () => <DemoSkeleton /> }),
  sheet: dynamic(() => import("@/components/demos/shadcn/sheet-demo"), { loading: () => <DemoSkeleton /> }),
  sidebar: dynamic(() => import("@/components/demos/shadcn/sidebar-demo"), { loading: () => <DemoSkeleton /> }),
  skeleton: dynamic(() => import("@/components/demos/shadcn/skeleton-demo"), { loading: () => <DemoSkeleton /> }),
  slider: dynamic(() => import("@/components/demos/shadcn/slider-demo"), { loading: () => <DemoSkeleton /> }),
  switch: dynamic(() => import("@/components/demos/shadcn/switch-demo"), { loading: () => <DemoSkeleton /> }),
  table: dynamic(() => import("@/components/demos/shadcn/table-demo"), { loading: () => <DemoSkeleton /> }),
  tabs: dynamic(() => import("@/components/demos/shadcn/tabs-demo"), { loading: () => <DemoSkeleton /> }),
  textarea: dynamic(() => import("@/components/demos/shadcn/textarea-demo"), { loading: () => <DemoSkeleton /> }),
  toggle: dynamic(() => import("@/components/demos/shadcn/toggle-demo"), { loading: () => <DemoSkeleton /> }),
  "toggle-group": dynamic(() => import("@/components/demos/shadcn/toggle-group-demo"), { loading: () => <DemoSkeleton /> }),
  tooltip: dynamic(() => import("@/components/demos/shadcn/tooltip-demo"), { loading: () => <DemoSkeleton /> }),
};

function DemoSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-32 w-full" />
    </div>
  );
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = (await params);
  const entry = componentRegistry.find((c) => c.slug === slug);
  const DemoComponent = demoComponents[slug];
  
  const componentCode = getComponentCode(slug);
  const installCommand = getInstallCommand(slug);

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
    <div className="space-y-6 px-4 sm:px-0 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/shadcn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to components
          </Link>
        </Button>
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight wrap-break-word">{entry.name}</h1>
          <p className="mt-1 text-sm sm:text-base text-muted-foreground wrap-break-word">{entry.description}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Preview</h2>
        <div className="rounded-xl border bg-card p-4 sm:p-6 overflow-x-auto">
          <DemoComponent />
        </div>
      </div>

      {installCommand && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Installation</h2>
          <CodeBlock code={installCommand} language="bash" />
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Code</h2>
        <CodeBlock code={componentCode} language="tsx" />
      </div>
    </div>
  );
}
