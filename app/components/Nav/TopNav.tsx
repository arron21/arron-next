"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export const engineeringItems = [
    {
        label: 'Frontend',
        icon: 'pi pi-fw pi-upload',
        url: '/engineering/frontend',
        description: 'The stuff you do see'
    },
    {
      label: 'Angular',
      icon: 'pi pi-fw pi-upload',
      url: '/engineering/angular',
      description: 'An amazing framework'

  },
  {
    label: 'React',
    icon: 'pi pi-fw pi-upload',
    url: '/engineering/react',
    description: 'An overly popular framework'

  },
  {
    label: 'Vue',
    icon: 'pi pi-fw pi-upload',
    url: '/engineering/vue',
    description: 'A pretty cool framework'

  },
  {
    label: 'UI/UX',
    icon: 'pi pi-fw pi-upload',
    url: '/engineering/ui-ux',
    description: 'More than just colors and fonts'

  },
    {
        label: 'Backend',
        icon: 'pi pi-fw pi-search',
        url: '/engineering/backend',
        description: "The stuff you don't see"

    },
    {
      label: 'Design',
      icon: 'pi pi-fw pi-search',
      url: '/engineering/design',
      description: 'A process that connects all pieces of a goal'

    }
  ]
  


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Photography",
    href: "/skills/photography",
    description:
      "A picture is worth a thousand words.",
  },
  {
    title: "Project Management",
    href: "/skills/project-management",
    description:
      "You have to be run by ideas, not hierarchy.",
  },
  
]

export default function TopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Engineering</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {engineeringItems.map((component) => (
                <ListItem
                  key={component.label}
                  title={component.label}
                  href={component.url}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Skills</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
