"use client";

import { useChangePassword } from "@/hooks/useAuth";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const { mutate, isLoading } = useChangePassword();
  const { formState, register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    mutate({
      email: data.email,
      old_password: data.old_password,
      new_password: data.new_password,
      role: data.role,
    });
  };

  return (
    <div>
      <div className="pb-4">
        <h3 className="text-xl font-semibold text-dark dark:text-white">Ubah Password Akun</h3>
        <p className="text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nisi!</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 flex flex-col gap-4">
          <Input
            label="Email Anda"
            placeholder="Masukan Email Anda"
            variant="bordered"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.email?.message)}
            errorMessage={formState.errors.email?.message as string}
            {...register("email")}
          />
          <Input
            label="Password Lama"
            placeholder="Masukan Password Lama Anda"
            variant="bordered"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.old_password?.message)}
            errorMessage={formState.errors.old_password?.message as string}
            {...register("old_password")}
          />
          <Input
            label="Password Baru"
            placeholder="Masukan Password Baru Anda"
            variant="bordered"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.new_password?.message)}
            errorMessage={formState.errors.new_password?.message as string}
            {...register("new_password")}
          />
          <Select
            label="Role"
            placeholder="Pilih Role Anda"
            variant="bordered"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.role?.message)}
            errorMessage={formState.errors.role?.message as string}
            {...register("role")}
          >
            {[
              { key: "admin", label: "Admin" },
              { key: "student", label: "Siswa" },
            ].map((item) => (
              <SelectItem key={item.key}>{item.label}</SelectItem>
            ))}
          </Select>
        </div>
        <Button fullWidth color="primary" type="submit" isDisabled={isLoading} isLoading={isLoading}>
          Simpan
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
