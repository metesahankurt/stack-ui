
export interface ComponentEntry {
  slug: string;
  name: string;
  description: string;
  installCommand?: string;
  code?: string;
}

export const componentRegistry: ComponentEntry[] = [
  { slug: "accordion", name: "Accordion", description: "A vertically stacked set of interactive headings that each reveal a section of content." },
  { slug: "alert", name: "Alert", description: "Displays a callout for user attention." },
  { slug: "alert-dialog", name: "Alert Dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
  { slug: "aspect-ratio", name: "Aspect Ratio", description: "Displays content within a desired ratio." },
  { slug: "avatar", name: "Avatar", description: "An image element with a fallback for representing the user." },
  { slug: "badge", name: "Badge", description: "Displays a badge or a component that looks like a badge." },
  { slug: "breadcrumb", name: "Breadcrumb", description: "Displays the path to the current resource using a hierarchy of links." },
  { slug: "button", name: "Button", description: "Displays a button or a component that looks like a button." },
  { slug: "calendar", name: "Calendar", description: "A date field component that allows users to enter and edit date." },
  { slug: "card", name: "Card", description: "Displays a card with header, content, and footer." },
  { slug: "carousel", name: "Carousel", description: "A carousel with motion and swipe built using Embla." },
  { slug: "checkbox", name: "Checkbox", description: "A control that allows the user to toggle between checked and not checked." },
  { slug: "collapsible", name: "Collapsible", description: "An interactive component which expands/collapses a panel." },
  { slug: "command", name: "Command", description: "Fast, composable, unstyled command menu for React." },
  { slug: "context-menu", name: "Context Menu", description: "Displays a menu to the user — such as a set of actions or functions — triggered by a right click." },
  { slug: "dialog", name: "Dialog", description: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert." },
  { slug: "drawer", name: "Drawer", description: "A drawer component for React." },
  { slug: "dropdown-menu", name: "Dropdown Menu", description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button." },
  { slug: "form", name: "Form", description: "Building forms with React Hook Form and Zod." },
  { slug: "hover-card", name: "Hover Card", description: "For sighted users to preview content available behind a link." },
  { slug: "input", name: "Input", description: "Displays a form input field or a component that looks like an input field." },
  { slug: "input-otp", name: "Input OTP", description: "Accessible one-time password component with copy paste functionality." },
  { slug: "label", name: "Label", description: "Renders an accessible label associated with controls." },
  { slug: "menubar", name: "Menubar", description: "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands." },
  { slug: "navigation-menu", name: "Navigation Menu", description: "A collection of links for navigating websites." },
  { slug: "pagination", name: "Pagination", description: "Pagination with page navigation, next and previous links." },
  { slug: "popover", name: "Popover", description: "Displays rich content in a portal, triggered by a button." },
  { slug: "progress", name: "Progress", description: "Displays an indicator showing the completion progress of a task." },
  { slug: "radio-group", name: "Radio Group", description: "A set of checkable buttons — known as radio buttons — where no more than one of the buttons can be checked at a time." },
  { slug: "resizable", name: "Resizable", description: "Accessible resizable panel groups and layouts with keyboard support." },
  { slug: "scroll-area", name: "Scroll Area", description: "Augments native scroll functionality for custom, cross-browser styling." },
  { slug: "select", name: "Select", description: "Displays a list of options for the user to pick from — triggered by a button." },
  { slug: "separator", name: "Separator", description: "Visually or semantically separates content." },
  { slug: "sheet", name: "Sheet", description: "Extends the Dialog component to display content that complements the main content of the screen." },
  { slug: "sidebar", name: "Sidebar", description: "A composable, themeable and customizable sidebar component." },
  { slug: "skeleton", name: "Skeleton", description: "Use to show a placeholder while content is loading." },
  { slug: "slider", name: "Slider", description: "An input where the user selects a value from within a given range." },
  { slug: "switch", name: "Switch", description: "A control that allows the user to toggle between a checked and not checked state." },
  { slug: "table", name: "Table", description: "A responsive table component." },
  { slug: "tabs", name: "Tabs", description: "A set of layered sections of content — known as tab panels — that are displayed one at a time." },
  { slug: "textarea", name: "Textarea", description: "Displays a form textarea or a component that looks like a textarea." },
  { slug: "toggle", name: "Toggle", description: "A two-state button that can be either on or off." },
  { slug: "toggle-group", name: "Toggle Group", description: "A set of two-state buttons that can be toggled on or off." },
  { slug: "tooltip", name: "Tooltip", description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it." },
];
