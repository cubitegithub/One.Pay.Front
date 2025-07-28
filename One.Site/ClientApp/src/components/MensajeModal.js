import React from 'react'
import { CModal, CModalBody } from '@coreui/react-pro'

const MensajeModal = ({ mensaje }) => {

    return (
        <>
            <CModal
                alignment="center"
                aria-labelledby="VerticallyCenteredExample"
            >
                <CModalBody>{mensaje()}</CModalBody>
            </CModal>
        </>
    );
};

export default MensajeModal;