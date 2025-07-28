import { React, useState, useEffect, useRef } from 'react'
import { CModal, CModalHeader, CModalBody, CModalFooter, CButton, CModalTitle, CForm, CFormLabel, CFormInput, CCol, CInputGroup, CInputGroupText, CFormSelect, CDatePicker, CToast, CToastHeader, CToastBody, CToaster } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilCheckCircle, cilXCircle } from '@coreui/icons'
import { CLoadingButton } from '@coreui/react-pro'

const CertsolicitudesUpdate = () => {

    const [us_ModalVisible, setus_ModalVisible] = useState(false)
    const [us_Modalloading, setus_Modalloading] = useState(false)

    const STATUS_OK = 200;

    const [toast, addToast] = useState(0)
    const toaster = useRef()

    const [us_id, set_us_id] = useState("088d81f9-a0de-407c-b4dc-33b5119c56e8");
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


    const [validated, setValidated] = useState(false);




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


    /*const _fc_SelectValue_Rvperfperfil = async () => {
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

    }*/








    const _fc_showModal = () => {
        setus_ModalVisible(!us_ModalVisible);
        _fc_getByID(_id);
    }

    const _fc_getByID = async () => {

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        };

        const response = await fetch("/Certsolicitudes/GetById/" + _id, settings);

        switch (response.status) {
            case STATUS_OK:
                const resultJson = await response.json();

                _fc_setInputsForm(resultJson)
                break;
            case 401:
                window.location.href = "/401/#/401";
                break;
            default:
                _fc_ToastMsgStatus(response);
        }

    }

    const _fc_setInputsForm = (resultJson) => {


        set_us_id(resultJson.id);
        set_us_Codigosolicitud(resultJson.Codigosolicitud);
        set_us_Uidcertsolicitudtipo(resultJson.Uidcertsolicitudtipo);
        set_us_Uidcerttipodocumento(resultJson.Uidcerttipodocumento);
        set_us_Identificacion(resultJson.Identificacion);
        set_us_Nombre1(resultJson.Nombre1);
        set_us_Nombre2(resultJson.Nombre2);
        set_us_Apellidopaterno(resultJson.Apellidopaterno);
        set_us_Apellidomaterno(resultJson.Apellidomaterno);
        set_us_Fechanacimiento(resultJson.Fechanacimiento);
        set_us_Uidcertnacionalidad(resultJson.Uidcertnacionalidad);
        set_us_Celular(resultJson.Celular);
        set_us_Celular2(resultJson.Celular2);
        set_us_Email(resultJson.Email);
        set_us_Email2(resultJson.Email2);
        set_us_Uidcertsexo(resultJson.Uidcertsexo);
        set_us_Uidcertprovincia(resultJson.Uidcertprovincia);
        set_us_Uidcertcanton(resultJson.Uidcertcanton);
        set_us_Direccion(resultJson.Direccion);
        set_us_Aplicaruc(resultJson.Aplicaruc);
        set_us_Rl_tipoidentificacion(resultJson.Rl_tipoidentificacion);
        set_us_Rl_identificacion(resultJson.Rl_identificacion);
        set_us_Rl_primernombre(resultJson.Rl_primernombre);
        set_us_Rl_segundonombre(resultJson.Rl_segundonombre);
        set_us_Rl_apellidopaterno(resultJson.Rl_apellidopaterno);
        set_us_Rl_apellidomaterno(resultJson.Rl_apellidomaterno);
        set_us_De_ruc(resultJson.De_ruc);
        set_us_De_razonsocial(resultJson.De_razonsocial);
        set_us_De_area(resultJson.De_area);
        set_us_De_cargosolicitante(resultJson.De_cargosolicitante);
        set_us_Uidcertformatofirma(resultJson.Uidcertformatofirma);
        set_us_Uidcertvigencia(resultJson.Uidcertvigencia);
        set_us_Pg_identificacion(resultJson.Pg_identificacion);
        set_us_Pg_razonsocialnombreapellido(resultJson.Pg_razonsocialnombreapellido);
        set_us_Pg_direccion(resultJson.Pg_direccion);
        set_us_Pg_correo(resultJson.Pg_correo);
        set_us_Pg_preciosinimpuestos(resultJson.Pg_preciosinimpuestos);
        set_us_Pg_porcentajeimpuesto(resultJson.Pg_porcentajeimpuesto);
        set_us_Pg_impuestos(resultJson.Pg_impuestos);
        set_us_Pg_precioconimpuestos(resultJson.Pg_precioconimpuestos);
        set_us_Codigopromocional(resultJson.Codigopromocional);
        set_us_Adj_cedulaladofrontal(resultJson.Adj_cedulaladofrontal);
        set_us_Adj_cedulaladoposterior(resultJson.Adj_cedulaladoposterior);
        set_us_Adj_fotorostroconcedula(resultJson.Adj_fotorostroconcedula);
        set_us_Adj_hojaruc(resultJson.Adj_hojaruc);
        set_us_Adj_constitucioncompania(resultJson.Adj_constitucioncompania);
        set_us_Adj_nombramientorepresentante(resultJson.Adj_nombramientorepresentante);
        set_us_Adj_aceptacionnombramiento(resultJson.Adj_aceptacionnombramiento);
        set_us_Adj_documentoadicional(resultJson.Adj_documentoadicional);
        set_us_Adj_cedularepresentante(resultJson.Adj_cedularepresentante);
        set_us_Adj_autorizacionrepresentante(resultJson.Adj_autorizacionrepresentante);
        set_us_Uidcertestadosolicitud(resultJson.Uidcertestadosolicitud);
        set_us_Jsoncorreccion(resultJson.Jsoncorreccion);
        set_us_Parroquia(resultJson.Parroquia);
        set_us_Coddactilar(resultJson.Coddactilar);
        set_us_Uidrvperfperfil(resultJson.Uidrvperfperfil);
        set_us_Contrasenia(resultJson.Contrasenia);

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
                _ToastMsgTextTittle = "Editar registro";
                _ToastMsgText = "Ha sido editado correctamente!";
              //  _isUpdate();
            }
            else {
                _ToastMsgIconClass = "text-danger";
                _ToastMsgIconImage = cilXCircle;
                _ToastMsgTextTittle = "Editar registro";
                _ToastMsgText = "No ha sido editado!";
            }

            addToast(exampleToast(_ToastMsgIconClass, _ToastMsgIconImage, _ToastMsgTextTittle, _ToastMsgText))
        }
    }

    const _fc_saveChangeUpdate = async () => {
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
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataJson)
        };

        setus_Modalloading(true);
        const response = await fetch("/Certsolicitudes/Modify", settings);

        switch (response.status) {
            case STATUS_OK:
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

    const _fc_handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }

    const _initSelect = async () => {

        _fc_SelectValue_Certsolicitudtipo();
        _fc_SelectValue_Certtipodocumento();
        _fc_SelectValue_Certnacionalidad();
        _fc_SelectValue_Certsexo();
        _fc_SelectValue_Certprovincia();
        _fc_SelectValue_Certcanton();
        _fc_SelectValue_Certformatofirma();
        _fc_SelectValue_Certvigencia();
        _fc_SelectValue_Certestadosolicitud();
        //_fc_SelectValue_Rvperfperfil();
    }

    return (
        <>
            <CButton alignment="center" backdrop="static" size="sm" color="warning" shape="rounded-pill" className="m-1" onClick={() => { _initSelect(); _fc_showModal(); }}>
                <strong> <CIcon icon={cilPencil} size="lg" />  Editar </strong>
            </CButton>

            <CModal size="xl" alignment="center" backdrop="static" visible={us_ModalVisible} onClose={() => setus_ModalVisible(false)} aria-labelledby="ModalTitleCertsolicitudes">
                <CModalHeader onClose={() => setus_ModalVisible(false)}>
                    <CModalTitle id="ModalTitleCertsolicitudes">Editar</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>Introduce tus datos</p>
                    <CForm className="row g-3 needs-validation" noValidate validated={validated} onSubmit={_fc_handleSubmit}>
                        <CCol md={4} className="position-relative">
                            <CFormInput
                                disabled
                                type="number"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Cod. Solicitud."
                                label="Cod. Solicitud"
                                value={us_Codigosolicitud}
                                tooltipFeedback
                                onChange={(e) => set_us_Codigosolicitud(e.target.value)}
                            />
                        </CCol>

                        <CCol md={4} className="position-relative">
                            <CFormSelect
                                disabled
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Tipo de Solicitud"
                                value={us_Uidcertsolicitudtipo}
                                tooltipFeedback
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
                                disabled
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Tipo de Documento"
                                value={us_Uidcerttipodocumento}
                                tooltipFeedback
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
                                value={us_Identificacion}
                                tooltipFeedback
                                onChange={(e) => set_us_Identificacion(e.target.value)}
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
                                value={us_Coddactilar}
                                tooltipFeedback
                                onChange={(e) => set_us_Coddactilar(e.target.value)}
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
                                value={us_Nombre1}
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
                                value={us_Nombre2}
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
                                value={us_Apellidopaterno}
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
                                value={us_Apellidomaterno}
                                tooltipFeedback
                                onChange={(e) => set_us_Apellidomaterno(e.target.value)}
                            />
                        </CCol>

                        <CCol md={4} className="position-relative">
                            <CFormLabel htmlFor="validationTooltipUsername">Fecha de Nacimiento</CFormLabel>
                            <CInputGroup className="has-validation">
                                <CDatePicker
                                    feedbackValid="Looks good!"
                                    feedbackInvalid="Please provide a birth date."
                                    date={us_Fechanacimiento == null ? (new Date().setFullYear(new Date().getFullYear() - 18)) : us_Fechanacimiento}
                                    maxDate={new Date().setFullYear(new Date().getFullYear() - 18)}
                                    onDateChange={(newDate) => set_us_Fechanacimiento(newDate)}
                                />
                            </CInputGroup>
                        </CCol>

                        <CCol md={4} className="position-relative">
                            <CFormSelect
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Nacionalidad"
                                value={us_Uidcertnacionalidad}
                                tooltipFeedback
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
                                value={us_Celular}
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
                                value={us_Celular2}
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
                                value={us_Email}
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
                                value={us_Email2}
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
                                value={us_Uidcertsexo}
                                tooltipFeedback
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
                                value={us_Uidcertprovincia}
                                tooltipFeedback
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
                                value={us_Uidcertcanton}
                                tooltipFeedback
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
                                maxLength="100"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Parroquia."
                                label="Parroquia"
                                value={us_Parroquia}
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
                                feedbackInvalid="Por favor, escribe Dirección Completa."
                                label="Dirección Completa"
                                value={us_Direccion}
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
                                value={us_Aplicaruc}
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
                                value={us_Rl_tipoidentificacion}
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
                                value={us_Rl_identificacion}
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
                                value={us_Rl_primernombre}
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
                                value={us_Rl_segundonombre}
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
                                value={us_Rl_apellidopaterno}
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
                                value={us_Rl_apellidomaterno}
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
                                value={us_De_ruc}
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
                                value={us_De_razonsocial}
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
                                value={us_De_area}
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
                                value={us_De_cargosolicitante}
                                tooltipFeedback
                                onChange={(e) => set_us_De_cargosolicitante(e.target.value)}
                            />
                        </CCol>

                        <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Contraseña."
                                label="Contraseña"
                                value={us_Contrasenia}
                                tooltipFeedback
                                onChange={(e) => set_us_Contrasenia(e.target.value)}
                            />
                        </CCol>
                        {/*Ultima Seccion*/}
                        <CCol md={4} className="position-relative">
                            <CFormSelect
                                disabled
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Formato de Firma"
                                value={us_Uidcertformatofirma}
                                defaultValue= "357b3376-ab02-4a90-a0a3-dacc6f66bd20"
                                tooltipFeedback
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
                                value={us_Uidcertvigencia}
                                tooltipFeedback
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
                                value={us_Pg_identificacion}
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
                                value={us_Pg_razonsocialnombreapellido}
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
                                value={us_Pg_direccion}
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
                                value={us_Pg_correo}
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
                                value={us_Pg_preciosinimpuestos}
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
                                value={us_Pg_porcentajeimpuesto}
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
                                value={us_Pg_impuestos}
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
                                value={us_Pg_precioconimpuestos}
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
                                value={us_Codigopromocional}
                                tooltipFeedback
                                onChange={(e) => set_us_Codigopromocional(e.target.value)}
                            />
                        </CCol>


                        {/*Adjuntos */}
                        <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="MAX"
                                defaultValue=""
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Por favor, escribe Cédula lado frontal."
                                label="Cédula lado frontal"
                                value={us_Adj_cedulaladofrontal}
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
                                value={us_Adj_cedulaladoposterior}
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
                                value={us_Adj_fotorostroconcedula}
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
                                value={us_Adj_hojaruc}
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
                                value={us_Adj_constitucioncompania}
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
                                value={us_Adj_nombramientorepresentante}
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
                                value={us_Adj_aceptacionnombramiento}
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
                                value={us_Adj_documentoadicional}
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
                                value={us_Adj_cedularepresentante}
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
                                value={us_Adj_autorizacionrepresentante}
                                tooltipFeedback
                                onChange={(e) => set_us_Adj_autorizacionrepresentante(e.target.value)}
                            />
                        </CCol>

                        <CCol md={4} className="position-relative">
                            <CFormSelect
                                disabled
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Estado"
                                value={us_Uidcertestadosolicitud}
                                tooltipFeedback
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
                                value={us_Jsoncorreccion}
                                tooltipFeedback
                                onChange={(e) => set_us_Jsoncorreccion(e.target.value)}
                            />
                        </CCol>

                        <CCol md={4} className="position-relative">
                            <CFormInput
                                type="text"
                                maxLength="50"
                                defaultValue=""
                                aria-describedby="validationTooltip04Feedback"
                                feedbackValid="¡Se ve bien!!"
                                feedbackInvalid="Please select a valid state."
                                label="Perfil"
                                value={us_Uidrvperfperfil}
                                tooltipFeedback
                                onChange={(e) => set_us_Uidrvperfperfil(e.target.value)}
                            />
                        </CCol>

                    


                    </CForm>

                </CModalBody>
                <CModalFooter>
                    {
                        us_Modalloading ?
                            <CButton color="secondary" disabled onClick={() => setus_ModalVisible(false)}>Cerrar</CButton> :
                            <CButton color="secondary" onClick={() => setus_ModalVisible(false)}>Cerrar</CButton>
                    }
                    <CLoadingButton color="primary" loading={us_Modalloading} onClick={() => _fc_saveChangeUpdate()}>
                        {us_Modalloading ? "Guardando Cambios" : "Guardar Cambios"}
                    </CLoadingButton>
                </CModalFooter>
            </CModal>

            <CToaster ref={toaster} push={toast} placement="top-end" />
        </>
    )
}

export default CertsolicitudesUpdate