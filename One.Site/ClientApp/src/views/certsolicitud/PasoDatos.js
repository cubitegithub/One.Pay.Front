import React, {
    forwardRef, useImperativeHandle, useEffect, useRef, useState
} from 'react'
import {
    CForm, CCard, CCardBody, CCol, CFormInput, CFormSelect,
    CFormCheck, CFormLabel, CInputGroup, CDatePicker,
    CToaster, CToast, CToastHeader, CToastBody, CRow,
    CSpinner
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle, cilXCircle } from '@coreui/icons'

const PasoDatos = forwardRef(({ formData, setFormData, tipoSolicitud }, ref) => {
    const esPersonaJuridica = tipoSolicitud === 'ac37a540-b9e1-4e81-9bc6-aa495fe43ac2'
    const toaster = useRef()
    const [toast, addToast] = useState(0)
    const STATUS_OK = 200

    const [selects, setSelects] = useState({
        Certsolicitudtipo: [], Certtipodocumento: [], Certnacionalidad: [],
        Certsexo: [], Certprovincia: [], Certcanton: []
    })

    const [loadingCantones, setLoadingCantones] = useState(false)
    const [loadingTipoDoc, setLoadingTipoDoc] = useState(false)

    const fetchSelects = async () => {
        const endpoints = {
            Certsolicitudtipo: '/Certsolicitudtipo/GetSelectValue',
            Certnacionalidad: '/Certnacionalidad/GetSelectValue',
            Certsexo: '/Certsexo/GetSelectValue',
            Certprovincia: '/Certprovincia/GetSelectValue',
        }

        for (const [key, url] of Object.entries(endpoints)) {
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                })

                if (res.status === STATUS_OK) {
                    const data = await res.json()
                    setSelects(prev => ({ ...prev, [key]: data }))
                } else if (res.status === 401) {
                    window.location.href = '/401/#/401'
                } else {
                    showToast(false)
                }
            } catch {
                showToast(false)
            }
        }
    }

    const fetchCantonesPorProvincia = async (provinciaId) => {
        setLoadingCantones(true)
        try {
            const res = await fetch(`/Certcanton/GetSelectValueByIdProvincia/${provinciaId}`, {
         method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({})
            })

            if (res.status === STATUS_OK) {
                const data = await res.json()
                setSelects(prev => ({ ...prev, Certcanton: data }))
            } else if (res.status === 401) {
                window.location.href = '/401/#/401'
            } else {
                showToast(false)
            }
        } catch {
            showToast(false)
        } finally {
            setLoadingCantones(false)
        }
    }

    const fetchTipoDocPorIdTipoSolicitud = async (tipoSolicitud) => {
        setLoadingTipoDoc(true)
        try {
            const res = await fetch(`/Certtipodocumento/GetSelectValueByIdTipoSolicitud/${tipoSolicitud}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({})
            })

            if (res.status === STATUS_OK) {
                const data = await res.json()
                setSelects(prev => ({ ...prev, Certtipodocumento: data }))
            } else if (res.status === 401) {
                window.location.href = '/401/#/401'
            } else {
                showToast(false)
            }
        } catch {
            showToast(false)
        } finally {
            setLoadingTipoDoc(false)
        }
    }

    useEffect(() => {
        fetchSelects()
    }, [])

    useEffect(() => {
        if (formData.Uidcertprovincia) {
            fetchCantonesPorProvincia(formData.Uidcertprovincia)
        } else {
            setSelects(prev => ({ ...prev, Certcanton: [] }))
            setFormData(prev => ({ ...prev, Uidcertcanton: '' }))
        }
    }, [formData.Uidcertprovincia])

    useEffect(() => {
        if (!tipoSolicitud) {
            setSelects(prev => ({ ...prev, Certtipodocumento: [] }))
            setFormData(prev => ({ ...prev, Uidcerttipodocumento: '' }))
            return;
        }

        fetchTipoDocPorIdTipoSolicitud(tipoSolicitud);
    }, [tipoSolicitud]);

    const showToast = (success) => {
        addToast(
            <CToast>
                <CToastHeader closeButton>
                    <CIcon icon={success ? cilCheckCircle : cilXCircle} className={success ? 'text-info' : 'text-danger'} size="xl" />
                    <div className="fw-bold me-auto">Carga de Selects</div>
                </CToastHeader>
                <CToastBody>
                    <h6>{success ? 'Cargó correctamente' : 'Error al cargar'}</h6>
                </CToastBody>
            </CToast>
        )
    }

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))

        if (field === 'Uidcertprovincia') {
            setFormData(prev => ({ ...prev, Uidcertcanton: '' }))
        }
    }

    const getCamposRequeridos = () => {
        const comunes = ['Codigosolicitud', 'Identificacion', 'Nombre1', 'Apellidopaterno', 'Email', 'Celular']
        const juridicos = ['Rl_identificacion', 'Rl_primernombre', 'Rl_apellidopaterno', 'De_ruc', 'De_razonsocial', 'De_cargosolicitante']
        return new Set([...comunes, ...(esPersonaJuridica ? juridicos : [])])
    }

    const camposRequeridos = getCamposRequeridos()

    const safeMap = (arr, label) =>
        Array.isArray(arr) ? arr.map(item => <option key={item.id} value={item.id}>{item[label]}</option>) : null

    const inputConfig = [
        ['Codigosolicitud', 'Código Solicitud', 'text', 36],
        ['Identificacion', 'Nro. Documento', 'text', 10],
        ['Coddactilar', 'Cód. Dactilar', 'text', 10],
        ['Nombre1', 'Primer Nombre', 'text', 50],
        ['Nombre2', 'Segundo Nombre', 'text', 50],
        ['Apellidopaterno', 'Apellido Paterno', 'text', 50],
        ['Apellidomaterno', 'Apellido Materno', 'text', 50],
        ['Email', 'Email', 'email', 100],
        ['Email2', 'Email 2', 'email', 100],
        ['Celular', 'Celular', 'text', 10],
        ['Celular2', 'Celular 2', 'text', 10],
        ['Contrasenia', 'Contraseña', 'password', 50],
        ['Parroquia', 'Parroquia', 'text', 50],
        ['Direccion', 'Dirección Completa', 'text', 200],
    ]

    const empresaConfig = [
        ['Rl_tipoidentificacion', 'Tipo Identificación Representante', 'text', 36],
        ['Rl_identificacion', 'ID Representante', 'text', 20],
        ['Rl_primernombre', 'Nombre 1 Representante', 'text', 50],
        ['Rl_segundonombre', 'Nombre 2 Representante', 'text', 50],
        ['Rl_apellidopaterno', 'Apellido Paterno Representante', 'text', 50],
        ['Rl_apellidomaterno', 'Apellido Materno Representante', 'text', 50],
        ['De_ruc', 'RUC de la Empresa', 'text', 20],
        ['De_razonsocial', 'Razón Social', 'text', 200],
        ['De_area', 'Área', 'text', 100],
        ['De_cargosolicitante', 'Cargo Solicitante', 'text', 100],
    ]

    useImperativeHandle(ref, () => ({
        validar: () => {
            const form = document.getElementById('formPasoDatos')
            return form?.checkValidity?.() ?? false
        }
    }))

    return (
        <>
            <CForm id="formPasoDatos">
                <CCard className="mb-4">
                    <CCardBody>
                        <p className="text-muted mb-3">
                            <span className="text-danger">*</span> Campos obligatorios
                        </p>

                        <CRow>
                            <CCol md={3}>
                                <CFormLabel>
                                    Tipo Solicitud <span className="text-danger">*</span>
                                </CFormLabel>
                                <CFormSelect
                                    value={formData.Uidcertsolicitudtipo || ''}
                                    onChange={e => handleChange('Uidcertsolicitudtipo', e.target.value)}
                                    required
                                >
                                    <option disabled value="">Selecciona...</option>
                                    {safeMap(selects.Certsolicitudtipo, 'Tiposolicitud')}
                                </CFormSelect>
                            </CCol>

                            <CCol md={3}>
                                <CFormLabel>
                                    Tipo Documento <span className="text-danger">*</span>
                                </CFormLabel>
                                <CFormSelect
                                    value={formData.Uidcerttipodocumento || ''}
                                    onChange={e => handleChange('Uidcerttipodocumento', e.target.value)}
                                    required
                                    disabled={loadingTipoDoc || !tipoSolicitud}
                                >
                                    <option disabled value="">Selecciona...</option>
                                    {safeMap(selects.Certtipodocumento, 'Tipodocumento')}
                                </CFormSelect>
                                {loadingTipoDoc && <CSpinner size="sm" className="ms-2" />}
                            </CCol>

                            {inputConfig.map(([field, label, type, max]) => (
                                <CCol md={3} key={field}>
                                    <CFormLabel>
                                        {label} {camposRequeridos.has(field) && <span className="text-danger">*</span>}
                                    </CFormLabel>
                                    <CFormInput
                                        type={type}
                                        maxLength={max}
                                        value={formData[field] || ''}
                                        onChange={e => handleChange(field, e.target.value)}
                                        required={camposRequeridos.has(field)}
                                    />
                                </CCol>
                            ))}

                            <CCol md={3}>
                                <CFormLabel>Fecha de Nacimiento</CFormLabel>
                                <CInputGroup className="has-validation">
                                    <CDatePicker
                                        date={formData.Fechanacimiento ?? null}
                                        maxDate={new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18)}
                                        onDateChange={newDate => handleChange('Fechanacimiento', newDate)}
                                    />
                                </CInputGroup>
                            </CCol>

                            {/* Selects adicionales */}
                            <CCol md={3}>
                                <CFormLabel>Provincia <span className="text-danger">*</span></CFormLabel>
                                <CFormSelect
                                    value={formData.Uidcertprovincia || ''}
                                    onChange={e => handleChange('Uidcertprovincia', e.target.value)}
                                    required
                                >
                                    <option disabled value="">Selecciona...</option>
                                    {safeMap(selects.Certprovincia, 'Provincia')}
                                </CFormSelect>
                            </CCol>

                            <CCol md={3}>
                                <CFormLabel>Cantón <span className="text-danger">*</span></CFormLabel>
                                <CFormSelect
                                    value={formData.Uidcertcanton || ''}
                                    onChange={e => handleChange('Uidcertcanton', e.target.value)}
                                    required
                                    disabled={loadingCantones || !formData.Uidcertprovincia}
                                >
                                    <option disabled value="">
                                        {loadingCantones ? 'Cargando...' : 'Selecciona...'}
                                    </option>
                                    {safeMap(selects.Certcanton, 'Canton')}
                                </CFormSelect>
                                {loadingCantones && <CSpinner size="sm" className="ms-2" />}
                            </CCol>

                            {/* Empresa (si aplica) */}
                            {esPersonaJuridica && (
                                <>
                                    <CCol xs={12}><hr /></CCol>
                                    <CCol md={3}>
                                        <CFormCheck
                                            label="Con RUC"
                                            checked={!!formData.us_Aplicaruc}
                                            onChange={e => handleChange('us_Aplicaruc', e.target.checked)}
                                        />
                                    </CCol>

                                    {empresaConfig.map(([field, label, type, max]) => (
                                        <CCol md={3} key={field}>
                                            <CFormLabel>
                                                {label} {camposRequeridos.has(field) && <span className="text-danger">*</span>}
                                            </CFormLabel>
                                            <CFormInput
                                                type={type}
                                                maxLength={max}
                                                value={formData[field] || ''}
                                                onChange={e => handleChange(field, e.target.value)}
                                                required={camposRequeridos.has(field)}
                                            />
                                        </CCol>
                                    ))}
                                </>
                            )}
                        </CRow>
                    </CCardBody>
                </CCard>
            </CForm>

            <CToaster ref={toaster} push={toast} placement="top-end" />
        </>
    )
})

export default PasoDatos
