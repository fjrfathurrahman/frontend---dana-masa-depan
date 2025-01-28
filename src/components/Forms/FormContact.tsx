import { Button, Input, Textarea } from "@heroui/react";
import React from "react";
import { toast } from "sonner";

const FormContact = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input
        isRequired
        label="Subject"
        labelPlacement="outside"
        placeholder="Masukan subjek Anda"
        type="text"
        variant="bordered"
      />
      <Input
        isRequired
        label="Email"
        labelPlacement="outside"
        placeholder="Masukan email Anda"
        type="email"
        variant="bordered"
      />
      <Textarea
        isRequired
        label="Deskripsi"
        labelPlacement="outside"
        placeholder="Hello, Saya mau bertanya..."
        variant="bordered"
      />
      <Button fullWidth color="primary" type="button" onPress={() => toast.info("Fitur belum tersedia")}>
        Kirim
      </Button>
    </form>
  );
};

export default FormContact;
