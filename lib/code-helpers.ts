import fs from "fs";
import path from "path";

export function getComponentCode(slug: string): string {
  try {
    const filePath = path.join(
      process.cwd(),
      "components",
      "demos",
      "shadcn",
      `${slug}-demo.tsx`
    );
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "// Code not available";
  }
}

export function getInstallCommand(slug: string): string | undefined {
  // Map of components that require installation
  const installCommands: Record<string, string> = {
    accordion: "npx shadcn@latest add accordion",
    alert: "npx shadcn@latest add alert",
    "alert-dialog": "npx shadcn@latest add alert-dialog",
    "aspect-ratio": "npx shadcn@latest add aspect-ratio",
    avatar: "npx shadcn@latest add avatar",
    badge: "npx shadcn@latest add badge",
    breadcrumb: "npx shadcn@latest add breadcrumb",
    button: "npx shadcn@latest add button",
    calendar: "npx shadcn@latest add calendar",
    card: "npx shadcn@latest add card",
    carousel: "npx shadcn@latest add carousel",
    checkbox: "npx shadcn@latest add checkbox",
    collapsible: "npx shadcn@latest add collapsible",
    command: "npx shadcn@latest add command",
    "context-menu": "npx shadcn@latest add context-menu",
    dialog: "npx shadcn@latest add dialog",
    drawer: "npx shadcn@latest add drawer",
    "dropdown-menu": "npx shadcn@latest add dropdown-menu",
    form: "npx shadcn@latest add form",
    "hover-card": "npx shadcn@latest add hover-card",
    input: "npx shadcn@latest add input",
    "input-otp": "npx shadcn@latest add input-otp",
    label: "npx shadcn@latest add label",
    menubar: "npx shadcn@latest add menubar",
    "navigation-menu": "npx shadcn@latest add navigation-menu",
    pagination: "npx shadcn@latest add pagination",
    popover: "npx shadcn@latest add popover",
    progress: "npx shadcn@latest add progress",
    "radio-group": "npx shadcn@latest add radio-group",
    resizable: "npx shadcn@latest add resizable",
    "scroll-area": "npx shadcn@latest add scroll-area",
    select: "npx shadcn@latest add select",
    separator: "npx shadcn@latest add separator",
    sheet: "npx shadcn@latest add sheet",
    sidebar: "npx shadcn@latest add sidebar",
    skeleton: "npx shadcn@latest add skeleton",
    slider: "npx shadcn@latest add slider",
    switch: "npx shadcn@latest add switch",
    table: "npx shadcn@latest add table",
    tabs: "npx shadcn@latest add tabs",
    textarea: "npx shadcn@latest add textarea",
    toggle: "npx shadcn@latest add toggle",
    "toggle-group": "npx shadcn@latest add toggle-group",
    tooltip: "npx shadcn@latest add tooltip",
  };

  return installCommands[slug];
}
