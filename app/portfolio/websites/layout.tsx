"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const websitesHomePath = "/portfolio/websites";
  return (
    <section>
      <div className="">
        {pathname != websitesHomePath && (
          <Button variant="outline">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />{" "}
            <Link href="/portfolio/websites/">Back to all websites</Link>
          </Button>
        )}
        {children}
      </div>
    </section>
  );
}
