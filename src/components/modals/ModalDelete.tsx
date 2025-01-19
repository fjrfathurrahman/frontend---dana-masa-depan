import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/modal";
import { Button } from "@heroui/react";

type TProps = {
  open: boolean;
  status: string;
  onOpenChange: () => void;
  confirmDelete: () => void;
};

const ModalDelete = ({ open, confirmDelete }: TProps) => {
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
                consequatur perferendis suscipit ex!
              </p>
              <Button
                color="danger"
                className="mt-4"
                onPress={confirmDelete}
                type="button"
                isLoading={status === "loading"}
              >
                Delete
              </Button>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalDelete;
