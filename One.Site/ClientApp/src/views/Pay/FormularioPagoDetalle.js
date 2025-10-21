import React, { useState, useRef } from 'react'
import {
    CCol, CRow, CCard, CCardBody, CCardHeader
} from '@coreui/react-pro'
import { useNavigate } from 'react-router-dom'

const FormularioPagoDetalle = ({ token }) => {
    const [tipoPagoSeleccionado, setTipoPagoSeleccionado] = useState('')
    const navigate = useNavigate()

    const handleSeleccionPago = (tipo) => {
        setTipoPagoSeleccionado(tipo)

        if (tipo === 'transferencia') navigate(`/SeleccionProveedor`)
        if (tipo === 'Deposito') navigate('/deposito')
        if (tipo === 'paypal') navigate('/paypal')
    }

    return (
        <CRow className="mb-4 justify-content-center">
            <CCol xs={6} md={3}>
                <CCard
                    onClick={() => handleSeleccionPago('transferencia')}
                    className={`text-center cursor-pointer ${tipoPagoSeleccionado === 'transferencia' ? 'border-success border-3' : ''}`}
                >
                    <CCardHeader className="bg-primary text-white">Transferencia</CCardHeader>
                    <CCardBody>Selecciona para ingresar detalles de transferencia bancaria.</CCardBody>
                </CCard>
            </CCol>
            <CCol xs={6} md={3}>
                <CCard
                    onClick={() => handleSeleccionPago('Deposito')}
                    className={`text-center cursor-pointer ${tipoPagoSeleccionado === 'Deposito' ? 'border-success border-3' : ''}`}
                >
                    <CCardHeader className="bg-success text-white">Deposito</CCardHeader>
                    <CCardBody>Selecciona para ingresar detalles del deposito.</CCardBody>
                </CCard>
            </CCol>
            <CCol xs={6} md={3}>
                <CCard
                    onClick={() => handleSeleccionPago('paypal')}
                    className={`text-center cursor-pointer ${tipoPagoSeleccionado === 'paypal' ? 'border-success border-3' : ''}`}
                >
                    <CCardHeader className="bg-warning text-dark">PayPal</CCardHeader>
                    <CCardBody>Selecciona para ingresar datos de PayPal.</CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default FormularioPagoDetalle
