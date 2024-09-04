import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
function Header() {
  return (
    <div className="bg-crimson-400 w-full flex justify-end px-20">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex justify-between items-center">
              About Us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[300px] hover:text-primary-800 ">
                <li className="hover:text-primary-800 bg-crimson-500 w-full">
                  <NavigationMenuLink className="">
                    The Company
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Mission</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>The Founders</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex justify-between items-center">
              ResourcesAbout Us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[300px] ">
                <li>
                  <NavigationMenuLink>Sample Request</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>FAQ </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Policies</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Header;
