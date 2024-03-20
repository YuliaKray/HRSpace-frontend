import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

type Props = {
  modalOpen: boolean;
  children: React.ReactNode;
  closeModal: () => void;
};

export const Modal: React.FC<Props> = ({ modalOpen, children }) => {
  if (!modalOpen) return null;

  return createPortal(
    <div className='modal__overlay'
    >
      <div className='modal__content'>
        {children}
      </div>
    </div>
    ,
    document.body
  );
};

