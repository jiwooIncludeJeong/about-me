import { useState } from 'react';

const useModal = <T>(initialValue?: boolean) => {
  const [show, setShow] = useState<boolean>(initialValue ?? false);
  const [modalData, setModalData] = useState<T | null>(null);

  const open = (data?: T | null) => {
    setShow(true);
    if (data) setModalData(data);
  };
  const close = () => {
    setShow(false);
    setModalData(null);
  };

  return {
    show,
    open,
    close,
    modalData,
  };
};

export default useModal;
