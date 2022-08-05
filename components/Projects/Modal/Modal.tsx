import React from 'react';
import Presenter from '@components/Projects/Modal/Presenter';

interface Props {
  showModal: boolean;
  closeModal: () => void;
}

const Modal: React.FC<Props> = props => {
  const {} = props;

  return <Presenter {...props} />;
};

export default Modal;
