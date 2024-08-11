"use client";

import React from "react";
import { LinksItem } from "@/components/data/link-data";
import SidebarLinksItem from "@/components/ui/sidebar-links";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
      <SidebarHeader>
        <SidebarTitle>Dashboard</SidebarTitle>
      </SidebarHeader>
      <SidebarLinks>
        {LinksItem.map((link, index) => (
          <SidebarLinksItem key={index} link={link} />
        ))}
      </SidebarLinks>
    </aside>
  );
};

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarHeader = ({ className, ...props }: SidebarHeaderProps) => {
  return (
    <div className={cn("flex flex-col border-b py-2", className)} {...props} />
  );
};

interface SidebarTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const SidebarTitle = ({ className, ...props }: SidebarTitleProps) => {
  return (
    <h1
      className={cn(
        "flex h-10 items-center justify-center text-xl font-bold",
        className,
      )}
      {...props}
    />
  );
};

interface SidebarLinksProps extends React.HTMLAttributes<HTMLUListElement> {}

const SidebarLinks = ({ className, ...props }: SidebarLinksProps) => {
  return (
    <ul
      className={cn(
        "flex flex-col items-start gap-4 overflow-auto sm:py-8",
        className,
      )}
      {...props}
    />
  );
};

export default Sidebar;
