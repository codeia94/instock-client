import './Modal.scss';
import { useRef, useEffect, useState } from 'react';
import { ReactComponent as Close } from '../../assets/icons/close-24px.svg'
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

export default function Modal ({ isOpen, onClose, children, handleDelete }) {
    const modalRef = useRef(null);

    const [ modalOpen, setModalOpen ] = useState(isOpen);

    const handleCloseModal = () => {
        if(onClose) {
            onClose();
        }
        setModalOpen(false)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          handleCloseModal();
        }
      };

    useEffect(() => {
        setModalOpen(isOpen);
      }, [isOpen]);

    useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
        if (modalOpen) {
          modalElement.showModal();
        } else {
          modalElement.close();
        }
      }
    }, [modalOpen]);

    return (
        <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
            <div className='modal__content'>
                <div className='modal__toolbar'>
                    <Close className='modal__close-icon' onClick={handleCloseModal}/>
                </div>
                {children}
                <div className='modal__buttons'>
                    <div className='modal__cancel' onClick={handleCloseModal}>
                        <ButtonSecondary>Cancel</ButtonSecondary>
                    </div>
                    <div className='modal__submit' onClick={handleDelete}>
                        <ButtonDelete>Delete</ButtonDelete>
                    </div>
                </div>
            </div>
        </dialog>
      );
};