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
import Image from "next/image";

const Page = async () => {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <Card className="w-full md:max-w-md">
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
      <Image
        src="/placeholder.svg"
        alt="placeholder"
        width={1080}
        height={1080}
        className="hidden h-screen overflow-hidden object-cover lg:block"
      />
    </div>
  );
};

export default Page;
