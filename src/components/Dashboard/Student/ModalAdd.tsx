"use client";

import { useAddStudent } from "@/hooks/students/useStudent";
import { AddStudentSchema, TAddStudent } from "@/lib/Schema";
import { icons } from "@/resource/icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  SelectItem,
  Select,
  Textarea,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

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
  ]
}

const ModalAdd = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { mutate, isLoading } = useAddStudent();
  const methods = useForm<TAddStudent>({
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
    if (data.photo) formData.append("photo", data.photo[0]);
    
    console.log(data);
    mutate(formData);
    onClose();
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        {icons.plus} Tambah Siswa
      </Button>

      <Modal
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <ModalHeader className="text-dark dark:text-white">
                  Menambah Siswa Baru
                </ModalHeader>
                <ModalBody className="grid grid-cols-2 gap-y-4">
                  <Input
                    label="Name"
                    placeholder="Masukan nama Siswa"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.name)}
                    {...methods.register("name")}
                  />
                  <Input
                    label="NISN"
                    placeholder="Masukan nisn Siswa"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.student_number)}
                    {...methods.register("student_number")}
                  />
                  <Select
                    label="Kelas"
                    placeholder="Pilih kelas Siswa"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.class)}
                    errorMessage={methods.formState.errors.class?.message}
                    {...methods.register("class")}
                  >
                    {optionsSelect.class.map((option) => (
                      <SelectItem key={option.key} value={option.key}>{option.label}</SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Jurusan"
                    placeholder="Pilih jurusan Siswa"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.major)}
                    errorMessage={methods.formState.errors.major?.message}
                    {...methods.register("major")}
                  >
                    {optionsSelect.major.map((option) => (
                      <SelectItem key={option.key} value={option.key}>{option.label}</SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Jenis Kelamin"
                    placeholder="Pilih jenis kelamin Siswa"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.gender)}
                    errorMessage={methods.formState.errors.gender?.message}
                    {...methods.register("gender")}
                  >
                    {optionsSelect.gender.map((option) => (
                      <SelectItem key={option.key} value={option.key}>{option.label}</SelectItem>
                    ))}
                  </Select>
                  <Input
                    label="Email"
                    placeholder="Masukan email Siswa"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.email)}
                    {...methods.register("email")}
                  />
                  <Input
                    label="Phone"
                    placeholder="Masukan phone Siswa"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.phone)}
                    {...methods.register("phone")}
                  />
                  <Input
                    label="Photo"
                    type="file"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.photo)}
                    {...methods.register("photo", {
                      onChange: (e) => {
                        return e.target.files;
                      },
                    })}
                    accept="image/*"
                  />
                  <Textarea
                    label="Alamat"
                    placeholder="Masukan alamat Siswa"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.address)}
                    {...methods.register("address")}
                  />

                </ModalBody>

                <ModalFooter>
                  <Button color="danger" variant="flat" type="button" onPress={onClose}>
                    Kembali
                  </Button>
                  <Button color="primary" type="submit" isLoading={isLoading} isDisabled={isLoading}>
                    Submit
                  </Button>
                </ModalFooter>
              </form>
            </FormProvider>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAdd;
