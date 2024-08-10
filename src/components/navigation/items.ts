import { HomeIcon, LockIcon, LucideProps, Shield } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type LinksItemType = {
  category?: string;
  links: Array<{
    label: string;
    path?: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    list?: Array<{ label: string; path?: string }>;
  }>;
};

export const LinksItem: LinksItemType[] = [
  {
    links: [{ label: "Dashboard", path: "/dashboard", icon: HomeIcon }],
  },
  {
    category: "Menu Level",
    links: [
      {
        label: "Menu Level",
        icon: HomeIcon,
        list: [
          {
            label: "List 1",
            path: "/list1",
          },
          {
            label: "List 2",
            path: "/list2",
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
