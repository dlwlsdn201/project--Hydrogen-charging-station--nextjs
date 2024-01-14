import React, { KeyboardEvent } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';
import { useStationsStore } from '@app/store/stations';

const InfoModal = () => {
  const {
    changeModal,
    modal: { isOpen, data },
  } = useStationsStore((state) => state);

  const closeModal = () => {
    changeModal({ isOpen: false });
  };

  const handleESCKey = (e: KeyboardEvent<HTMLElement>) => {
    // 🔎 KeyboardEvent codes Ref : (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      size="5xl"
      onKeyUp={(e) => {
        handleESCKey(e);
      }}
      isDismissable={true}
      placement="center"
    >
      <ModalContent className="text-black">
        <ModalHeader className="flex flex-col gap-1 text-2xl">충전소 상세정보</ModalHeader>
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
            venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
            venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
          </p>
          <p>
            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor
            eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
            eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et.
            Culpa deserunt nostrud ad veniam.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InfoModal;
