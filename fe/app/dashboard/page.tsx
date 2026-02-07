"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Component,
  ArrowRight,
  FolderOpen,
  Activity,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUsername(payload.id ? `User #${payload.id}` : "");
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back{username ? `, ${username}` : ""}
        </h1>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s an overview of your workspace.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks to get you started.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link
              href="/dashboard/shadcn"
              className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-accent"
            >
              <div className="flex items-center gap-3">
                <Component className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Browse Components</p>
                  <p className="text-xs text-muted-foreground">
                    Explore 44 shadcn/ui components
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link
              href="/dashboard/shadcn/button"
              className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-accent"
            >
              <div className="flex items-center gap-3">
                <FolderOpen className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Button Component</p>
                  <p className="text-xs text-muted-foreground">
                    Start with the most common component
                  </p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </CardContent>
        </Card>

        {/* Project Status */}
        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <CardDescription>
              Current progress of your components.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Components Installed</span>
                <span className="font-medium">44 / 44</span>
              </div>
              <Progress value={100} />
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Demos Created</span>
                <span className="font-medium">44 / 44</span>
              </div>
              <Progress value={100} />
            </div>
            <Separator />
            <div className="flex items-center gap-2">
              <Badge variant="secondary">All components ready</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const statsData = [
  {
    title: "Total Components",
    value: "44",
    change: "All shadcn/ui components",
    icon: Component,
  },
  {
    title: "Projects",
    value: "1",
    change: "Active project",
    icon: FolderOpen,
  },
  {
    title: "Status",
    value: "Active",
    change: "All systems operational",
    icon: Activity,
  },
  {
    title: "Last Updated",
    value: "Now",
    change: "Just now",
    icon: Clock,
  },
];
