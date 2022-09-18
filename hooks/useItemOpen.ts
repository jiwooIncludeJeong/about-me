import { useState } from 'react';

const useItemOpen = (initialValue?: boolean) => {
  const [openState, setOpenState] = useState<boolean>(initialValue ?? false);

  const open = () => {
    setOpenState(true);
  };

  const close = () => {
    setOpenState(false);
  };

  const opposite = () => {
    setOpenState(prev => !prev);
  };

  return {
    openState,
    open,
    close,
    opposite,
  };
};

export default useItemOpen;
