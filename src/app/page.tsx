import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { GeistMono } from "geist/font/mono";

const Home = async () => {
  return (
    <div className="flex w-full flex-col items-center justify-center h-screen py-8 lg:py-24">
      <div className="container w-full px-4 md:px-6 flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl text-center">
              NextJS Dashboard Starter
            </h1>
            <p
              className={`${GeistMono.className} text-muted-foreground md:text-2xl font-bold text-center`}
            >
              NextJS, TypeScript, Tailwind CSS, Shadcn/ui.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Button className="max-w-min" asChild>
              <Link href="/login">
                <LogInIcon className="mr-2" size={16} /> Login
              </Link>
            </Button>
            <Button className="max-w-min" asChild>
              <Link href="/register">
                <LogInIcon className="mr-2" size={16} /> Register
              </Link>
            </Button>
            <Button className="max-w-min" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Home;
