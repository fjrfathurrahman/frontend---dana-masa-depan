import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/modal";

const ModalView = ({ open, openChange }: { open: boolean, openChange: () => void }) => {

  return (
    <>
      <Modal
        isOpen={open}
        placement="center"
        onOpenChange={openChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-dark dark:text-white">
                Informasi Admin
              </ModalHeader>
              <ModalBody>lorem</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalView;
