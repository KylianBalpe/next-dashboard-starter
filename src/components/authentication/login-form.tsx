"use client";

import React from "react";

import { Input, InputPassword } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import FormGroup from "@/components/ui/form-group";

const LoginForm = () => {
  return (
    <form className="space-y-4">
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="email@example.com" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <InputPassword id="password" placeholder="••••••••" />
      </FormGroup>
      <Button className="w-full" asChild>
        <Link href="/dashboard">Sign in</Link>
      </Button>
      <div className="flex flex-col items-center justify-center">
        <p>Didn&apos;t have account?</p>
        <Button variant={"link"} asChild>
          <Link href="/register">Register here</Link>
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
