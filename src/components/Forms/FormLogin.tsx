"use client";

import React from "react";
import { Button, Input, Checkbox, Link } from "@heroui/react";
import { icons } from "@/resource/icons";
import { FormProvider, useForm } from "react-hook-form";
import { loginSchema, TLogin } from "@/lib/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginStudent } from "@/hooks/students/useStudent";


const FormLogin = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const { isLoading, mutate } = useLoginStudent();
  const methods = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: TLogin) => {
    mutate(data);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="rounded-large flex w-full max-w-xl flex-col gap-4 sm:px-8 pb-10 pt-6">
        <div>
          <h4 className="h4 mb-2">Sign In Admin</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        
        <FormProvider {...methods}>
          <form className="mt-4 flex flex-col gap-4" onSubmit={methods.handleSubmit(onSubmit)}>
            <Input
              isRequired
              label="Email"
              labelPlacement="outside"
              placeholder="Masukan email Anda"
              type="email"
              variant="bordered"
              isInvalid={Boolean(methods.formState.errors.email?.message)}
              errorMessage={methods.formState.errors.email?.message}
              {...methods.register("email")}
            />
            <Input
              isRequired
              endContent={
                <button type="button" onClick={toggleVisibility}>
                  {isVisible ? icons.eye : icons.eyeOff}
                </button>
              }
              label="Password"
              labelPlacement="outside"
              placeholder="Masukan password Anda"
              type={isVisible ? "text" : "password"}
              variant="bordered"
              isInvalid={Boolean(methods.formState.errors.password?.message)}
              errorMessage={methods.formState.errors.password?.message}
              {...methods.register("password")}
            />
            <div className="flex w-full items-center justify-between px-1 py-2">
              <Checkbox defaultSelected name="remember" size="sm">
                Remember me
              </Checkbox>
              <Link className="text-default-500" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
            <Button fullWidth color="primary" type="submit" isLoading={isLoading} isDisabled={isLoading}>
              Log In
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default FormLogin;
