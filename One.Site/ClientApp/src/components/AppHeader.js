import React from 'react'
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderDivider,
} from '@coreui/react-pro'
import { CImage } from '@coreui/react'
import { AppBreadcrumb } from './index'
import logo from '../../src/assets/images/Logo.png'

const AppHeader = () => {  
    
    return (
        <CHeader position="sticky" className="mb-4">
            <CContainer fluid className="d-flex align-items-center">
                <CHeaderBrand to="/" className="me-auto">
                    <CImage src={logo} alt="Logo" style={{ height: '40px' }} />
                </CHeaderBrand>

                <AppBreadcrumb />
            </CContainer>

            <CHeaderDivider />
        </CHeader>
    )
}

export default AppHeader
