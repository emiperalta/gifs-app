import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const Modal = ({ children, onClose }) => {
    return (
        <div className='modal'>
            <div className='modal-content'>
                <button onClick={onClose} className='closeBtn'>
                    X
                </button>

                {children}
            </div>
        </div>
    );
};

// portal to avoid z-index problems
const ModalPortal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>{children}</Modal>,
        document.getElementById('modal-root')
    );
};

export default ModalPortal;
