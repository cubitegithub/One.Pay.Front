import  React,{ useEffect } from 'react'
import {
    CButton,
    CCol,
    CContainer,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react-pro' 

const Page401 = () => {

    const _fc_redirect = async () => {  
        window.location.href = '/'
    }
    const CleanTokenLocal = () => {
        localStorage.removeItem('user');
    }

    useEffect(() => {
       
            CleanTokenLocal();
       
    }, []);  
     
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <CCol md={5}>
                        <div className="clearfix">
                            <h1 className="float-start display-3 me-4">401</h1>
                            <h4 className="pt-3">Oops! You{"'"} session has expired.</h4>
                            <p className="text-medium-emphasis float-start">
                                Try logging in again.
                            </p>
                        </div> 
                            <div className="row">
                            <CButton color="info" onClick={()=>_fc_redirect()} >Return to login</CButton>
                        </div>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Page401

