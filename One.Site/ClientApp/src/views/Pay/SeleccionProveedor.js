import React, { useState } from 'react'
import {
    CCol, CContainer, CRow, CForm, CFormInput, CFormLabel, CButton, CLoadingButton,
    CCard, CCardBody, CCardHeader, CCardFooter, CFormSelect
} from '@coreui/react-pro'
import produbancoLogo from '../../assets/images/Produbanco.jpg'
import pichinchaLogo from '../../assets/images/BancoPichincha.png'
import guayaquilLogo from '../../assets/images/BancoGuayaquil.png'

const SeleccionProveedor = () => {
    const [formData, setFormData] = useState({
        bancoUsuario: '',
        tipocuentas: '',
        numeroCuenta: '',
        monto: '',
        fechaTransaccion: '',
        referencia: '',
        archivoComprobante: null,
    })

    const [TipoProveedor, setTipoProveedor] = useState('')
    const [currentStep, setCurrentStep] = useState(1)
    const STATUS_OK = 200

    const bancosUsuario = [
        'Banco Pichincha',
        'Banco de Guayaquil',
        'Produbanco',
        'Banco del Pacífico',
        'Banco Bolivariano',
        'Cooperativa Jep',
        'Banco Internacional'
    ]

    const tipocuenta = ['Cuenta Corriente', 'Cuenta de Ahorros']

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }))
    }

    const handleSeleccionPago = (proveedorBanco) => {
        setTipoProveedor(proveedorBanco)
        setCurrentStep(1)
    }

    const handleNext = () => {
        if (currentStep < 3) setCurrentStep(prev => prev + 1)
    }

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1)
    }

    const handleCancelar = () => {
        setFormData({
            bancoUsuario: '',
            tipocuentas: '',
            numeroCuenta: '',
            monto: '',
            fechaTransaccion: '',
            referencia: '',
            archivoComprobante: null,
        })

        setTipoProveedor('')

        setCurrentStep(1)
    }

    const handleGuardar = async () => {
        if (!formData.bancoUsuario || !formData.tipocuentas || !formData.numeroCuenta || !formData.monto || !formData.fechaTransaccion || !formData.referencia) {
            alert('Completa todos los campos antes de guardar.')
            return
        }

        try {
            const dataToSend = new FormData()
            Object.entries(formData).forEach(([key, value]) => {
                if (value !== null && value !== '') dataToSend.append(key, value)
            })

            const response = await fetch('/Pay/Modify', {
                method: 'POST',
                body: dataToSend,
            })

            if (response.status === STATUS_OK) {
                alert('El pago fue realizado exitosamente.')
            } else {
                alert('No se pudo guardar el pago.')
            }
        } catch (error) {
            alert('Ocurrió un error al guardar.')
        }
    }

    const renderStepContent = () => {
        // STEP 1 - Datos generales del depósito
        if (currentStep === 1) {
            return (
                <>
                    {/* Logo del banco proveedor */}
                    <div className="text-center mb-3">
                        {TipoProveedor === 'Produbanco' && <img src={produbancoLogo} alt="Produbanco" style={{ width: '260px' }} />}
                        {TipoProveedor === 'Pichincha' && <img src={pichinchaLogo} alt="Pichincha" style={{ width: '280px' }} />}
                        {TipoProveedor === 'Guayaquil' && <img src={guayaquilLogo} alt="Guayaquil" style={{ width: '280px' }} />}
                    </div>

                    <CForm>
                        {/* Fila 1: Banco del usuario y Monto */}
                        <CRow className="justify-content-center mb-3">
                            <CCol md={3} className="d-flex flex-column align-items-center">
                                <CFormLabel>Selecciona tu banco</CFormLabel>
                                <CFormSelect
                                    name="bancoUsuario"
                                    value={formData.bancoUsuario}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Selecciona un banco...</option>
                                    {bancosUsuario.map((b, idx) => (
                                        <option key={idx} value={b}>{b}</option>
                                    ))}
                                </CFormSelect>
                            </CCol>

                            <CCol md={3} className="d-flex flex-column align-items-center">
                                <CFormLabel>Monto</CFormLabel>
                                <CFormInput type="number" name="monto" value={formData.monto} onChange={handleInputChange} />
                            </CCol>
                        </CRow>

                        {/* Fila 2: Fecha de transacción y Código Referencial */}
                        <CRow className="justify-content-center mb-3">
                            <CCol md={3} className="d-flex flex-column align-items-center">
                                <CFormLabel>Fecha de transacción</CFormLabel>
                                <CFormInput type="date" name="fechaTransaccion" value={formData.fechaTransaccion} onChange={handleInputChange} />
                            </CCol>

                            <CCol md={3} className="d-flex flex-column align-items-center">
                                <CFormLabel>Código Referencial</CFormLabel>
                                <CFormInput name="referencia" value={formData.referencia} onChange={handleInputChange} />
                            </CCol>
                        </CRow>

                        {/* Botones */}
                        <div className="d-flex justify-content-between mt-3">
                            <CButton color="secondary" onClick={handleCancelar}>← Cancelar</CButton>
                            <CButton color="primary" onClick={handleNext}>Siguiente →</CButton>
                        </div>
                    </CForm>


                </>
            )
        }

        // STEP 2 - Adjuntar comprobante
        if (currentStep === 2) {
            return (
                <>
                    <div className="text-center mb-3">
                        {TipoProveedor === 'Produbanco' && <img src={produbancoLogo} alt="Produbanco" style={{ width: '260px' }} />}
                        {TipoProveedor === 'Pichincha' && <img src={pichinchaLogo} alt="Pichincha" style={{ width: '280px' }} />}
                        {TipoProveedor === 'Guayaquil' && <img src={guayaquilLogo} alt="Guayaquil" style={{ width: '280px' }} />}
                    </div>

                    <CForm>
                        <CFormLabel>Adjuntar comprobante de pago</CFormLabel>
                        <CFormInput type="file" name="archivoComprobante" onChange={handleInputChange} />

                        <div className="d-flex justify-content-between mt-3">
                            <CButton color="secondary" onClick={handleBack}>← Regresar</CButton>
                            <CButton color="primary" onClick={handleNext}>Siguiente →</CButton>
                        </div>
                    </CForm>
                </>
            )
        }

        // STEP 3 - Resumen final
        if (currentStep === 3) {
            return (
                <>
                    <div className="text-center mb-3">
                        {TipoProveedor === 'Produbanco' && <img src={produbancoLogo} alt="Produbanco" style={{ width: '260px' }} />}
                        {TipoProveedor === 'Pichincha' && <img src={pichinchaLogo} alt="Pichincha" style={{ width: '280px' }} />}
                        {TipoProveedor === 'Guayaquil' && <img src={guayaquilLogo} alt="Guayaquil" style={{ width: '280px' }} />}
                    </div>

                    <CCard>
                        <CCardHeader>Datos ingresados</CCardHeader>
                        <CCardBody>
                            <p><strong>Banco del proveedor:</strong> {TipoProveedor}</p>
                            <p><strong>Su Banco:</strong> {formData.bancoUsuario}</p>
                            {/*<p><strong>Número de cuenta:</strong> {formData.numeroCuenta}</p>*/}
                            <p><strong>Monto:</strong> {formData.monto}</p>
                            <p><strong>Fecha:</strong> {formData.fechaTransaccion}</p>
                            <p><strong>Referencia:</strong> {formData.referencia}</p>
                            {/*<p><strong>Archivo:</strong> {formData.archivoComprobante ? formData.archivoComprobante.name : 'No adjuntado'}</p>*/}

                            <div className="d-flex justify-content-between mt-3">
                                <CButton color="secondary" onClick={handleBack}>← Regresar</CButton>
                                <CLoadingButton color="success" timeout={2000} onClick={handleGuardar}>Comprobar</CLoadingButton>
                            </div>
                        </CCardBody>
                    </CCard>
                </>
            )
        }

        return null
    }

    return (
        <>
            
            {/* Tarjetas de proveedores */}
            <h1 className="my-4 text-center">Seleccione el banco del proveedor</h1>
            {!TipoProveedor && (
                <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-start py-4">
                     <CContainer>
               
                    <CRow className="d-flex justify-content-center">
                        <CCol xs={12} sm={6} md={3}>
                            <CCard onClick={() => handleSeleccionPago('Produbanco')} className="text-center cursor-pointer">
                                <CCardHeader className="bg-success text-white">Produbanco</CCardHeader>
                                <CCardBody className="d-flex justify-content-center">
                                    <img src={produbancoLogo} alt="Logo Produbanco" style={{ width: '220px' }} />
                                    </CCardBody>
                                    <CCardFooter className="border-success border-3 text-start">
                                        <div className="d-flex mb-1">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Tipo:</strong>
                                            <span>Corriente</span>
                                        </div>
                                        <div className="d-flex mb-1">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Número:</strong>
                                            <span>2006177944</span>
                                        </div>
                                        <div className="d-flex">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>RUC:</strong>
                                            <span>0993334642001</span>
                                        </div>
                                        <div className="d-flex">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Nombre:</strong>
                                            <span>ONEBYTE S.A.</span>
                                        </div>
                                        <div className="d-flex">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Correo:</strong>
                                            <span>pagos@onebyte.com.ec</span>
                                        </div>
                                    </CCardFooter>
                            </CCard>
                        </CCol>

                        <CCol xs={12} sm={6} md={3}>
                            <CCard onClick={() => handleSeleccionPago('Pichincha')} className="text-center cursor-pointer">
                                <CCardHeader className="bg-warning text-dark">Banco Pichincha</CCardHeader>
                                <CCardBody className="d-flex justify-content-center">
                                    <img src={pichinchaLogo} alt="Logo Pichincha" style={{ width: '250px' }} />
                                    </CCardBody>
                                    <CCardFooter className="border-warning border-3 text-start">
                                        <div className="d-flex mb-1">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Tipo:</strong>
                                            <span>Corriente</span>
                                        </div>
                                        <div className="d-flex mb-1">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Número:</strong>
                                            <span>2100285305</span>
                                        </div>
                                        <div className="d-flex">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>RUC:</strong>
                                            <span>0993334642001</span>
                                        </div>
                                        <div className="d-flex">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Nombre:</strong>
                                            <span>ONEBYTE S.A.</span>
                                        </div>
                                        <div className="d-flex">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Correo:</strong>
                                            <span>pagos@onebyte.com.ec</span>
                                        </div>
                                    </CCardFooter>
                            </CCard>
                        </CCol>

                        <CCol xs={12} sm={6} md={3}>
                            <CCard onClick={() => handleSeleccionPago('Guayaquil')} className="text-center cursor-pointer">
                                <CCardHeader className="bg-danger text-white">Banco Guayaquil</CCardHeader>
                                <CCardBody className="d-flex justify-content-center">
                                    <img src={guayaquilLogo} alt="Logo Guayaquil" style={{ width: '267px' }} />
                                    </CCardBody>
                                    <CCardFooter className="border-danger border-3 text-start">
                                        <div className="d-flex mb-1">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Tipo:</strong>
                                            <span>Corriente</span>
                                        </div>
                                        <div className="d-flex mb-1">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Número:</strong>
                                            <span>0043115359</span>
                                        </div>
                                        <div className="d-flex">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>RUC:</strong>
                                            <span>0993334642001</span>
                                        </div>
                                        <div className="d-flex">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Nombre:</strong>
                                            <span>ONEBYTE S.A.</span>
                                        </div>
                                        <div className="d-flex">
                                            <strong style={{ display: 'inline-block', width: '90px' }}>Correo:</strong>
                                            <span>pagos@onebyte.com.ec</span>
                                        </div>
                                    </CCardFooter>

                            </CCard>
                            </CCol>
                        </CRow>
                    </CContainer>
                </div>
                
            )}

            {/* Formulario del wizard */}
            {TipoProveedor && (
                <CRow className="justify-content-center">
                    <CCol xs={12} md={8}>
                        <CCard className="text-center border-success border-3">
                            <CCardHeader className="bg-light">
                                <strong>{`Paso ${currentStep} de 3 — Banco del proveedor: ${TipoProveedor}`}</strong>
                            </CCardHeader>
                            <CCardBody>{renderStepContent()}</CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            )}
        </>
    )
}

export default SeleccionProveedor
