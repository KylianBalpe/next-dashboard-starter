"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { LinksType, LinksItemType } from "@/components/data/link-data";
import { ChevronRight, Dot } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function SidebarLinksItem({ link }: { link: LinksType }) {
  return (
    <LinkGroup>
      {link.category && <LinkCategory>{link.category}</LinkCategory>}
      <LinksList>
        {link.links.map((item, index) => (
          <LinksItemList key={index} links={item} />
        ))}
      </LinksList>
    </LinkGroup>
  );
}

export interface LinkGroupProps extends React.HTMLAttributes<HTMLLIElement> {}

const LinkGroup = ({ ...props }: LinkGroupProps) => {
  return <li className="flex w-full flex-col items-start gap-2" {...props} />;
};

export interface LinkCategoryProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const LinkCategory = ({ ...props }: LinkCategoryProps) => {
  return (
    <p
      className="w-full px-4 text-xs font-bold uppercase text-muted-foreground"
      {...props}
    />
  );
};

export interface LinksListProps
  extends React.HTMLAttributes<HTMLUListElement> {}

const LinksList = ({ ...props }: LinksListProps) => {
  return <ul className="flex w-full flex-col" {...props} />;
};

const LinksItemList = ({ links }: { links: LinksItemType }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const Icon = links.icon;

  return links.list?.length && links.list.length > 0 ? (
    <>
      <Button
        variant="ghost"
        className={`text-muted-foreground hover:bg-transparent hover:text-primary ${isOpen ? "text-primary/85" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {Icon && <Icon size={16} className="mr-4" />}
        <span className="leading-none">{links.label}</span>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="ml-auto"
        >
          <ChevronRight size={14} />
        </motion.span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="overflow-hidden"
          >
            {links.list.map((item, index) => (
              <LinksItem key={index} links={item} pathname={pathname} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  ) : (
    <LinksItem links={links} pathname={pathname} />
  );
};

export interface LinksItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const LinksItem = ({
  links,
  pathname,
  ...props
}: {
  links: LinksItemType;
  pathname: string;
} & LinksItemProps) => {
  const Icon = links.icon;

  const isActive =
    links.path === "/" && pathname === "/"
      ? true
      : links.path !== "/" && pathname.startsWith(links.path);

  return (
    <li
      className={`${isActive ? "border-l-primary text-primary" : "border-l-transparent text-muted-foreground"} inline-flex w-full items-center border-l-4 px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in hover:text-primary`}
      {...props}
    >
      <Link href={links.path} className="inline-flex items-center">
        {Icon ? (
          <Icon className="mr-4" size={16} />
        ) : (
          <Dot className="mr-4" size={16} />
        )}
        {links.label}
      </Link>
    </li>
  );
};
