import React, { forwardRef, useImperativeHandle } from 'react'
import {
    CRow, CCol, CCard, CCardBody, CFormInput, CFormLabel, CForm,
} from '@coreui/react-pro'

const PasoAdjuntos = forwardRef(({ formData, setFormData, tipoSolicitud }, ref) => {
    const esPersonaJuridica = tipoSolicitud === 'ac37a540-b9e1-4e81-9bc6-aa495fe43ac2'
    const mostrarHojaRuc = tipoSolicitud !== '5501f905-ece3-4fc5-9373-38af547d485a'

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const camposRequeridos = new Set([
        'Adj_cedulaladofrontal',
        'Adj_cedulaladoposterior',
        'Adj_fotorostroconcedula',
        ...(mostrarHojaRuc ? ['Adj_hojaruc'] : []),
        ...(esPersonaJuridica ? [
            'Adj_constitucioncompania',
            'Adj_aceptacionnombramiento',
            'Adj_documentoadicional',
            'Adj_cedularepresentante',
            'Adj_autorizacionrepresentante'
        ] : [])
    ])

    useImperativeHandle(ref, () => ({
        validar: () => {
            const form = document.getElementById('formPasoAdjuntos')
            return form?.checkValidity?.() ?? false
        }
    }))

    const renderInput = (name, label) => (
        <CCol md={4} key={name}>
            <CFormLabel>
                {label} {camposRequeridos.has(name) && <span className="text-danger">*</span>}
            </CFormLabel>
            <CFormInput
                type="text"
                name={name}
                value={formData[name] || ''}
                onChange={handleInputChange}
                required={camposRequeridos.has(name)}
            />
        </CCol>
    )

    return (
        <CCard>
            <CCardBody>
                <CForm id="formPasoAdjuntos">
                    <h5 className="mb-3">Adjuntos</h5>
                    <p className="text-muted mb-4"><span className="text-danger">*</span> Campos obligatorios</p>

                    <CRow className="mb-3">
                        {renderInput('Adj_cedulaladofrontal', 'Cédula lado frontal')}
                        {renderInput('Adj_cedulaladoposterior', 'Cédula lado posterior')}
                        {renderInput('Adj_fotorostroconcedula', 'Foto con cédula en mano')}
                        {mostrarHojaRuc && renderInput('Adj_hojaruc', 'Hoja de RUC (SRI)')}
                    </CRow>

                    {esPersonaJuridica && (
                        <CRow className="mb-3">
                            {renderInput('Adj_constitucioncompania', 'Constitución de la Compañía')}
                            {renderInput('Adj_aceptacionnombramiento', 'Aceptación del Representante legal')}
                            {renderInput('Adj_documentoadicional', 'Documento adicional')}
                            {renderInput('Adj_cedularepresentante', 'Cédula Representante')}
                            {renderInput('Adj_autorizacionrepresentante', 'Autorización del Representante')}
                        </CRow>
                    )}
                </CForm>
            </CCardBody>
        </CCard>
    )
})

export default PasoAdjuntos
