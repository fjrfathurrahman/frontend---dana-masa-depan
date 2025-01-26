import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/react";

type TProps = {
  open: boolean;
  close: () => void;
  status: string;
  onOpenChange: () => void;
  confirmDelete: () => void;
};

const ModalDelete = ({ open, confirmDelete,close }: TProps) => {
  return (
    <Modal isOpen={open}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Konfirmasi Hapus Data</ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                delectus fuga sequi recusandae ipsum architecto impedit
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onPress={close}>Kembali</Button>
              <Button
                color="danger"
                onPress={confirmDelete}
                type="button"
                isLoading={status === "loading"}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalDelete;
