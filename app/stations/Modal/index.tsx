import React, { KeyboardEvent } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Table,
  TableRow,
  TableCell,
  TableColumn,
  TableBody,
  TableHeader,
} from '@nextui-org/react';
import { useStationsStore } from '@app/store/stations';
import { IStationsState } from '@app/types/store/stations';
import { IModalDataKey } from '@app/types/stations/modal';

const dataKey: IModalDataKey[] = [
  '지번주소',
  '도로명주소',
  '전화번호',
  '판매가격',
  '충전가능차량',
  '충전소_관리번호',
  '충전소_유형명',
  '충전소_유형코드',
  '요일별 영업시간',
  '휴식_시간',
];

const InfoModal = () => {
  const {
    changeModal,
    modal: { isOpen, data },
  } = useStationsStore((state: IStationsState) => state);

  const closeModal = () => {
    changeModal({ isOpen: false });
  };

  const handleESCKey = (e: KeyboardEvent<HTMLElement>) => {
    // 🔎 KeyboardEvent codes Ref : (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const tableItems =
    data &&
    dataKey.map((key: any) => {
      if (key === '판매가격') return { title: key, value: data[key] ? `${data[key].toLocaleString()} 원` : '' };

      return { title: key, value: data[key] ?? '' };
    });

  return (
    data && (
      <Modal
        classNames={{
          closeButton: 'flex justify-center items-center w-[2em] p-[.2rem] h-[2em] text-2xl',
        }}
        isOpen={isOpen}
        size="5xl"
        onKeyUp={(e) => {
          handleESCKey(e);
        }}
        isDismissable={true}
        placement="center"
        onClose={() => {
          closeModal();
        }}
        motionProps={{
          variants: {
            enter: {
              y: 10,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: 'easeOut',
              },
            },
            exit: {
              y: -50,
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: 'easeIn',
              },
            },
          },
        }}
      >
        <ModalContent className="text-black">
          <ModalHeader className="flex flex-col gap-1 text-2xl">{data['충전소_명']}</ModalHeader>
          <ModalBody>
            <Table
              isStriped
              hideHeader
              classNames={{
                wrapper: 'max-h-[100%]',
                td: 'h-[4em]',
              }}
            >
              <TableHeader>
                <TableColumn>title</TableColumn>
                <TableColumn>content</TableColumn>
              </TableHeader>
              <TableBody>
                {tableItems.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <strong className="text-large">{item?.title}</strong>
                    </TableCell>
                    <TableCell>
                      <span className="text-large"> {item?.value}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="ghost" size="lg" onPress={closeModal}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  );
};

export default InfoModal;
