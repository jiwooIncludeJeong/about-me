import { useState } from 'react';

const useModal = (initialValue?: boolean) => {
  const [show, setShow] = useState<boolean>(initialValue ?? false);
  const [modalData, setModalData] = useState<any>(null);

  const open = (data?: any) => {
    setShow(true);
    setModalData(data);
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
