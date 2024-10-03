"use client";
/* import Link from "next/link";
import { useState } from "react";

export default function MedicalServicesNavbar() {
  const services = [
    {
      title: "Oncology",
      href: "/oncology",
      items: [
        { title: "Breast Cancer", href: "/oncology/breast-cancer" },
        { title: "Lung Cancer", href: "/oncology/lung-cancer" },
      ],
    },
    {
      title: "Cardiology",
      href: "/cardiology",
      items: [
        { title: "Heart Surgery", href: "/cardiology/heart-surgery" },
        { title: "Cardiac Rehab", href: "/cardiology/cardiac-rehab" },
      ],
    },
    // Add more services here...
  ];
  // State to manage dropdowns
  const [openMenu, setOpenMenu] = useState(null); // Keeps track of which dropdown is open

  // Toggle the menu visibility
  const handleMenuToggle = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex space-x-8 p-4">
        <li className="relative group">
          
          <button
            className="text-gray-700 font-semibold hover:text-orange-500 focus:outline-none"
            onClick={() => handleMenuToggle("services")}
          >
            Services
          </button>
         
          {openMenu === "services" && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
              {services.map((service, index) => (
                <li key={service.title} className="group relative">
                  <Link
                    href={service.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                  >
                    {service.title}
                  </Link>
                  
                  {service.items && (
                    <button
                      className="absolute top-2 right-3 text-gray-500 hover:text-orange-600"
                      onClick={() => handleMenuToggle(index)}
                    >
                      ▼
                    </button>
                  )}
                  {openMenu === index && (
                    <ul className="absolute left-48 top-0 mt-0 w-48 bg-white shadow-lg rounded-md">
                      {service.items.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <Link
            href="/projects"
            className="text-gray-700 font-semibold hover:text-orange-500"
          >
            My Projects
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}
 */

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Ensure this is client-safe
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define services with their sub-items
const services = [
  {
    title: "Services",
    items: [
      {
        title: "Oncology",
        href: "/services/oncology",
        items: [
          { title: "OncoPanel", href: "/services/oncology/oncopanel" },
          { title: "Cancer", href: "/services/oncology/cancer" },
        ],
      },
      {
        title: "Genopathy",
        href: "/services/genopathy",
      },
      {
        title: "Cardiopathy",
        href: "/services/cardiopathy",
      },
      {
        title: "Perinatal",
        href: "/services/perinatal",
      },
      {
        title: "Pharmacogenetics",
        href: "/services/pharmacogenetics",
      },
      {
        title: "Hereditary screening",
        href: "/services/hereditary-screening",
      },
      {
        title: "Pathogenomics",
        href: "/services/pathogenomics",
      },
    ],
  },
];

// Functional Advanced Navigation Menu
export function AdvancedNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* Main list of services */}
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {services[0].items.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.items && (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center text-sm">
                        {/* Chevron for sub-menu */}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {/* Sub-items of each service */}
                        {service.items.map((subItem) => (
                          <DropdownMenuItem key={subItem.title}>
                            <Link href={subItem.href} className="w-full">
                              {subItem.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Other menu items */}
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              My Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// List item component to handle each service item
const ListItem = ({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "flex select-none items-center space-x-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
