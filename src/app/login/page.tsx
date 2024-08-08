import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/components/authentication/login-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = async () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4 py-8 md:gap-8 lg:py-24 xl:gap-12">
      <div className="flex flex-col gap-2 xl:gap-4 w-full items-center">
        <Card className="w-full sm:w-1/2 md:max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
        <Button variant={"link"} asChild>
          <Link href="/">Return to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
