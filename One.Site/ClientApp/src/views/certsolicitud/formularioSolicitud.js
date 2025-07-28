import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {
    CRow,
    CCol,
    CContainer,
} from '@coreui/react-pro'
import FormularioSolicitudDetalle from './FormularioSolicitudDetalle'

const FormularioSolicitud = () => {
    const { idParam, uidsolParam } = useParams();
    const [us_solicitudToken, setSolicitudToken] = useState(null);

    useEffect(() => {
        const id = idParam?.split('=')[1];
        //const uidtip = uidsolParam?.split('=')[1];

        if (id /*&& uidtip*/) {
            setSolicitudToken({
                uidsolicitud: id,
                //uidtiposolicitud: uidtip,
            });
        }
    }, [idParam/*, uidsolParam*/]);

    return (
        <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-start py-4">
            <CContainer>
                <CRow className="justify-content-center">
                    {us_solicitudToken && <FormularioSolicitudDetalle token={us_solicitudToken} />}
                </CRow>
            </CContainer>
        </div>
    )
}

export default FormularioSolicitud;
