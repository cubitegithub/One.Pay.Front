import React from 'react';
import {
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CButton,
    CSpinner,
} from '@coreui/react-pro'; // ✅ USAR la versión PRO para evitar conflictos

interface ConfirmModalProps {
    visible: boolean;
    title?: string;
    message?: string;
    onConfirm: () => void;
    onCancel: () => void;
    loading?: boolean;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    visible,
    title = 'Confirmar acción',
    message = '¿Estás seguro de que deseas continuar?',
    onConfirm,
    onCancel,
    loading = false,
}) => {
    return (
        <CModal visible={visible} onClose={onCancel}>
            <CModalHeader>
                <CModalTitle>{title}</CModalTitle>
            </CModalHeader>
            <CModalBody>{message}</CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={onCancel} disabled={loading}>
                    Cancelar
                </CButton>
                <CButton color="primary" onClick={onConfirm} disabled={loading}>
                    {loading ? <CSpinner size="sm" /> : 'Sí'}
                </CButton>
            </CModalFooter>
        </CModal>
    );
};

export default ConfirmModal;
