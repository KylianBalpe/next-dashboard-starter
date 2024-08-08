import Navbar from "@/components/navigation/header";
import Sidebar from "@/components/navigation/sidebar";

import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Sidebar />
      <div className="sm:pl-48">
        <Navbar />
        <div className="p-4 sm:p-6 bg-secondary">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
