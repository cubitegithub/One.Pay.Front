import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {
    CRow,
    CCol,
    CContainer,
} from '@coreui/react-pro'
import FormularioPagoDetalle from './FormularioPagoDetalle'

const FormularioPago = () => {
    const { idParam } = useParams();
    const [us_solicitudToken, setSolicitudToken] = useState(null);
       
    useEffect(() => {
        if (idParam) {
            const tokenObj = { uidsolicitud: idParam };
            console.log('Token generado:', tokenObj);
            setSolicitudToken(tokenObj);
        }
    }, [idParam]);


    return (
        <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-start py-4">
            <CContainer>
                <CRow className="justify-content-center">
                    {us_solicitudToken && <FormularioPagoDetalle token={us_solicitudToken} />}
                </CRow>
            </CContainer>
        </div>
    )
}

export default FormularioPago;
