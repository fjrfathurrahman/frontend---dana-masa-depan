"use client";

import { Button, Input, InputVariantProps } from "@heroui/react";
import { Select, SelectItem } from "@heroui/select";
import { optionsRole } from "./ModalAdd";
import { useUpdateAdmin } from "@/hooks/admins/useAdmin";
import { useForm } from "react-hook-form";
import { TUpdateAdmin, UpdateAdminSchema } from "@/lib/Schema";
import { zodResolver } from "@hookform/resolvers/zod";

const EditAdmin = ({ params }: { params: string }) => {
  const { mutate, isLoading } = useUpdateAdmin(params);
  const { handleSubmit, register, formState: { errors }, reset } = useForm<TUpdateAdmin>({
    mode: "all",
    // resolver: zodResolver(UpdateAdminSchema),
  })

  const onSubmit = (data: TUpdateAdmin) => {
    const formData = new FormData();

    formData.append("_method", "PUT");
    formData.append("name", data.name as string);
    formData.append("email", data.email as string);
    formData.append("role", data.role as string);
    formData.append("password", data.password as string);
   
    if (data.photo && data?.photo?.length > 0) {
      formData.append("photo", data.photo[0] as File);
    }

    mutate(formData, {
      onSuccess: () => {
        reset();
      }
    });
  }

  const styleDefault: InputVariantProps = {
    variant: "bordered",
    labelPlacement: "outside",
    fullWidth: true,
  };

  return (
      <div className="relative z-30 xl:col-span-7 w-full rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div>
          <h4 className="h4 mb-8">Update Informasi Admin</h4>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                label="Nama"
                placeholder="Nama"
                isInvalid={Boolean(errors.name)}
                errorMessage={errors.name?.message}
                {...styleDefault}
                {...register("name")}
              />
              <Input
                type="email"
                label="Alamat Email"
                placeholder="Email"
                {...styleDefault}
                isInvalid={Boolean(errors.email)}
                errorMessage={errors.email?.message}
                {...register("email")}
              />
              <Select label="Role" placeholder="Pilih role" {...register("role")} {...styleDefault} errorMessage={errors.role?.message} isInvalid={Boolean(errors.role)}>
                {optionsRole?.map((option) => (
                  <SelectItem key={option.key} value={option.key}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
              <Input
                {...styleDefault}
                label="Photo"
                placeholder="Photo"
                type="file"
                isInvalid={Boolean(errors.photo)}
                errorMessage={errors.photo?.message}
                {...register("photo")}
              />
              <Input
                {...styleDefault}
                label="Password"
                placeholder="Masukan Password"
                type="password"
                isInvalid={Boolean(errors.password)}
                errorMessage={errors.password?.message}
                {...register("password")}
              />
              <Input
                {...styleDefault}
                label="Konfirmasi Password"
                placeholder="Konfirmasi Password Anda"
                type="password"
                isInvalid={Boolean(errors.confirmPassword)}
                errorMessage={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
            </div>
            <Button fullWidth className="mt-6" color="primary" type="submit" isLoading={isLoading} isDisabled={isLoading}>
              Simpan
            </Button>
          </form>
        </div>
      </div>
  );
};

export default EditAdmin;
