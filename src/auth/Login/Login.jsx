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

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className=" flex items-center justify-center rounded-2xl px-4">
      <Card className="w-full max-w-md shadow-xl">
        {/* Header */}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">
            Login to BookNest
          </CardTitle>
          <CardDescription>
            Welcome back! Please enter your credentials.
          </CardDescription>
        </CardHeader>

        {/* Content */}
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(handleLogin)}>
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
            <Button className="w-full bg-primary text-primary-content hover:bg-primary/90">
              Login
            </Button>
          </form>
        </CardContent>

        <a
          href="#"
          className="ml-auto inline-block text-sm underline-offset-4 hover:underline px-10">
          Forgot your password?
        </a>

        {/* Footer */}
        <CardFooter className="flex flex-col gap-3">
          <p className="text-sm text-center text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-primary font-medium">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
