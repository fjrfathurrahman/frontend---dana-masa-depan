'use client'

import { useGetStudent } from '@/hooks/students/useStudent';
import { useTransaction } from '@/hooks/transactions/useTransactions';
import { TransactionSchema, TTransactionSchema } from '@/lib/Schema';
import { icons } from '@/resource/icons';
import { IStudent } from '@/types/ress';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, useDisclosure } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';

const ModalTransaction = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { data } = useGetStudent();

  const { mutate, isLoading } = useTransaction();
  const methods = useForm<TTransactionSchema>({
    resolver: zodResolver(TransactionSchema),
    mode: "onChange",
  });

  const students = data?.data?.data;

  const admin = JSON.parse(localStorage.getItem("user") || "{}");
  const adminId = admin?.id;

  const onSubmit = (data: TTransactionSchema) => {
    const formData = new FormData();
    formData.append("student_id", data.student_id);
    formData.append("admin_id", adminId);
    formData.append("type", data.type);
    formData.append("amount", data.amount.toString());

    mutate(formData);
    onClose();
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        {icons.transaction} Transaksi
      </Button>

      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <ModalHeader className="text-dark dark:text-white">
                  Aksi Transaksi Siswa
                </ModalHeader>
                <ModalBody className="grid grid-cols-2 gap-y-4">
                  <Select
                    label="Siswa"
                    placeholder="Pilih Siswa"
                    variant="bordered"
                    labelPlacement="outside"
                    {...methods.register("student_id")}
                    isInvalid={Boolean(methods.formState.errors.student_id)}
                    errorMessage={methods.formState.errors.student_id?.message}
                  >
                    {students?.map((student: IStudent) => (
                      <SelectItem key={student.id} value={student.id}>{student.name}</SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Type Transaksi"
                    placeholder="Pilih Type Transaksi"
                    variant="bordered"
                    labelPlacement="outside"
                    {...methods.register("type")}
                    isInvalid={Boolean(methods.formState.errors.type)}
                    errorMessage={methods.formState.errors.type?.message}
                  >
                    <SelectItem value="deposit" key={"deposit"}>Deposit</SelectItem>
                    <SelectItem value="withdrawal" key={"withdrawal"}>Withdrawal</SelectItem>
                  </Select>
                  <Input
                    label="Jumlah"
                    placeholder="Masukan Jumlah Transaksi"
                    variant="bordered"
                    labelPlacement="outside"
                    type='number'
                    {...methods.register("amount")}
                    isInvalid={Boolean(methods.formState.errors.amount)}
                    errorMessage={methods.formState.errors.amount?.message}
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
  )
}

export default ModalTransaction