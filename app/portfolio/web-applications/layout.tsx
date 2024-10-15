"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const websitesHomePath = "/portfolio/web-applications";
  return (
    <section>
      <div className="">
        {pathname != websitesHomePath && (
          <Link href="/portfolio/web-applications/">
            <Button variant="outline">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />Back to all apps
            </Button>
          </Link>
        )}

        {children}
      </div>
    </section>
  );
}
