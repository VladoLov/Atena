"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Products",
    items: [
      {
        title: "Electronics",
        href: "/products/electronics",
        items: [
          { title: "Smartphones", href: "/products/electronics/smartphones" },
          { title: "Laptops", href: "/products/electronics/laptops" },
          { title: "Tablets", href: "/products/electronics/tablets" },
        ],
      },
      {
        title: "Clothing",
        href: "/products/clothing",
        items: [
          { title: "Men's", href: "/products/clothing/mens" },
          { title: "Women's", href: "/products/clothing/womens" },
          { title: "Kids", href: "/products/clothing/kids" },
        ],
      },
    ],
  },
  {
    title: "Orders",
    href: "/orders",
  },
  {
    title: "Settings",
    href: "/settings",
  },
];

function OneMoreNabbar() {
  return (
    <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center">
      <div className="group flex flex-1 list-none items-center justify-center space-x-1">
        <div className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
          <div className="">Dahsboard</div>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
}
export default OneMoreNabbar;

function SidebarItem({ item }) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (item.items) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between">
            {item.title}
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="ml-4 space-y-2">
          {item.items.map((subItem) => (
            <SidebarItem key={subItem.title} item={subItem} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "block rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      )}
    >
      {item.title}
    </Link>
  );
}
