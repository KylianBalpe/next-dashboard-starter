"use client";

import React from "react";
import { Input, InputPassword } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import FormGroup from "@/components/ui/form-group";

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="email@example.com" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <InputPassword id="password" placeholder="Password" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <InputPassword id="confirm-password" placeholder="Confirm Password" />
      </FormGroup>
      <Button className="w-full" asChild>
        <Link href="/login">Register</Link>
      </Button>
      <div className="flex flex-col items-center justify-center">
        <p>Already have account?</p>
        <Button variant="link" asChild>
          <Link href="/login">Login here</Link>
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
