import { React, useState, useEffect, useRef } from 'react'
import { CModal, CModalHeader, CModalBody, CModalFooter, CButton, CModalTitle, CToast, CToastHeader, CToastBody, CToaster } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilDelete, cilCheckCircle, cilXCircle } from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'

const CertsolicitudesDelete = ({ _id, _isDeleted }) => {

    const [us_ModalVisible, setus_ModalVisible] = useState(false)
    const [us_Modalloading, setus_Modalloading] = useState(false)

    const [toast, addToast] = useState(0)
    const toaster = useRef()

    const STATUS_OK = 200;

    const _fc_ToastMsgStatus = (result) => {
        var _ToastMsgIconClass;
        var _ToastMsgIconImage;
        var _ToastMsgText;
        var _ToastMsgTextTittle;

        if (result != null) {
            setus_ModalVisible(false);  

            if (result.status == STATUS_OK) {
                _ToastMsgIconClass = "text-info";
                _ToastMsgIconImage = cilCheckCircle;
                _ToastMsgTextTittle = "Eliminar registro";
                _ToastMsgText = "¡Ha sido eliminado con éxito!";
                _isDeleted(_id);
            }
            else {
                _ToastMsgIconClass = "text-danger";
                _ToastMsgIconImage = cilXCircle;
                _ToastMsgTextTittle = "Eliminar registro";
                _ToastMsgText = "¡No se ha eliminado!";
                _isDeleted("0");                
            }
            addToast(exampleToast(_ToastMsgIconClass, _ToastMsgIconImage, _ToastMsgTextTittle, _ToastMsgText))        
        }
    }

    const _fc_saveChangeDelete = async () => {
        setus_Modalloading(true);
        const response = await fetch("/Certsolicitudes/Delete/" + _id, { method: 'DELETE' });

        
        switch (response.status) {
            case STATUS_OK:
                _fc_ToastMsgStatus(response);
                setus_Modalloading(false);
                break;
            case 401:
                window.location.href = "/401/#/401";
                break;
            default:
                _fc_ToastMsgStatus(response);
        } 
         
 
    }
    
    const exampleToast = (_ToastMsgIconClass, _ToastMsgIconImage, _ToastMsgTextTittle, _ToastMsgText) => {
        return (
            <CToast>
                <CToastHeader closeButton>
                    <CIcon icon={_ToastMsgIconImage} className={_ToastMsgIconClass} size="xl" />
                    <div className="fw-bold me-auto"> {_ToastMsgTextTittle} </div>
                </CToastHeader>
                <CToastBody>
                    <h6> {_ToastMsgText} </h6>
                </CToastBody>
            </CToast>
        )
    }

    return (
        <>
            <CToaster ref={toaster} push={toast} placement="top-end" />

            <CButton size="sm" color="danger" shape="rounded-pill" className="m-1 text-bold" onClick={() => setus_ModalVisible(!us_ModalVisible)}>
                <strong>   <CIcon icon={cilDelete} size="lg" /> Eliminar </strong>
            </CButton>
            <CModal alignment="center" backdrop="static" visible={us_ModalVisible} onClose={() => setus_ModalVisible(false)} aria-labelledby="ModalEliminarRegistro">
                <CModalHeader onClose={() => setus_ModalVisible(false)} closeButton={false}>
                    <CModalTitle>Eliminar</CModalTitle>
                </CModalHeader>
                <CModalBody al>
                    <p className="text-center">¿Está seguro de que desea eliminar este registro?</p>
                </CModalBody>
                <CModalFooter>
                    {us_Modalloading ?
                        <CButton color="secondary" disabled onClick={() => setus_ModalVisible(false)}>Cerrar</CButton> :
                        <CButton color="secondary" onClick={() => setus_ModalVisible(false)}>Cerrar</CButton>}
                    <CLoadingButton color="primary" loading={us_Modalloading} onClick={() => _fc_saveChangeDelete()}>
                        {us_Modalloading ? "Eliminando" : "Eliminar"}
                    </CLoadingButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default CertsolicitudesDelete