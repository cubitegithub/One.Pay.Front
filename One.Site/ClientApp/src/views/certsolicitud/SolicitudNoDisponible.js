import React from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CContainer,
    CRow,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilWarning } from '@coreui/icons'

const SolicitudNoDisponible = () => {
    
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center justify-content-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={8} lg={6}>
                        <CCard className="text-center shadow-sm">
                            <CCardHeader className="bg-danger text-white">
                                <CIcon icon={cilWarning} size="xl" className="me-2" />
                                Solicitud No Disponible
                            </CCardHeader>
                            <CCardBody>
                                <p className="lead">
                                    La solicitud a la que estás intentando acceder no está disponible o ha cambiado de estado.
                                </p>
                                <p className="text-medium-emphasis">
                                    Verifica el estado de tu solicitud o comunícate con soporte si crees que esto es un error.
                                </p>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default SolicitudNoDisponible
