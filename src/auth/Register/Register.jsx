import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <div className=" flex items-center justify-center rounded-2xl px-4">
      <Card className="w-full max-w-md shadow-xl">
        {/* Header */}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">
            Register to BookNest
          </CardTitle>
          <CardDescription>
            Welcome to BookNest! Please enter your credentials.
          </CardDescription>
        </CardHeader>

        {/* Content */}
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(handleRegister)}>
            <Label htmlFor="name">Your Name</Label>

            <Input
              {...register("name", { required: true })}
              type="text"
              placeholder="@your name"
              className="my-3"
            />

            {errors.name?.type === "required" && (
              <p className="text-red-500">This field is required</p>
            )}
            <Label htmlFor="email">Your email address</Label>
            <Input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email address"
              className="my-3"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">This field is required</p>
            )}
            <div>
              <Label htmlFor="password">Your Password</Label>

              <Input
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
                className="my-3"
              />

              {errors.password?.type === "required" && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <Button className="w-full bg-primary cursor-pointer text-primary-content hover:bg-primary/90">
              Register
            </Button>
          </form>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex flex-col gap-3">
          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="text-primary font-medium">
              Sign in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
