"use client";

import { useAddStudent } from "@/hooks/students/useStudent";
import { AddStudentSchema, TAddStudent } from "@/lib/Schema";
import { Button } from "@heroui/button";
import { Input, InputVariantProps, Select, SelectItem, Textarea } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const optionsSelect = {
  class: [
    { key: "X", label: "X" },
    { key: "XI", label: "XI" },
    { key: "XII", label: "XII" },
  ],
  gender: [
    { key: "Laki-laki", label: "Laki-laki" },
    { key: "Perempuan", label: "Perempuan" },
  ],
  major: [
    { key: "RPL", label: "Rekayasa Perangkat Lunak" },
    { key: "TKJ", label: "Teknik Komputer dan Jaringan" },
    { key: "AKL", label: "Akutansi dan Keuangan Lembaga" },
  ],
};

const FormRegister = () => {
  const { mutate, isLoading } = useAddStudent();
  const { handleSubmit, register, formState } = useForm<TAddStudent>({
    resolver: zodResolver(AddStudentSchema),
    mode: "onChange",
  });

  const onSubmit = (data: TAddStudent) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("student_number", data.student_number);
    formData.append("class", data.class);
    formData.append("gender", data.gender);
    formData.append("major", data.major);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("address", data.address);
    formData.append("password", data.password);
    if (data.photo) formData.append("photo", data.photo[0]);

    console.log(data);
    mutate(formData);
  };

  const defaultStyle: InputVariantProps = {
    labelPlacement: "outside",
    variant: "bordered",
  }

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Input
            label="Nama Anda"
            placeholder="Masukan Nama Siswa"
            {...defaultStyle}
            isInvalid={Boolean(formState.errors.name)}
            {...register("name")}
          />
          <Input
            label="NISN"
            placeholder="Masukan NISN Siswa"
            {...defaultStyle}
            isInvalid={Boolean(formState.errors.student_number)}
            {...register("student_number")}
          />
          <Select
            label="Kelas Anda"
            placeholder="Pilih Kelas Siswa"
            {...defaultStyle}            
            isInvalid={Boolean(formState.errors.class)}
            errorMessage={formState.errors.class?.message}
            {...register("class")}
          >
            {optionsSelect.class.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Jurusan Anda"
            placeholder="Pilih Jurusan "
            {...defaultStyle}            
            isInvalid={Boolean(formState.errors.major)}
            errorMessage={formState.errors.major?.message}
            {...register("major")}
          >
            {optionsSelect.major.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Jenis Kelamin Anda"
            placeholder="Pilih Jenis Kelamin"
            {...defaultStyle}
            isInvalid={Boolean(formState.errors.gender)}
            errorMessage={formState.errors.gender?.message}
            {...register("gender")}
          >
            {optionsSelect.gender.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            label="Email"
            placeholder="Masukan Email Anda"
            isInvalid={Boolean(formState.errors.email)}
            {...defaultStyle}
            {...register("email")}
          />
          <Input
            label="Password"
            placeholder="Masukan Password Anda"
            type="password"
            isInvalid={Boolean(formState.errors.password)}
            {...defaultStyle}
            {...register("password")}
          />
          {/* <Input
            label="Konfirmasi Password"
            placeholder="Masukan Konfirmasi Password Anda"
            type="password"
            isInvalid={Boolean(formState.errors.confirmPassword)}
            {...defaultStyle}
            {...register("confirmPassword")}
          /> */}
          <Input
            label="No Handphone"
            placeholder="Masukan No Handphone Anda"
            isInvalid={Boolean(formState.errors.phone)}
            {...defaultStyle}
            {...register("phone")}
          />
          <Input
            label="Photo"
            type="file"
            accept="image/*"
            isInvalid={Boolean(formState.errors.photo)}
            {...defaultStyle}
            {...register("photo", {
              onChange: (e) => {
                return e.target.files;
              },
            })}
          />
          <Textarea
            label="Alamat Anda"
            placeholder="Masukan Alamat"
            isInvalid={Boolean(formState.errors.address)}
            {...defaultStyle}
            {...register("address")}
          />
        </div>

        <Button
          color="primary"
          type="submit"
          isLoading={isLoading}
          isDisabled={isLoading}
          fullWidth
        >
          Submit
        </Button>
      </form>
    </main>
  );
};

export default FormRegister;
