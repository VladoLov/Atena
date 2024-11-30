"use client";

import Bacteria from "../lib/bacteria";
import * as LucideIcons from "lucide-react";

const iconMap = {
  Bacteria,
  ...LucideIcons,
};

export function ClientIcon({ name, ...props }) {
  const Icon = iconMap[name] || LucideIcons.HelpCircle;

  return <Icon {...props} />;
}
