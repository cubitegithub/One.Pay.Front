import React, { useState, useEffect, useRef } from 'react'
import {
    CCol, CRow, CButton, CToaster, CToast, CToastHeader, CToastBody,
    CProgress, CLoadingButton
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle, cilXCircle } from '@coreui/icons'

import PasoDatos from './PasoDatos'
import PasoAdjuntos from './PasoAdjuntos'
import PasoVigenciaFactura from './PasoVigenciaFactura'

const FormularioSolicitudDetalle = ({ token }) => {
    const [paso, setPaso] = useState(1)
    const [formData, setFormData] = useState({})
    const [toast, addToast] = useState(0)
    const toaster = useRef()
    const STATUS_OK = 200
    const [us_tipoSolicitud, setus_tipoSolicitud] = useState("")

    const { uidsolicitud } = token

    // Refs para cada paso
    const paso1Ref = useRef()
    const paso2Ref = useRef()
    const paso3Ref = useRef()

    // Procesa toast personalizado
    const exampleToast = (iconClass, iconImage, title, message) => (
        <CToast>
            <CToastHeader closeButton>
                <CIcon icon={iconImage} className={iconClass} size="xl" />
                <div className="fw-bold me-auto">{title}</div>
            </CToastHeader>
            <CToastBody><h6>{message}</h6></CToastBody>
        </CToast>
    )

    // Cambio de paso con validación
    const handleSiguientePaso = async () => {
        let esValido = false
        if (paso === 1) esValido = paso1Ref.current?.validar?.()
        if (paso === 2) esValido = paso2Ref.current?.validar?.()

        if (!esValido) {
            addToast(exampleToast('text-danger', cilXCircle, 'Validación', 'Completa los campos obligatorios.'))
            return
        }
        setPaso(prev => Math.min(prev + 1, 3))
    }

    // Guardado final con validación del último paso
    const handleGuardar = async () => {
        const esValido = paso3Ref.current?.validar?.()
        if (!esValido) {
            addToast(exampleToast('text-danger', cilXCircle, 'Validación', 'Completa los campos obligatorios.'))
            return
        }

        const settings = {
            method: 'PUT',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        }

        const response = await fetch('/Certsolicitudes/Modify', settings)

        if (response.status === STATUS_OK) {
            addToast(exampleToast('text-info', cilCheckCircle, 'Editar registro', 'Ha sido editado correctamente!'))
            setTimeout(() => window.location.href = '/#/solicitudNoDisponible', 3000)
        } else if (response.status === 401) {
            window.location.href = '/401/#/401'
        } else {
            addToast(exampleToast('text-danger', cilXCircle, 'Editar registro', 'No ha sido editado!'))
        }
    }

    // Carga datos desde API según token
    useEffect(() => {
        if (uidsolicitud) {
            fetch(`/Certsolicitudes/GetById/${uidsolicitud}`, { method: 'POST', headers: { 'Content-Type': 'application/json' } })
                .then(res => {
                    if (res.status === STATUS_OK) return res.json()
                    if (res.status === 401) window.location.href = '/401/#/401'
                    if (res.status === 409) return res.json().then(json => window.location.href = `/#${json.redirect}`)
                    throw new Error('Fetch Error')
                })
                .then(json => setFormData(json))
                .catch(() => addToast(exampleToast('text-danger', cilXCircle, 'Error', 'No se pudo cargar la solicitud')))
        }
    }, [uidsolicitud])

    useEffect(() => {
        const fetchSolicitudTipo = async () => {
            try {
                const res = await fetch(`/Certsolicitudtipo/GetById/${formData.Uidcertsolicitudtipo}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (res.status === 200) {
                    const data = await res.json();
                    // Suponiendo que quieres guardar esto en us_tipoSolicitud
                    setus_tipoSolicitud(data.Tiposolicitud);
                } else if (res.status === 401) {
                    window.location.href = '/401/#/401';
                } else if (res.status === 409) {
                    const json = await res.json();
                    window.location.href = `/#${json.redirect}`;
                } else {
                    throw new Error('Unexpected response');
                }
            } catch (error) {
                addToast(exampleToast('text-danger', cilXCircle, 'Error', 'No se pudo cargar la solicitud'));
            }
        };

        if (formData.Uidcertsolicitudtipo) {
            fetchSolicitudTipo();
        }
    }, [formData.Uidcertsolicitudtipo]);


    return (
        <>
            {Object.keys(formData).length > 0 && (
                <CProgress value={(paso / 3) * 100} className="mb-3" />
            )}

            <CRow className="justify-content-center mb-4">
                <CCol>
                    <h1 className="text-center">Formulario de Solicitud de Firma Electrónica</h1>
                    <h2 className="text-center">{ us_tipoSolicitud }</h2>                    
                </CCol>
            </CRow>

            {paso === 1 && (
                <PasoDatos ref={paso1Ref} formData={formData} setFormData={setFormData} tipoSolicitud={formData.Uidcertsolicitudtipo} />
            )}
            {paso === 2 && (
                <PasoAdjuntos ref={paso2Ref} formData={formData} setFormData={setFormData} tipoSolicitud={formData.Uidcertsolicitudtipo} />
            )}
            {paso === 3 && (
                <PasoVigenciaFactura ref={paso3Ref} formData={formData} setFormData={setFormData} tipoSolicitud={formData.Uidcertsolicitudtipo} />
            )}

            <CRow className="justify-content-center mt-4">
                <CCol xs="auto">
                    <CButton color="secondary" disabled={paso === 1} onClick={() => setPaso(prev => prev - 1)}>Anterior</CButton>
                    {paso < 3 ? (
                        <CButton color="primary" onClick={handleSiguientePaso} className="ms-2">Siguiente</CButton>
                    ) : (
                        <CLoadingButton color="success" timeout={2000} onClick={handleGuardar} className="ms-2">
                            Guardar Solicitud
                        </CLoadingButton>
                    )}
                </CCol>
            </CRow>

            <CToaster ref={toaster} push={toast} placement="top-end" />
        </>
    )
}

export default FormularioSolicitudDetalle
