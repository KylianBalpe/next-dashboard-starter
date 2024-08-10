"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinksItem } from "@/components/navigation/items";
import { cn } from "@/lib/utils";
import { ChevronRight, Dot, HomeIcon } from "lucide-react";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  const [subItem, setSubItem] = React.useState(false);

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
        <div className="flex flex-col border-b py-2">
          <h1 className="flex h-10 items-center justify-center text-xl font-bold">
            Dashboard
          </h1>
        </div>
        <nav className="flex flex-col items-start gap-4 overflow-auto sm:py-8">
          {LinksItem.map((link, index) => {
            return (
              <LinkGroup key={index}>
                {link.category && <LinkCategory>{link.category}</LinkCategory>}
                <LinkList>
                  {link.links.map((item) => {
                    const isActive =
                      item.path === "/dashboard" && pathname === "/dashboard"
                        ? true
                        : item.path !== "/dashboard" &&
                          pathname.startsWith(item.path!);

                    const Icon = item.icon;
                    return (
                      <React.Fragment key={item.label}>
                        {item.path ? (
                          <Link
                            key={item.label}
                            href={item.path}
                            className={`${isActive ? "border-l-primary text-primary" : "border-l-transparent text-muted-foreground"} inline-flex w-full items-center border-l-4 px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in hover:text-primary`}
                          >
                            {Icon && <Icon className="mr-4 h-4 w-4" />}
                            {item.label}
                          </Link>
                        ) : (
                          <div className="flex w-full flex-col">
                            <Button
                              key={item.label}
                              variant="ghost"
                              className={`text-muted-foreground hover:bg-transparent hover:text-primary ${subItem && "text-primary/85"}`}
                              onClick={() => setSubItem(!subItem)}
                            >
                              {Icon && <Icon className="mr-4 h-4 w-4" />}
                              {item.label}
                              {item.list && (
                                <ChevronRight
                                  className={`ml-auto h-4 w-4 transition-transform duration-100 ease-in-out ${subItem && "rotate-90"}`}
                                />
                              )}
                            </Button>
                            <div
                              className={`flex-col items-start gap-1 ${subItem ? "flex" : "hidden"}`}
                            >
                              {item.list?.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.path || "#"}
                                  className="inline-flex w-full items-center border-l-4 border-l-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 ease-in hover:text-primary"
                                >
                                  <Dot className="mr-4 h-4 w-4" />
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </LinkList>
              </LinkGroup>
            );
          })}

          {/* <LinkGroup>
            <LinkCategory>Main</LinkCategory>
            <LinkList>
              <Link
                href="/"
                className="inline-flex w-full items-center border-l-4 border-l-primary px-3 py-2 text-sm font-medium text-primary transition-colors duration-150 ease-in"
              >
                <HomeIcon className="mr-2 h-5 w-5" />
                Index
              </Link>
              
            </LinkList>
          </LinkGroup> */}
          {/* {LinksItem.map((link, index) => {
            const Icon = link.icon;
            const isActive =
              link.path === "/dashboard" && pathname === "/dashboard"
                ? true
                : link.path !== "/dashboard" && pathname.startsWith(link.path);
            return (
              <Link
                key={index}
                href={link.path}
                className={`flex w-full items-center rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 ease-in hover:rounded-lg hover:bg-accent hover:text-primary ${
                  isActive &&
                  "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                }`}
              >
                <Icon className="mr-4 h-5 w-5" />
                {link.label}
              </Link>
            );
          })} */}
        </nav>
      </aside>
    </>
  );
};

export interface LinkGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const LinkGroup = ({ className, ...props }: LinkGroupProps) => {
  return (
    <div
      className={cn("flex w-full flex-col items-start gap-1", className)}
      {...props}
    />
  );
};

export interface LinkCategoryProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const LinkCategory = ({ className, ...props }: LinkCategoryProps) => {
  return (
    <p
      className={cn(
        "w-full px-4 text-xs font-bold uppercase text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
};

export interface LinkListProps extends React.HTMLAttributes<HTMLUListElement> {}

const LinkList = ({ className, ...props }: LinkListProps) => {
  return (
    <ul className={cn("flex w-full flex-col gap-1", className)} {...props} />
  );
};

export default Sidebar;
