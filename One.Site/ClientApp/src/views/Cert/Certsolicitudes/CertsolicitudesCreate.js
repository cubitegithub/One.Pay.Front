import { React, useState, useEffect, useRef } from 'react'
import { CModal, CModalHeader, CModalBody, CModalFooter, CButton, CModalTitle, CForm, CFormLabel, CFormInput, CCol, CInputGroup, CInputGroupText, CFormSelect, CDatePicker, CToast, CToastHeader, CToastBody, CToaster } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle, cilXCircle, cilPlus } from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'



const CertsolicitudesCreate = ({ _isCreate }) => {

    const [us_ModalVisible, setus_ModalVisible] = useState(false);
    const [us_Modalloading, setus_Modalloading] = useState(false);

    const STATUS_OK = 200;

    const [toast, addToast] = useState(0);
    const toaster = useRef();

   
			const [us_id, set_us_id] = useState(null);
			const [us_Codigosolicitud, set_us_Codigosolicitud] = useState(null);
			const [us_Uidcertsolicitudtipo, set_us_Uidcertsolicitudtipo] = useState(null);
			const [us_Uidcerttipodocumento, set_us_Uidcerttipodocumento] = useState(null);
			const [us_Identificacion, set_us_Identificacion] = useState(null);
			const [us_Nombre1, set_us_Nombre1] = useState(null);
			const [us_Nombre2, set_us_Nombre2] = useState(null);
			const [us_Apellidopaterno, set_us_Apellidopaterno] = useState(null);
			const [us_Apellidomaterno, set_us_Apellidomaterno] = useState(null);
			const [us_Fechanacimiento, set_us_Fechanacimiento] = useState(null);
			const [us_Uidcertnacionalidad, set_us_Uidcertnacionalidad] = useState(null);
			const [us_Celular, set_us_Celular] = useState(null);
			const [us_Celular2, set_us_Celular2] = useState(null);
			const [us_Email, set_us_Email] = useState(null);
			const [us_Email2, set_us_Email2] = useState(null);
			const [us_Uidcertsexo, set_us_Uidcertsexo] = useState(null);
			const [us_Uidcertprovincia, set_us_Uidcertprovincia] = useState(null);
			const [us_Uidcertcanton, set_us_Uidcertcanton] = useState(null);
			const [us_Direccion, set_us_Direccion] = useState(null);
			const [us_Aplicaruc, set_us_Aplicaruc] = useState(null);
			const [us_Rl_tipoidentificacion, set_us_Rl_tipoidentificacion] = useState(null);
			const [us_Rl_identificacion, set_us_Rl_identificacion] = useState(null);
			const [us_Rl_primernombre, set_us_Rl_primernombre] = useState(null);
			const [us_Rl_segundonombre, set_us_Rl_segundonombre] = useState(null);
			const [us_Rl_apellidopaterno, set_us_Rl_apellidopaterno] = useState(null);
			const [us_Rl_apellidomaterno, set_us_Rl_apellidomaterno] = useState(null);
			const [us_De_ruc, set_us_De_ruc] = useState(null);
			const [us_De_razonsocial, set_us_De_razonsocial] = useState(null);
			const [us_De_area, set_us_De_area] = useState(null);
			const [us_De_cargosolicitante, set_us_De_cargosolicitante] = useState(null);
			const [us_Uidcertformatofirma, set_us_Uidcertformatofirma] = useState(null);
			const [us_Uidcertvigencia, set_us_Uidcertvigencia] = useState(null);
			const [us_Pg_identificacion, set_us_Pg_identificacion] = useState(null);
			const [us_Pg_razonsocialnombreapellido, set_us_Pg_razonsocialnombreapellido] = useState(null);
			const [us_Pg_direccion, set_us_Pg_direccion] = useState(null);
			const [us_Pg_correo, set_us_Pg_correo] = useState(null);
			const [us_Pg_preciosinimpuestos, set_us_Pg_preciosinimpuestos] = useState(null);
			const [us_Pg_porcentajeimpuesto, set_us_Pg_porcentajeimpuesto] = useState(null);
			const [us_Pg_impuestos, set_us_Pg_impuestos] = useState(null);
			const [us_Pg_precioconimpuestos, set_us_Pg_precioconimpuestos] = useState(null);
			const [us_Codigopromocional, set_us_Codigopromocional] = useState(null);
			const [us_Adj_cedulaladofrontal, set_us_Adj_cedulaladofrontal] = useState(null);
			const [us_Adj_cedulaladoposterior, set_us_Adj_cedulaladoposterior] = useState(null);
			const [us_Adj_fotorostroconcedula, set_us_Adj_fotorostroconcedula] = useState(null);
			const [us_Adj_hojaruc, set_us_Adj_hojaruc] = useState(null);
			const [us_Adj_constitucioncompania, set_us_Adj_constitucioncompania] = useState(null);
			const [us_Adj_nombramientorepresentante, set_us_Adj_nombramientorepresentante] = useState(null);
			const [us_Adj_aceptacionnombramiento, set_us_Adj_aceptacionnombramiento] = useState(null);
			const [us_Adj_documentoadicional, set_us_Adj_documentoadicional] = useState(null);
			const [us_Adj_cedularepresentante, set_us_Adj_cedularepresentante] = useState(null);
			const [us_Adj_autorizacionrepresentante, set_us_Adj_autorizacionrepresentante] = useState(null);
			const [us_Uidcertestadosolicitud, set_us_Uidcertestadosolicitud] = useState(null);
			const [us_Jsoncorreccion, set_us_Jsoncorreccion] = useState(null);
			const [us_Parroquia, set_us_Parroquia] = useState(null);
			const [us_Coddactilar, set_us_Coddactilar] = useState(null);
			const [us_Uidrvperfperfil, set_us_Uidrvperfperfil] = useState(null);
			const [us_Contrasenia, set_us_Contrasenia] = useState(null);
   
			const [us_SelectValue_Certsolicitudtipo, set_us_SelectValue_Certsolicitudtipo] = useState([]);
			const [us_SelectValue_Certtipodocumento, set_us_SelectValue_Certtipodocumento] = useState([]);
			const [us_SelectValue_Certnacionalidad, set_us_SelectValue_Certnacionalidad] = useState([]);
			const [us_SelectValue_Certsexo, set_us_SelectValue_Certsexo] = useState([]);
			const [us_SelectValue_Certprovincia, set_us_SelectValue_Certprovincia] = useState([]);
			const [us_SelectValue_Certcanton, set_us_SelectValue_Certcanton] = useState([]);
			const [us_SelectValue_Certformatofirma, set_us_SelectValue_Certformatofirma] = useState([]);
			const [us_SelectValue_Certvigencia, set_us_SelectValue_Certvigencia] = useState([]);
			const [us_SelectValue_Certestadosolicitud, set_us_SelectValue_Certestadosolicitud] = useState([]);
			const [us_SelectValue_Rvperfperfil, set_us_SelectValue_Rvperfperfil] = useState([]);
      
     
    const [us_Validated, set_us_Validated] = useState(false);
 

    const exampleToast = (_ToastMsgIconClass, _ToastMsgIconImage, _ToastMsgTextTittle, _ToastMsgText) => {
        return (
            <CToast>
                <CToastHeader closeButton>
                    <CIcon icon={_ToastMsgIconImage} className={_ToastMsgIconClass} size="xl" />
                    <div className="fw-bold me-auto"> {_ToastMsgTextTittle} </div>
                </CToastHeader>
                <CToastBody>
                    <h6> {_ToastMsgText} </h6>
                </CToastBody>
            </CToast>
        )
    }
      
 
	
			
		 const _fc_SelectValue_Certsolicitudtipo = async () => {
         const settings = {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
       };

       const response = await fetch("/Certsolicitudtipo/GetSelectValue", settings);


       switch (response.status) {
           case STATUS_OK:
               const array = [];
               array.push(...await response.json()); 
			   set_us_SelectValue_Certsolicitudtipo(array);
			   
               break;
           case 401:
               window.location.href = "/401/#/401";
               break;
           default:
               _fc_ToastMsgStatus(response);
       }

   }		
		
			
		 const _fc_SelectValue_Certtipodocumento = async () => {
         const settings = {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
       };

       const response = await fetch("/Certtipodocumento/GetSelectValue", settings);


       switch (response.status) {
           case STATUS_OK:
               const array = [];
               array.push(...await response.json()); 
			   set_us_SelectValue_Certtipodocumento(array);
			   
               break;
           case 401:
               window.location.href = "/401/#/401";
               break;
           default:
               _fc_ToastMsgStatus(response);
       }

   }		
		
			
		 const _fc_SelectValue_Certnacionalidad = async () => {
         const settings = {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
       };

       const response = await fetch("/Certnacionalidad/GetSelectValue", settings);


       switch (response.status) {
           case STATUS_OK:
               const array = [];
               array.push(...await response.json()); 
			   set_us_SelectValue_Certnacionalidad(array);
			   
               break;
           case 401:
               window.location.href = "/401/#/401";
               break;
           default:
               _fc_ToastMsgStatus(response);
       }

   }		
		
			
		 const _fc_SelectValue_Certsexo = async () => {
         const settings = {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
       };

       const response = await fetch("/Certsexo/GetSelectValue", settings);


       switch (response.status) {
           case STATUS_OK:
               const array = [];
               array.push(...await response.json()); 
			   set_us_SelectValue_Certsexo(array);
			   
               break;
           case 401:
               window.location.href = "/401/#/401";
               break;
           default:
               _fc_ToastMsgStatus(response);
       }

   }		
		
			
		 const _fc_SelectValue_Certprovincia = async () => {
         const settings = {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
       };

       const response = await fetch("/Certprovincia/GetSelectValue", settings);


       switch (response.status) {
           case STATUS_OK:
               const array = [];
               array.push(...await response.json()); 
			   set_us_SelectValue_Certprovincia(array);
			   
               break;
           case 401:
               window.location.href = "/401/#/401";
               break;
           default:
               _fc_ToastMsgStatus(response);
       }

   }		
		
			
		 const _fc_SelectValue_Certcanton = async () => {
         const settings = {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
       };

       const response = await fetch("/Certcanton/GetSelectValue", settings);


       switch (response.status) {
           case STATUS_OK:
               const array = [];
               array.push(...await response.json()); 
			   set_us_SelectValue_Certcanton(array);
			   
               break;
           case 401:
               window.location.href = "/401/#/401";
               break;
           default:
               _fc_ToastMsgStatus(response);
       }

   }		
		
			
		 const _fc_SelectValue_Certformatofirma = async () => {
         const settings = {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
       };

       const response = await fetch("/Certformatofirma/GetSelectValue", settings);


       switch (response.status) {
           case STATUS_OK:
               const array = [];
               array.push(...await response.json()); 
			   set_us_SelectValue_Certformatofirma(array);
			   
               break;
           case 401:
               window.location.href = "/401/#/401";
               break;
           default:
               _fc_ToastMsgStatus(response);
       }

   }		
		
			
		 const _fc_SelectValue_Certvigencia = async () => {
         const settings = {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
       };

       const response = await fetch("/Certvigencia/GetSelectValue", settings);


       switch (response.status) {
           case STATUS_OK:
               const array = [];
               array.push(...await response.json()); 
			   set_us_SelectValue_Certvigencia(array);
			   
               break;
           case 401:
               window.location.href = "/401/#/401";
               break;
           default:
               _fc_ToastMsgStatus(response);
       }

   }		
		
			
		 const _fc_SelectValue_Certestadosolicitud = async () => {
         const settings = {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
       };

       const response = await fetch("/Certestadosolicitud/GetSelectValue", settings);


       switch (response.status) {
           case STATUS_OK:
               const array = [];
               array.push(...await response.json()); 
			   set_us_SelectValue_Certestadosolicitud(array);
			   
               break;
           case 401:
               window.location.href = "/401/#/401";
               break;
           default:
               _fc_ToastMsgStatus(response);
       }

   }		
		
			
		 const _fc_SelectValue_Rvperfperfil = async () => {
         const settings = {
           method: 'POST',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
           },
       };

       const response = await fetch("/Rvperfperfil/GetSelectValue", settings);


       switch (response.status) {
           case STATUS_OK:
               const array = [];
               array.push(...await response.json()); 
			   set_us_SelectValue_Rvperfperfil(array);
			   
               break;
           case 401:
               window.location.href = "/401/#/401";
               break;
           default:
               _fc_ToastMsgStatus(response);
       }

   }		
		   
		  
  



    const _fc_ToastMsgStatus = (result) => {
        
        var _ToastMsgIconClass;
        var _ToastMsgIconImage;
        var _ToastMsgText;
        var _ToastMsgTextTittle;

        if (result != null) {
            setus_ModalVisible(false);

            if (result.status == STATUS_OK) {
                _ToastMsgIconClass = "text-info";
                _ToastMsgIconImage = cilCheckCircle;
                _ToastMsgTextTittle = "Ingresa el registro";
                _ToastMsgText = "¡Se ha registrado con éxito!";
            }
            else {
                _ToastMsgIconClass = "text-danger";
                _ToastMsgIconImage = cilXCircle;
                _ToastMsgTextTittle = "Ingresa el registro";
                _ToastMsgText = "¡No se ha registrado!";
            }
            addToast(exampleToast(_ToastMsgIconClass, _ToastMsgIconImage, _ToastMsgTextTittle, _ToastMsgText))
        }
    }

    const _fc_saveChangeCreate = async () => {
        const dataJson = {
			
			id: us_id,
			Codigosolicitud: us_Codigosolicitud,
			Uidcertsolicitudtipo: us_Uidcertsolicitudtipo,
			Uidcerttipodocumento: us_Uidcerttipodocumento,
			Identificacion: us_Identificacion,
			Nombre1: us_Nombre1,
			Nombre2: us_Nombre2,
			Apellidopaterno: us_Apellidopaterno,
			Apellidomaterno: us_Apellidomaterno,
			Fechanacimiento: us_Fechanacimiento,
			Uidcertnacionalidad: us_Uidcertnacionalidad,
			Celular: us_Celular,
			Celular2: us_Celular2,
			Email: us_Email,
			Email2: us_Email2,
			Uidcertsexo: us_Uidcertsexo,
			Uidcertprovincia: us_Uidcertprovincia,
			Uidcertcanton: us_Uidcertcanton,
			Direccion: us_Direccion,
			Aplicaruc: us_Aplicaruc,
			Rl_tipoidentificacion: us_Rl_tipoidentificacion,
			Rl_identificacion: us_Rl_identificacion,
			Rl_primernombre: us_Rl_primernombre,
			Rl_segundonombre: us_Rl_segundonombre,
			Rl_apellidopaterno: us_Rl_apellidopaterno,
			Rl_apellidomaterno: us_Rl_apellidomaterno,
			De_ruc: us_De_ruc,
			De_razonsocial: us_De_razonsocial,
			De_area: us_De_area,
			De_cargosolicitante: us_De_cargosolicitante,
			Uidcertformatofirma: us_Uidcertformatofirma,
			Uidcertvigencia: us_Uidcertvigencia,
			Pg_identificacion: us_Pg_identificacion,
			Pg_razonsocialnombreapellido: us_Pg_razonsocialnombreapellido,
			Pg_direccion: us_Pg_direccion,
			Pg_correo: us_Pg_correo,
			Pg_preciosinimpuestos: us_Pg_preciosinimpuestos,
			Pg_porcentajeimpuesto: us_Pg_porcentajeimpuesto,
			Pg_impuestos: us_Pg_impuestos,
			Pg_precioconimpuestos: us_Pg_precioconimpuestos,
			Codigopromocional: us_Codigopromocional,
			Adj_cedulaladofrontal: us_Adj_cedulaladofrontal,
			Adj_cedulaladoposterior: us_Adj_cedulaladoposterior,
			Adj_fotorostroconcedula: us_Adj_fotorostroconcedula,
			Adj_hojaruc: us_Adj_hojaruc,
			Adj_constitucioncompania: us_Adj_constitucioncompania,
			Adj_nombramientorepresentante: us_Adj_nombramientorepresentante,
			Adj_aceptacionnombramiento: us_Adj_aceptacionnombramiento,
			Adj_documentoadicional: us_Adj_documentoadicional,
			Adj_cedularepresentante: us_Adj_cedularepresentante,
			Adj_autorizacionrepresentante: us_Adj_autorizacionrepresentante,
			Uidcertestadosolicitud: us_Uidcertestadosolicitud,
			Jsoncorreccion: us_Jsoncorreccion,
			Parroquia: us_Parroquia,
			Coddactilar: us_Coddactilar,
			Uidrvperfperfil: us_Uidrvperfperfil,
			Contrasenia: us_Contrasenia,
             
        };

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataJson)
        };

        setus_Modalloading(true);
        const response = await fetch("/Certsolicitudes/Create", settings);

        switch (response.status) {
            case STATUS_OK:
                _isCreate();
                _fc_ToastMsgStatus(response);
                setus_Modalloading(false);
                break;
            case 401:
                window.location.href = "/401/#/401";
                break;
            default:
                _fc_ToastMsgStatus(response);
        } 
 
    }

    const _handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        set_us_Validated(true)
    }

const _initSelect  = async ()=>{

			_fc_SelectValue_Certsolicitudtipo();
			_fc_SelectValue_Certtipodocumento();
			_fc_SelectValue_Certnacionalidad();
			_fc_SelectValue_Certsexo();
			_fc_SelectValue_Certprovincia();
			_fc_SelectValue_Certcanton();
			_fc_SelectValue_Certformatofirma();
			_fc_SelectValue_Certvigencia();
			_fc_SelectValue_Certestadosolicitud();
			_fc_SelectValue_Rvperfperfil();
}
    return (
        <>
            <CButton color="light" shape="rounded-pill" onClick={() => { _initSelect(); setus_ModalVisible(!us_ModalVisible); }}>
                <CIcon icon={cilPlus} size="sm" /> Crear</CButton>

            <CModal
                size="xl"
                alignment="center"
                backdrop="static"
                visible={us_ModalVisible}
                onClose={() => setus_ModalVisible(false)}
                aria-labelledby="ModalTitleCertsolicitudes"
            >
                <CModalHeader onClose={() => setus_ModalVisible(false)}>
                    <CModalTitle id="ModalTitleCertsolicitudes">Registro</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Introduce tus datos</p>
                    <CForm
                        className="row g-3 needs-validation"
                        noValidate
                        validated={us_Validated}
                        onSubmit={_handleSubmit}
                        id={"FormCertsolicitudesCreate"}
                    >
					
					 

























































                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="number"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Cod. Solicitud."
                                label="Cod. Solicitud"
                                  
                                codigosolicitud
                                tooltipFeedback
                                onChange={(e) => set_us_Codigosolicitud(e.target.value)}
                            />
                        </CCol> 
                     
                        <CCol md={4} className="position-relative">
                         <CFormSelect
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Tipo de Solicitud"
                                value = {us_Uidcertsolicitudtipo}
                                 
                                tooltipFeedback 
                                uidcertsolicitudtipo
                                onChange={(e) => set_us_Uidcertsolicitudtipo(e.target.value)}
                            >
                                <option disabled="" value={""}>
                                    Choose...
                                </option>
                                {us_SelectValue_Certsolicitudtipo.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.Tiposolicitud}
                                    </option>
                                ))}
                            </CFormSelect> 
                            </CCol> 
                     
                        <CCol md={4} className="position-relative">
                         <CFormSelect
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Tipo de Documento"
                                value = {us_Uidcerttipodocumento}
                                 
                                tooltipFeedback 
                                uidcerttipodocumento
                                onChange={(e) => set_us_Uidcerttipodocumento(e.target.value)}
                            >
                                <option disabled="" value={""}>
                                    Choose...
                                </option>
                                {us_SelectValue_Certtipodocumento.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.Tipodocumento}
                                    </option>
                                ))}
                            </CFormSelect> 
                            </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="20"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Nro. de Documento."
                                label="Nro. de Documento"
                                
                                identificacion
                                tooltipFeedback
                                onChange={(e) => set_us_Identificacion(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Primer Nombre."
                                label="Primer Nombre"
                                
                                nombre1
                                tooltipFeedback
                                onChange={(e) => set_us_Nombre1(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Segundo Nombre."
                                label="Segundo Nombre"
                                
                                nombre2
                                tooltipFeedback
                                onChange={(e) => set_us_Nombre2(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Apellido Paterno."
                                label="Apellido Paterno"
                                
                                apellidopaterno
                                tooltipFeedback
                                onChange={(e) => set_us_Apellidopaterno(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Apellido Materno."
                                label="Apellido Materno"
                                
                                apellidomaterno
                                tooltipFeedback
                                onChange={(e) => set_us_Apellidomaterno(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="date"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Fecha Nacimiento."
                                label="Fecha Nacimiento"
                                  
                                fechanacimiento
                                tooltipFeedback
                                onChange={(e) => set_us_Fechanacimiento(e.target.value)}
                            />
                        </CCol> 
                     
                        <CCol md={4} className="position-relative">
                         <CFormSelect
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Nacionalidad"
                                value = {us_Uidcertnacionalidad}
                                 
                                tooltipFeedback 
                                uidcertnacionalidad
                                onChange={(e) => set_us_Uidcertnacionalidad(e.target.value)}
                            >
                                <option disabled="" value={""}>
                                    Choose...
                                </option>
                                {us_SelectValue_Certnacionalidad.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.Nacionalidad}
                                    </option>
                                ))}
                            </CFormSelect> 
                            </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="20"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Celular."
                                label="Celular"
                                
                                celular
                                tooltipFeedback
                                onChange={(e) => set_us_Celular(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="20"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Celular 2."
                                label="Celular 2"
                                
                                celular2
                                tooltipFeedback
                                onChange={(e) => set_us_Celular2(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Email."
                                label="Email"
                                
                                email
                                tooltipFeedback
                                onChange={(e) => set_us_Email(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Email2."
                                label="Email2"
                                
                                email2
                                tooltipFeedback
                                onChange={(e) => set_us_Email2(e.target.value)}
                            />
                        </CCol> 
                     
                        <CCol md={4} className="position-relative">
                         <CFormSelect
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Sexo"
                                value = {us_Uidcertsexo}
                                 
                                tooltipFeedback 
                                uidcertsexo
                                onChange={(e) => set_us_Uidcertsexo(e.target.value)}
                            >
                                <option disabled="" value={""}>
                                    Choose...
                                </option>
                                {us_SelectValue_Certsexo.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.Sexo}
                                    </option>
                                ))}
                            </CFormSelect> 
                            </CCol> 
                     
                        <CCol md={4} className="position-relative">
                         <CFormSelect
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Provincia"
                                value = {us_Uidcertprovincia}
                                 
                                tooltipFeedback 
                                uidcertprovincia
                                onChange={(e) => set_us_Uidcertprovincia(e.target.value)}
                            >
                                <option disabled="" value={""}>
                                    Choose...
                                </option>
                                {us_SelectValue_Certprovincia.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.Provincia}
                                    </option>
                                ))}
                            </CFormSelect> 
                            </CCol> 
                     
                        <CCol md={4} className="position-relative">
                         <CFormSelect
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Ciudad"
                                value = {us_Uidcertcanton}
                                 
                                tooltipFeedback 
                                uidcertcanton
                                onChange={(e) => set_us_Uidcertcanton(e.target.value)}
                            >
                                <option disabled="" value={""}>
                                    Choose...
                                </option>
                                {us_SelectValue_Certcanton.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.Canton}
                                    </option>
                                ))}
                            </CFormSelect> 
                            </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="300"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Dirección Completa."
                                label="Dirección Completa"
                                
                                direccion
                                tooltipFeedback
                                onChange={(e) => set_us_Direccion(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="checkbox"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Con RUC."
                                label="Con RUC"
                                  
                                aplicaruc
                                tooltipFeedback
                                onChange={(e) => set_us_Aplicaruc(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="36"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Tipo de Documento."
                                label="Tipo de Documento"
                                
                                rl_tipoidentificacion
                                tooltipFeedback
                                onChange={(e) => set_us_Rl_tipoidentificacion(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="20"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Nro. de Documento."
                                label="Nro. de Documento"
                                
                                rl_identificacion
                                tooltipFeedback
                                onChange={(e) => set_us_Rl_identificacion(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Primer Nombre."
                                label="Primer Nombre"
                                
                                rl_primernombre
                                tooltipFeedback
                                onChange={(e) => set_us_Rl_primernombre(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Segundo Nombre."
                                label="Segundo Nombre"
                                
                                rl_segundonombre
                                tooltipFeedback
                                onChange={(e) => set_us_Rl_segundonombre(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Apellido Paterno."
                                label="Apellido Paterno"
                                
                                rl_apellidopaterno
                                tooltipFeedback
                                onChange={(e) => set_us_Rl_apellidopaterno(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Apellido Materno."
                                label="Apellido Materno"
                                
                                rl_apellidomaterno
                                tooltipFeedback
                                onChange={(e) => set_us_Rl_apellidomaterno(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="20"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Ruc."
                                label="Ruc"
                                
                                de_ruc
                                tooltipFeedback
                                onChange={(e) => set_us_De_ruc(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="300"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Razón Social."
                                label="Razón Social"
                                
                                de_razonsocial
                                tooltipFeedback
                                onChange={(e) => set_us_De_razonsocial(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="100"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Area."
                                label="Area"
                                
                                de_area
                                tooltipFeedback
                                onChange={(e) => set_us_De_area(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Cargo del Solicitante."
                                label="Cargo del Solicitante"
                                
                                de_cargosolicitante
                                tooltipFeedback
                                onChange={(e) => set_us_De_cargosolicitante(e.target.value)}
                            />
                        </CCol> 
                     
                        <CCol md={4} className="position-relative">
                         <CFormSelect
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Formato de Firma"
                                value = {us_Uidcertformatofirma}
                                 
                                tooltipFeedback 
                                uidcertformatofirma
                                onChange={(e) => set_us_Uidcertformatofirma(e.target.value)}
                            >
                                <option disabled="" value={""}>
                                    Choose...
                                </option>
                                {us_SelectValue_Certformatofirma.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.Formatofirma}
                                    </option>
                                ))}
                            </CFormSelect> 
                            </CCol> 
                     
                        <CCol md={4} className="position-relative">
                         <CFormSelect
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Años de Vigencia"
                                value = {us_Uidcertvigencia}
                                 
                                tooltipFeedback 
                                uidcertvigencia
                                onChange={(e) => set_us_Uidcertvigencia(e.target.value)}
                            >
                                <option disabled="" value={""}>
                                    Choose...
                                </option>
                                {us_SelectValue_Certvigencia.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.Vigencia}
                                    </option>
                                ))}
                            </CFormSelect> 
                            </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="20"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Identificación."
                                label="Identificación"
                                
                                pg_identificacion
                                tooltipFeedback
                                onChange={(e) => set_us_Pg_identificacion(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="300"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Razón Social/Nombres Apellidos."
                                label="Razón Social/Nombres Apellidos"
                                
                                pg_razonsocialnombreapellido
                                tooltipFeedback
                                onChange={(e) => set_us_Pg_razonsocialnombreapellido(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="300"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Dirección."
                                label="Dirección"
                                
                                pg_direccion
                                tooltipFeedback
                                onChange={(e) => set_us_Pg_direccion(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Correo."
                                label="Correo"
                                
                                pg_correo
                                tooltipFeedback
                                onChange={(e) => set_us_Pg_correo(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="number"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Precio sin impuestos."
                                label="Precio sin impuestos"
                                   
                                pg_preciosinimpuestos
                                tooltipFeedback
                                onChange={(e) => set_us_Pg_preciosinimpuestos(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="number"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Porcentaje impuesto."
                                label="Porcentaje impuesto"
                                   
                                pg_porcentajeimpuesto
                                tooltipFeedback
                                onChange={(e) => set_us_Pg_porcentajeimpuesto(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="number"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Impuestos."
                                label="Impuestos"
                                   
                                pg_impuestos
                                tooltipFeedback
                                onChange={(e) => set_us_Pg_impuestos(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="number"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Precio con impuesto."
                                label="Precio con impuesto"
                                   
                                pg_precioconimpuestos
                                tooltipFeedback
                                onChange={(e) => set_us_Pg_precioconimpuestos(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="20"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Cód. Promocional."
                                label="Cód. Promocional"
                                
                                codigopromocional
                                tooltipFeedback
                                onChange={(e) => set_us_Codigopromocional(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Cédula lado frontal."
                                label="Cédula lado frontal"
                                
                                adj_cedulaladofrontal
                                tooltipFeedback
                                onChange={(e) => set_us_Adj_cedulaladofrontal(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Cédula lado posterior."
                                label="Cédula lado posterior"
                                
                                adj_cedulaladoposterior
                                tooltipFeedback
                                onChange={(e) => set_us_Adj_cedulaladoposterior(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Foto con cédula en mano."
                                label="Foto con cédula en mano"
                                
                                adj_fotorostroconcedula
                                tooltipFeedback
                                onChange={(e) => set_us_Adj_fotorostroconcedula(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Hoja de RUC (SRI)."
                                label="Hoja de RUC (SRI)"
                                
                                adj_hojaruc
                                tooltipFeedback
                                onChange={(e) => set_us_Adj_hojaruc(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Constitución de la Compañia."
                                label="Constitución de la Compañia"
                                
                                adj_constitucioncompania
                                tooltipFeedback
                                onChange={(e) => set_us_Adj_constitucioncompania(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Nombramiento del Representante legal."
                                label="Nombramiento del Representante legal"
                                
                                adj_nombramientorepresentante
                                tooltipFeedback
                                onChange={(e) => set_us_Adj_nombramientorepresentante(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Aceptación del Representante legal."
                                label="Aceptación del Representante legal"
                                
                                adj_aceptacionnombramiento
                                tooltipFeedback
                                onChange={(e) => set_us_Adj_aceptacionnombramiento(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Documento adicional."
                                label="Documento adicional"
                                
                                adj_documentoadicional
                                tooltipFeedback
                                onChange={(e) => set_us_Adj_documentoadicional(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Cédula Representante."
                                label="Cédula Representante"
                                
                                adj_cedularepresentante
                                tooltipFeedback
                                onChange={(e) => set_us_Adj_cedularepresentante(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Autorización del Representante."
                                label="Autorización del Representante"
                                
                                adj_autorizacionrepresentante
                                tooltipFeedback
                                onChange={(e) => set_us_Adj_autorizacionrepresentante(e.target.value)}
                            />
                        </CCol> 
                     
                        <CCol md={4} className="position-relative">
                         <CFormSelect
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Estado"
                                value = {us_Uidcertestadosolicitud}
                                 
                                tooltipFeedback 
                                uidcertestadosolicitud
                                onChange={(e) => set_us_Uidcertestadosolicitud(e.target.value)}
                            >
                                <option disabled="" value={""}>
                                    Choose...
                                </option>
                                {us_SelectValue_Certestadosolicitud.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.Estado}
                                    </option>
                                ))}
                            </CFormSelect> 
                            </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe jsoncorreccion."
                                label="jsoncorreccion"
                                
                                jsoncorreccion
                                tooltipFeedback
                                onChange={(e) => set_us_Jsoncorreccion(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="100"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Parroquia."
                                label="Parroquia"
                                
                                parroquia
                                tooltipFeedback
                                onChange={(e) => set_us_Parroquia(e.target.value)}
                            />
                        </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="300"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Cod. Dactilar."
                                label="Cod. Dactilar"
                                
                                coddactilar
                                tooltipFeedback
                                onChange={(e) => set_us_Coddactilar(e.target.value)}
                            />
                        </CCol> 
                     
                        <CCol md={4} className="position-relative">
                         <CFormSelect
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Perfil"
                                value = {us_Uidrvperfperfil}
                                 
                                tooltipFeedback 
                                uidrvperfperfil
                                onChange={(e) => set_us_Uidrvperfperfil(e.target.value)}
                            >
                                <option disabled="" value={""}>
                                    Choose...
                                </option>
                                {us_SelectValue_Rvperfperfil.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.Razonsocialnombreapellido}
                                    </option>
                                ))}
                            </CFormSelect> 
                            </CCol> 
                     
                    <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Contraseña."
                                label="Contraseña"
                                
                                contrasenia
                                tooltipFeedback
                                onChange={(e) => set_us_Contrasenia(e.target.value)}
                            />
                        </CCol> 
                                               
                        
                    </CForm>

                </CModalBody>
                <CModalFooter>
                    {us_Modalloading ?
                        <CButton color="secondary" disabled onClick={() => setus_ModalVisible(false)}>Cerrar</CButton> :
                        <CButton color="secondary" onClick={() => setus_ModalVisible(false)}>Cerrar</CButton>}
                    <CLoadingButton type="submit" form="FormCreate" color="primary" loading={us_Modalloading} onClick={() => _fc_saveChangeCreate()}>
                        {us_Modalloading ? "Guardando" : "Guardar"}
                    </CLoadingButton>
                </CModalFooter>
            </CModal>

            <CToaster ref={toaster} push={toast} placement="top-end" />
        </>
    )
}

export default CertsolicitudesCreate 