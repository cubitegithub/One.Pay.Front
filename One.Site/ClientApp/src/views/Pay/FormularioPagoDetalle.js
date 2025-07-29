import React, { useState, useEffect, useRef } from 'react'
import {
    CCol, CRow, CForm, CFormInput, CFormLabel, CButton, CToaster, CToast,
    CToastHeader, CToastBody, CLoadingButton, CCard, CCardBody, CCardHeader
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle, cilXCircle } from '@coreui/icons'

const FormularioPagoDetalle = ({ token }) => {
    const [formData, setFormData] = useState({
        banco: '',
        numeroCuenta: '',
        monto: '',
        fechaTransaccion: '',
        referencia: '',
        archivoComprobante: null,
        correoPaypal: '',
    })

    const [tipoPagoSeleccionado, setTipoPagoSeleccionado] = useState('')
    const [toast, addToast] = useState(0)
    const toaster = useRef()
    const STATUS_OK = 200
    const [us_tipoSolicitud, setus_tipoSolicitud] = useState('')
    const { uidsolicitud } = token

    const exampleToast = (iconClass, iconImage, title, message) => (
        <CToast>
            <CToastHeader closeButton>
                <CIcon icon={iconImage} className={iconClass} size="xl" />
                <div className="fw-bold me-auto">{title}</div>
            </CToastHeader>
            <CToastBody><h6>{message}</h6></CToastBody>
        </CToast>
    )

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }))
    }

    const handleGuardar = async () => {
        // Validación dinámica según tipo de pago
        if (tipoPagoSeleccionado === 'transferencia') {
            if (
                !formData.banco ||
                !formData.numeroCuenta ||
                !formData.monto ||
                !formData.fechaTransaccion ||
                !formData.referencia
            ) {
                addToast(exampleToast('text-danger', cilXCircle, 'Validación', 'Completa todos los campos obligatorios de transferencia.'))
                return
            }
        }

        if (tipoPagoSeleccionado === 'paypal') {
            if (!formData.correoPaypal || !formData.monto) {
                addToast(exampleToast('text-danger', cilXCircle, 'Validación', 'Completa todos los campos obligatorios de PayPal.'))
                return
            }
        }

        try {
            const dataToSend = new FormData()
            Object.entries(formData).forEach(([key, value]) => {
                if (value !== null) dataToSend.append(key, value)
            })

            const response = await fetch('/Pay/Modify', {
                method: 'POST',
                body: dataToSend,
            })

            //if (response.status === STATUS_OK) {
            if (STATUS_OK === STATUS_OK) {
                addToast(exampleToast('text-info', cilCheckCircle, 'Guardar', 'El pago fue realizado exitosamente.'))

                for (let pair of dataToSend.entries()) {
                    console.log(`${pair[0]}:`, pair[1])
                }
                setTimeout(() => window.location.href = '/#/PagoNoDisponible', 3000)
            } else if (response.status === 401) {
                window.location.href = '/401/#/401'
            } else {
                addToast(exampleToast('text-danger', cilXCircle, 'Error', 'No se pudo guardar el pago.'))
            }
        } catch (error) {
            addToast(exampleToast('text-danger', cilXCircle, 'Error', 'Ocurrió un error al guardar.'))
        }
    }


    const renderFormulario = () => {
        if (tipoPagoSeleccionado === 'transferencia') {
            return (
                <>
                    {/* Formulario de Depósito/Transferencia */}
                    <CForm>
                        <CRow className="mb-3">
                            <CCol md={6}>
                                <CFormLabel>Banco</CFormLabel>
                                <CFormInput name="banco" value={formData.banco} onChange={handleInputChange} required />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Número de Cuenta</CFormLabel>
                                <CFormInput name="numeroCuenta" value={formData.numeroCuenta} onChange={handleInputChange} required />
                            </CCol>
                        </CRow>

                        <CRow className="mb-3">
                            <CCol md={6}>
                                <CFormLabel>Monto</CFormLabel>
                                <CFormInput type="number" name="monto" value={formData.monto} onChange={handleInputChange} required />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Fecha de Transacción</CFormLabel>
                                <CFormInput type="date" name="fechaTransaccion" value={formData.fechaTransaccion} onChange={handleInputChange} required />
                            </CCol>
                        </CRow>

                        <CRow className="mb-3">
                            <CCol md={6}>
                                <CFormLabel>Referencia</CFormLabel>
                                <CFormInput name="referencia" value={formData.referencia} onChange={handleInputChange} required />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Comprobante de Pago</CFormLabel>
                                <CFormInput type="file" name="archivoComprobante" onChange={handleInputChange} />
                            </CCol>
                        </CRow>

                        <CRow className="justify-content-center mt-4">
                            <CCol xs="auto">
                                <CLoadingButton color="success" timeout={2000} onClick={handleGuardar}>
                                    Guardar Solicitud
                                </CLoadingButton>
                            </CCol>
                        </CRow>
                    </CForm>
                </>
            )
        }

        if (tipoPagoSeleccionado === 'paypal') {
            return (
                <>
                    {/* Formulario de PayPal (básico) */}
                    <CForm>
                        <CRow className="mb-3">
                            <CCol md={6}>
                                <CFormLabel>Correo de PayPal</CFormLabel>
                                <CFormInput name="correoPaypal" type="email" onChange={handleInputChange} required />
                            </CCol>
                            <CCol md={6}>
                                <CFormLabel>Monto</CFormLabel>
                                <CFormInput name="monto" type="number" value={formData.monto} onChange={handleInputChange} required />
                            </CCol>
                        </CRow>

                        <CRow className="justify-content-center mt-4">
                            <CCol xs="auto">
                                <CLoadingButton color="success" timeout={2000} onClick={handleGuardar}>
                                    Enviar Pago PayPal
                                </CLoadingButton>
                            </CCol>
                        </CRow>
                    </CForm>
                </>
            )
        }

        return null
    }

    return (
        <>
            <CRow className="justify-content-center mb-4">
                <CCol>
                    <h1 className="text-center">Formulario de Transacción Bancaria</h1>
                    {/*us_tipoSolicitud && <h5 className="text-center">{us_tipoSolicitud}</h5>*/}
                </CCol>
            </CRow>

            {/* Selección de tipo de pago */}
            <CRow className="mb-4 justify-content-center">
                <CCol xs={6} md={3}>
                    <CCard
                        onClick={() => setTipoPagoSeleccionado('transferencia')}
                        className={`text-center cursor-pointer ${tipoPagoSeleccionado === 'transferencia' ? 'border-success border-3' : ''}`}
                        style={{ cursor: 'pointer' }}
                    >
                        <CCardHeader className="bg-primary text-white">Depósito / Transferencia</CCardHeader>
                        <CCardBody>Selecciona para ingresar detalles de transferencia bancaria.</CCardBody>
                    </CCard>
                </CCol>
                <CCol xs={6} md={3}>
                    <CCard
                        onClick={() => setTipoPagoSeleccionado('paypal')}
                        className={`text-center cursor-pointer ${tipoPagoSeleccionado === 'paypal' ? 'border-success border-3' : ''}`}
                        style={{ cursor: 'pointer' }}
                    >
                        <CCardHeader className="bg-warning text-dark">PayPal</CCardHeader>
                        <CCardBody>Selecciona para ingresar datos de PayPal.</CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            {/* Mostrar el formulario según selección */}
            {renderFormulario()}

            <CToaster ref={toaster} push={toast} placement="top-end" />
        </>
    )
}

export default FormularioPagoDetalle
