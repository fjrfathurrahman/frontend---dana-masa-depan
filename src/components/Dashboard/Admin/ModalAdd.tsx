"use client";

import { useAddAdmin } from "@/hooks/admins/useAdmin";
import { AddAdminSchema, TAddAdmin } from "@/lib/Schema";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { on } from "events";
import { FormProvider, useForm } from "react-hook-form";

export const optionsRole = [
  {key: "super admin", label: "Super Admin"},
  {key: "admin", label: "Admin"},
  {key: "teacher", label: "Teacher"},
];

const ModalAdd = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { mutate, isLoading } = useAddAdmin();
  const methods = useForm<TAddAdmin>({
    resolver: zodResolver(AddAdminSchema),
    mode: "onChange",
  });

  const onSubmit = (data: TAddAdmin) => {
    console.log(data);
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("role", data.role);
    formData.append("confirmPassword", data.confirmPassword);

    if (data.photo && data.photo.length > 0) {
      formData.append("photo", data.photo[0]);
    }

    mutate(formData);
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Tambah Admin
      </Button>

      <Modal
        isOpen={isOpen}
        placement="top-center"
        onOpenChange={onOpenChange}
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <ModalHeader className="text-dark dark:text-white">
                  Menambah Admin Baru
                </ModalHeader>
                <ModalBody className="grid grid-cols-2 gap-y-4">
                  <Input
                    label="Name"
                    placeholder="Masukan nama Anda"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.name)}
                    errorMessage={methods.formState.errors.name?.message}
                    {...methods.register("name")}
                  />
                  <Input
                    label="Email"
                    placeholder="Masukan email Anda"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.email)}
                    errorMessage={methods.formState.errors.email?.message}
                    {...methods.register("email")}
                  />
                  <Input
                    label="Photo"
                    type="file"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.photo)}
                    errorMessage={methods.formState.errors.photo?.message}
                    {...methods.register("photo", {
                      onChange: (e) => {
                        return e.target.files;
                      },
                    })}
                    accept="image/*"
                  />
                  <Select
                    label="Role"
                    placeholder="Pilih role"
                    variant="bordered"
                    labelPlacement="outside"
                    isInvalid={Boolean(methods.formState.errors.role)}
                    errorMessage={methods.formState.errors.role?.message}
                    {...methods.register("role")}
                  >
                    {optionsRole.map((option) => (
                      <SelectItem key={option.key} value={option.key}>{option.label}</SelectItem>
                    ))}
                  </Select>

                  <Input
                    label="Password"
                    placeholder="Masukan password Anda"
                    variant="bordered"
                    labelPlacement="outside"
                    type="password"
                    isInvalid={Boolean(methods.formState.errors.password)}
                    errorMessage={methods.formState.errors.password?.message}
                    {...methods.register("password")}
                  />

                  <Input
                    label="Confirm Password"
                    placeholder="Masukan kembali password Anda"
                    variant="bordered"
                    labelPlacement="outside"
                    type="password"
                    isInvalid={Boolean(methods.formState.errors.confirmPassword)}
                    errorMessage={methods.formState.errors.confirmPassword?.message}
                    {...methods.register("confirmPassword")}
                  />
                </ModalBody>

                <ModalFooter>
                  <Button
                    color="danger"
                    variant="flat"
                    type="button"
                    onPress={onClose}
                  >
                    Kembali
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    isLoading={isLoading}
                    isDisabled={isLoading}
                  >
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
