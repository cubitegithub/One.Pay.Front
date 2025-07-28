import React, { useState, useRef, useEffect } from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CFormInput, CRow, CCol } from '@coreui/react-pro';

 
const maskEmail = (email) => {
    if (email == undefined || email == '') {

        return email;
    }
    else {
        if (email.includes('@')) {
            const [name, domain] = email.split('@');
            if (name != '' && name != undefined && name.length > 2) {
                if (name.length <= 2) return email; // Si el nombre es muy corto, no ocultamos nada
                return `${name.substring(0, 1)}${'*'.repeat(name.length-2)}${name.substring(name.length - 1)}@${domain}`;
            }
            else {
                return email;
            }
        } else {
            return email;
        }
    }
};


 
const OtpModal = ({ otp_visible, otp_onClose, otp_onSubmit, otp_onResend, otp_email,  otp_data }) => {
    const [otp_code, setOptCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const [otpmensajeError, setOtpmensajeError] = useState('');




    useEffect(() => {
        if (otp_visible) {
            setOptCode(['', '', '', '', '', '']); 
            if (inputRefs.current[0]) {
                inputRefs.current[0].focus();
            }
            setOtpmensajeError('');
        }
    }, [otp_visible]);

    const handleChange = (index, value) => {
        if (/^[0-9]?$/.test(value)) {
            const newCode = [...otp_code];
            newCode[index] = value;
            setOptCode(newCode);

            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            const newCode = [...otp_code];
            newCode[index] = '';
            setOptCode(newCode);

            if (!otp_code[index] && index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleSubmit = async () => {
        setOtpmensajeError('');
        const otpValue = otp_code.join('');
        if (otpValue.length === 6) {
          
            const dataJson = {
                OtpCode: otpValue,
                Data: otp_data
            };
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataJson)
            };
            const response = await fetch("/Otp/Validar", settings);

            let resultJson = {};
            if (response.status == 200) {
                resultJson = await response.json();

                otp_visible = false;
                otp_data = resultJson;
                otp_onSubmit(otp_data);
            }
            else {
                setOtpmensajeError('Código  incorrecto!');
            }
    
        }
    };

    return (
        <CModal visible={otp_visible} onClose={otp_onClose} backdrop="static" alignment="center">
            <CModalHeader closeButton>
                <CModalTitle>Verificación OTP</CModalTitle>
            </CModalHeader>
            <CModalBody>
                <p className="text-center">
                    Hemos enviado un código de verificación a tu correo <strong>{maskEmail(otp_email)}</strong>. <br />
                    Por favor, ingresa el código a continuación:
                </p>
                <CRow className="justify-content-center">
                    {otp_code.map((digit, index) => (
                        <CCol key={index} xs="auto">
                            <CFormInput
                                ref={(el) => (inputRefs.current[index] = el)}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                type="text"
                                maxLength={1}
                                className="text-center"
                                style={{ width: '40px', fontSize: '1.5rem' }}
                                autoFocus={index === 0}
                            />
                        </CCol>
                    ))}
                </CRow>
               
                <div style={{ color: 'red', fontWeight: 'bold', padding: '10px', textAlign: 'center' }}> {otpmensajeError} </div>
                <p className="text-center mt-3">
                    ¿No recibiste el código?
                    <CButton color="link" onClick={otp_onResend}>Reenviar código</CButton>
                </p>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={otp_onClose}>Cancelar</CButton>
                <CButton color="primary" onClick={handleSubmit}>Verificar</CButton>
            </CModalFooter>
        </CModal>
    );
};

export default OtpModal;
