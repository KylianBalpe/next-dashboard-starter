import { HomeIcon, LockIcon, LucideProps, Shield } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type Icon = ForwardRefExoticComponent<
  LucideProps & RefAttributes<SVGSVGElement>
>;

export type LinksItemType = {
  label: string;
  path: string;
  icon?: Icon;
  list?: LinksItemType[];
};

export type LinksType = {
  category?: string;
  links: LinksItemType[];
};

export const LinksItem: LinksType[] = [
  {
    links: [{ label: "Dashboard", path: "/dashboard", icon: HomeIcon }],
  },
  {
    category: "Menu Level",
    links: [
      {
        label: "Menu Level",
        path: "#",
        icon: HomeIcon,
        list: [
          {
            label: "List 1",
            path: "#",
          },
          {
            label: "List 2",
            path: "#",
          },
        ],
      },
    ],
  },
  {
    category: "Account",
    links: [
      { label: "Password", path: "/password", icon: LockIcon },
      { label: "Privacy", path: "/privacy", icon: Shield },
    ],
  },
];
