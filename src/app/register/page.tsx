import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm from "@/components/authentication/register-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = async () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4 py-8 md:gap-8 lg:py-24 xl:gap-12">
      <div className="flex flex-col gap-2 xl:gap-4 w-full items-center">
        <Card className="w-full sm:w-10/12 md:max-w-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Register</CardTitle>
            <CardDescription>Register to access the dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
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
