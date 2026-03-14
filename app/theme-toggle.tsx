"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun />
      {/* <MoonIcon /> */}
    </Button>
  );
}
