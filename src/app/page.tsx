import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const Home = async () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-8 lg:h-screen lg:py-24">
      <div className="container h-full w-full px-4 md:px-6 flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
              Next.js Dashboard Starter
            </h1>
            <p className="text-muted-foreground md:text-xl text-center">
              Initiated by Iqbal Pamula.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Button className="max-w-min" asChild>
              <Link href="/login">
                <LogInIcon className="mr-2" size={16} /> Login
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
