import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react'
import {
    CRow, CCol, CCard, CCardBody, CFormInput, CFormSelect,
    CToast, CToastHeader, CToastBody, CToaster, CForm,
    CFormLabel, CSpinner
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle, cilXCircle } from '@coreui/icons'

const PasoVigenciaFactura = forwardRef(({ formData, setFormData, tipoSolicitud }, ref) => {
    const STATUS_OK = 200
    const toaster = useRef()
    const [toast, addToast] = useState(0)

    const [selectFormatosFirma, setSelectFormatosFirma] = useState([])
    const [selectVigencias, setSelectVigencias] = useState([])
    const [selectEstadosSolicitud, setSelectEstadosSolicitud] = useState([])

    const [loadingTipoDoc, setLoadingTipoDoc] = useState(false)

    useEffect(() => {
        _initSelect()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    useImperativeHandle(ref, () => ({
        validar: () => {
            const form = document.getElementById('formPasoVigenciaFactura')
            if (!form.checkValidity()) {
                // Encuentra el primer campo inválido y muestra alert con su nombre
                const firstInvalid = form.querySelector(':invalid')
                const name = firstInvalid?.name || 'campo requerido'
                //alert(`El campo "${name}" es obligatorio o inválido.`)
                return false
            }
            return true
        }
    }))

    const _initSelect = () => {
        _fetchSelect('/Certformatofirma/GetSelectValue', setSelectFormatosFirma)
        _fetchSelect(`/Certvigencia/GetSelectValueByIdTipoSolicitud/${tipoSolicitud}`, setSelectVigencias)
        _fetchSelect('/Certestadosolicitud/GetSelectValue', setSelectEstadosSolicitud)
    }

    const _fetchSelect = async (url, setter) => {
        setLoadingTipoDoc(true)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })

        switch (response.status) {
            case STATUS_OK:
                const data = await response.json()
                setter(data)
                break
            case 401:
                window.location.href = '/401/#/401'
                break
            default:
                _fc_ToastMsgStatus(response)
        }
        setLoadingTipoDoc(false)
    }

    const _fc_ToastMsgStatus = (result) => {
        const isOK = result.status === STATUS_OK
        const icon = isOK ? cilCheckCircle : cilXCircle
        const color = isOK ? 'text-info' : 'text-danger'
        const title = 'Editar registro'
        const message = isOK ? 'Ha sido editado correctamente!' : 'No ha sido editado!'
        addToast(_createToast(color, icon, title, message))
    }

    const _createToast = (iconClass, icon, title, text) => (
        <CToast>
            <CToastHeader closeButton>
                <CIcon icon={icon} className={iconClass} size="xl" />
                <div className="fw-bold me-auto">{title}</div>
            </CToastHeader>
            <CToastBody><h6>{text}</h6></CToastBody>
        </CToast>
    )

    const renderInput = (name, label, type = 'text', required = true, disabled = false) => (
        <CCol md={4} key={name}>
            <CFormLabel htmlFor={name}>
                {label} {required && <span className="text-danger">*</span>}
            </CFormLabel>
            <CFormInput
                type={type}
                name={name}
                id={name}
                value={formData[name] || ''}
                onChange={handleChange}
                required={required}
                disabled={disabled}
            />
        </CCol>
    )

    const renderSelect = (name, label, options, required = true, disabled = false) => (
        <CCol md={4} key={name}>
            <CFormLabel htmlFor={name}>
                {label} {required && <span className="text-danger">*</span>}
            </CFormLabel>
            <CFormSelect
                id={name}
                name={name}
                value={formData[name] || ''}
                onChange={handleChange}
                required={required}
                disabled={disabled}
                disabled={loadingTipoDoc || !tipoSolicitud}
            >
                <option disabled value="">Seleccione...</option>
                {options.map((item, index) => (
                    <option key={index} value={item.id}>{item[label.replace(/\s/g, '')] || item.Estado || item.Vigencia || item.Formatofirma}</option>
                ))}
            </CFormSelect>
            {loadingTipoDoc && <CSpinner size="sm" className="ms-2" />}
        </CCol>
    )

    return (
        <CCard>
            <CCardBody>
                <CForm id="formPasoVigenciaFactura" noValidate>
                    <CRow className="g-3">
                        {renderSelect('Uidcertformatofirma', 'Formato de Firma', selectFormatosFirma, false, true)}
                        {renderSelect('Uidcertvigencia', 'Años de Vigencia', selectVigencias)}
                        {renderSelect('Uidcertestadosolicitud', 'Estado de Solicitud', selectEstadosSolicitud)}

                        {renderInput('Pg_identificacion', 'Identificación')}
                        {renderInput('Pg_razonsocialnombreapellido', 'Razón Social / Nombres Apellidos')}
                        {renderInput('Pg_direccion', 'Dirección')}
                        {renderInput('Pg_correo', 'Correo', 'email')}
                        {renderInput('Pg_preciosinimpuestos', 'Precio sin impuestos', 'number')}
                        {renderInput('Pg_porcentajeimpuesto', 'Porcentaje impuesto', 'number')}
                        {renderInput('Pg_impuestos', 'Impuestos', 'number')}
                        {renderInput('Pg_precioconimpuestos', 'Precio con impuesto', 'number')}
                        {renderInput('Codigopromocional', 'Código Promocional', 'text', false)}
                    </CRow>
                </CForm>
                <CToaster ref={toaster} push={toast} placement="top-end" />
            </CCardBody>
        </CCard>
    )
})

export default PasoVigenciaFactura
