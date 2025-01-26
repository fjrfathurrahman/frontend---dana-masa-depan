"use client";

import { useUpdateStudent } from "@/hooks/students/useStudent";
import { TUpdateStudent } from "@/lib/Schema";
import { options } from "@/resource";
import {
  Button,
  Input,
  InputVariantProps,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { useForm } from "react-hook-form";

const EditStudent = ({ params }: { params: string }) => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm<TUpdateStudent>();
  const { mutate, isLoading } = useUpdateStudent(params);

  const onSubmit = (data: TUpdateStudent) => {
    console.log(data);

    const formData = new FormData();

    formData.append("_method", "PUT");
    formData.append("name", data.name as string);
    formData.append("student_number", data.student_number as string);
    formData.append("class", data.class as string);
    formData.append("gender", data.gender as string);
    formData.append("major", data.major as string);
    formData.append("phone", data.phone as string);
    formData.append("email", data.email as string);
    formData.append("address", data.address as string);
    if (data.photo && data?.photo?.length > 0) {
      formData.append("photo", data.photo[0] as File);
    }

    mutate(formData, {
      onSuccess: () => {
        reset();
      },
    });
  }

  const styleDefault: InputVariantProps = {
    variant: "bordered",
    labelPlacement: "outside",
    fullWidth: true,
  };

  return (
    <div className="relative z-30 w-full rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-8">
      <div>
        <h4 className="h4 mb-8">Update Informasi Siswa</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              label="NISN"
              placeholder="NISN"
              {...styleDefault}
              isInvalid={Boolean(errors.student_number)}
              errorMessage={errors.student_number?.message}
              {...register("student_number")}
            />
            <Input
              type="text"
              label="Nama"
              placeholder="Nama"
              isInvalid={Boolean(errors.name)}
              errorMessage={errors.name?.message}
              {...register("name")}
              {...styleDefault}
            />

            <Select
              label="Jenis Kelamin"
              placeholder="Pilih jenis kelamin"
              {...styleDefault}
              isInvalid={Boolean(errors.gender)}
              errorMessage={errors.gender?.message}
              {...register("gender")}
            >
              {options.gender?.map((option) => (
                <SelectItem key={option.key} value={option.key}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>

            <Select label="Kelas" placeholder="Pilih kelas" {...styleDefault} {...register("class")}>
              {options.class?.map((option) => (
                <SelectItem key={option.key} value={option.key}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>

            <Select
              label="Jurusan"
              placeholder="Pilih jurusan"
              {...styleDefault}
              {...register("major")}
            >
              {options.major?.map((option) => (
                <SelectItem key={option.key} value={option.key}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>

            <Input
              {...styleDefault}
              label="Alamat Email"
              placeholder="Email"
              type="email"
              {...register("email")}
            />

            <Input
              {...styleDefault}
              label="No Handphone"
              placeholder="No handphone"
              type="number"
              {...register("phone")}
            />

            <Input
              {...styleDefault}
              label="Photo"
              placeholder="Photo"
              type="file"
              {...register("photo")}
            />

            <Textarea
              {...styleDefault}
              label="Alamat"
              placeholder="Alamat Siswa"
              type="text"
              {...register("address")}
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

export default EditStudent;
