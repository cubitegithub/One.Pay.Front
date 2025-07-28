import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react-pro'
import CertsolicitudesTable from './CertsolicitudesTable' 

const Certsolicitudes = () => {    
    return (
        <CRow>
            <CCol xs={12}>               
                <CCard className="mb-4">
                    <CCardHeader>
                        <div className="row">
                            <div className="col-md-10">
                                <h3> <strong>Certsolicitudes</strong></h3>
                            </div>
                           
                        </div>
                        
                    </CCardHeader>
                    <CCardBody> 
                        <CertsolicitudesTable/>                                           
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Certsolicitudes
