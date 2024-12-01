"use client";
import Bacteria from "../lib/bacteria";
import * as LucideIcons from "lucide-react";

const iconMap = {
  Bacteria,
  ...LucideIcons,
};

export function IconWrapper({ icon, className }) {
  const Icon = typeof icon === "string" ? iconMap[icon] : icon;

  if (!Icon) {
    console.warn(`Icon not found: ${icon}`);
    return null;
  }

  return <Icon className={className} />;
}
