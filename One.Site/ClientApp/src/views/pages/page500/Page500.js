import React from 'react'
import {
    CButton,
    CCol,
    CContainer,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'
import { useNavigate } from 'react-router-dom' // Para navegación

const Page500 = () => {
    const navigate = useNavigate()

    // Función para redirigir al inicio
    const goHome = () => {
        navigate('/')  // Puedes cambiar esta ruta si tienes un inicio diferente
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={6}>
                        <span className="clearfix">
                            <h1 className="float-start display-3 me-4">500</h1>
                            <h4 className="pt-3">¡Houston, tenemos un problema!</h4>
                            <p className="text-medium-emphasis float-start">
                                La página que estás buscando está temporalmente no disponible debido a un error en el servidor. Por favor, intenta nuevamente más tarde.
                            </p>
                        </span>
                        <CInputGroup className="input-prepend">
                            <CInputGroupText>
                                <CIcon icon={cilMagnifyingGlass} />
                            </CInputGroupText>
                            <CFormInput type="text" placeholder="¿Qué estás buscando?" />
                            <CButton color="info">Buscar</CButton>
                        </CInputGroup>
                        <CButton color="primary" onClick={goHome} className="mt-4">
                            Volver al inicio
                        </CButton>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Page500
