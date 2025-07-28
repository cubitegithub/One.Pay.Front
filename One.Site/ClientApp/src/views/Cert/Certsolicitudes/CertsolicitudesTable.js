import React, { useState, useEffect } from 'react'
import {  CButton, CCardBody, CCollapse, CSmartTable, CLoadingButton } from '@coreui/react-pro'
import CertsolicitudesDelete from './CertsolicitudesDelete'
import CertsolicitudesUpdate from './CertsolicitudesUpdate'
import CertsolicitudesCreate from './CertsolicitudesCreate'
import CIcon from '@coreui/icons-react'
import { cilReload } from '@coreui/icons' 
 
 


const CertsolicitudesTable = () => {
    const [us_RowSelected, setus_RowSelected] = useState([])
    const [us_DataArray, setus_DataArray] = useState([])
    const [us_refreshDataButtonLoading, setus_refreshDataButtonLoading] = useState(false)
    const STATUS_OK = 200;

    useEffect(() => { _loadData() }, []);

    const _loadData = async () => {
        setus_refreshDataButtonLoading(true);
        await _fc_getPetitionPost();
        setus_refreshDataButtonLoading(false);
		    
		setus_RowSelected("");
    }

    const _fc_getPetitionPost = async () => {
        const _header = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        };

        var response = await fetch("/Certsolicitudes/GetAll", _header);
        
        switch (response.status) {
            case STATUS_OK:
                const array = [];
                array.push(...await response.json());
                setus_DataArray(array);
                break;
            case 401:
                window.location.href = "/401/#/401";
                break;
            default:
                 
        } 

      
    }

    const _fc_Oup_Update_Create = () => {
        setus_DataArray([]);
        _loadData();
    }
    const _fc_Oup_Delete = (id) => {
        setus_DataArray(us_DataArray.filter((item) => item.id !== id));
    }
 
    

    return (
        <>
            <CertsolicitudesCreate _isCreate={() => _fc_Oup_Update_Create()} />

            <CLoadingButton variant="ghost" shape="rounded-pill" loading={us_refreshDataButtonLoading} onClick={() => _loadData()}>
                <CIcon icon={us_refreshDataButtonLoading == true ? null : cilReload} size="sm" /> Recargar Datos
            </CLoadingButton>

            <hr></hr>
            <CSmartTable
                sorterValue={{ column: 'id', state: 'asc' }}
                clickableRows
                tableProps={{
                    striped: true,
                    hover: true,
                }}
                itemsPerPage={5}
                activePage={1}
                footer
                items={us_DataArray}
                columns={[
				    
			{ key: 'Codigosolicitud', label: 'Cod. Solicitud', _style: { width: '20%' } },
			{ key: 'Uidcertsolicitudtipo', label: 'Tipo de Solicitud', _style: { width: '20%' } },
			{ key: 'Uidcerttipodocumento', label: 'Tipo de Documento', _style: { width: '20%' } },
			{ key: 'Identificacion', label: 'Nro. de Documento', _style: { width: '20%' } },
			{ key: 'Nombre1', label: 'Primer Nombre', _style: { width: '20%' } },
			{ key: 'Nombre2', label: 'Segundo Nombre', _style: { width: '20%' } },
			{ key: 'Apellidopaterno', label: 'Apellido Paterno', _style: { width: '20%' } },
			{ key: 'Apellidomaterno', label: 'Apellido Materno', _style: { width: '20%' } },
			{ key: 'Fechanacimiento', label: 'Fecha Nacimiento', _style: { width: '20%' } },
			{ key: 'Uidcertnacionalidad', label: 'Nacionalidad', _style: { width: '20%' } },
			{ key: 'Celular', label: 'Celular', _style: { width: '20%' } },
			{ key: 'Celular2', label: 'Celular 2', _style: { width: '20%' } },
			{ key: 'Email', label: 'Email', _style: { width: '20%' } },
			{ key: 'Email2', label: 'Email2', _style: { width: '20%' } },
			{ key: 'Uidcertsexo', label: 'Sexo', _style: { width: '20%' } },
			{ key: 'Uidcertprovincia', label: 'Provincia', _style: { width: '20%' } },
			{ key: 'Uidcertcanton', label: 'Ciudad', _style: { width: '20%' } },
			{ key: 'Direccion', label: 'Dirección Completa', _style: { width: '20%' } },
			{ key: 'Aplicaruc', label: 'Con RUC', _style: { width: '20%' } },
			{ key: 'Rl_tipoidentificacion', label: 'Tipo de Documento', _style: { width: '20%' } },
			{ key: 'Rl_identificacion', label: 'Nro. de Documento', _style: { width: '20%' } },
			{ key: 'Rl_primernombre', label: 'Primer Nombre', _style: { width: '20%' } },
			{ key: 'Rl_segundonombre', label: 'Segundo Nombre', _style: { width: '20%' } },
			{ key: 'Rl_apellidopaterno', label: 'Apellido Paterno', _style: { width: '20%' } },
			{ key: 'Rl_apellidomaterno', label: 'Apellido Materno', _style: { width: '20%' } },
			{ key: 'De_ruc', label: 'Ruc', _style: { width: '20%' } },
			{ key: 'De_razonsocial', label: 'Razón Social', _style: { width: '20%' } },
			{ key: 'De_area', label: 'Area', _style: { width: '20%' } },
			{ key: 'De_cargosolicitante', label: 'Cargo del Solicitante', _style: { width: '20%' } },
			{ key: 'Uidcertformatofirma', label: 'Formato de Firma', _style: { width: '20%' } },
			{ key: 'Uidcertvigencia', label: 'Años de Vigencia', _style: { width: '20%' } },
			{ key: 'Pg_identificacion', label: 'Identificación', _style: { width: '20%' } },
			{ key: 'Pg_razonsocialnombreapellido', label: 'Razón Social/Nombres Apellidos', _style: { width: '20%' } },
			{ key: 'Pg_direccion', label: 'Dirección', _style: { width: '20%' } },
			{ key: 'Pg_correo', label: 'Correo', _style: { width: '20%' } },
			{ key: 'Pg_preciosinimpuestos', label: 'Precio sin impuestos', _style: { width: '20%' } },
			{ key: 'Pg_porcentajeimpuesto', label: 'Porcentaje impuesto', _style: { width: '20%' } },
			{ key: 'Pg_impuestos', label: 'Impuestos', _style: { width: '20%' } },
			{ key: 'Pg_precioconimpuestos', label: 'Precio con impuesto', _style: { width: '20%' } },
			{ key: 'Codigopromocional', label: 'Cód. Promocional', _style: { width: '20%' } },
			{ key: 'Adj_cedulaladofrontal', label: 'Cédula lado frontal', _style: { width: '20%' } },
			{ key: 'Adj_cedulaladoposterior', label: 'Cédula lado posterior', _style: { width: '20%' } },
			{ key: 'Adj_fotorostroconcedula', label: 'Foto con cédula en mano', _style: { width: '20%' } },
			{ key: 'Adj_hojaruc', label: 'Hoja de RUC (SRI)', _style: { width: '20%' } },
			{ key: 'Adj_constitucioncompania', label: 'Constitución de la Compañia', _style: { width: '20%' } },
			{ key: 'Adj_nombramientorepresentante', label: 'Nombramiento del Representante legal', _style: { width: '20%' } },
			{ key: 'Adj_aceptacionnombramiento', label: 'Aceptación del Representante legal', _style: { width: '20%' } },
			{ key: 'Adj_documentoadicional', label: 'Documento adicional', _style: { width: '20%' } },
			{ key: 'Adj_cedularepresentante', label: 'Cédula Representante', _style: { width: '20%' } },
			{ key: 'Adj_autorizacionrepresentante', label: 'Autorización del Representante', _style: { width: '20%' } },
			{ key: 'Uidcertestadosolicitud', label: 'Estado', _style: { width: '20%' } },
			{ key: 'Jsoncorreccion', label: 'Jsoncorreccion', _style: { width: '20%' } },
			{ key: 'Parroquia', label: 'Parroquia', _style: { width: '20%' } },
			{ key: 'Coddactilar', label: 'Cod. Dactilar', _style: { width: '20%' } },
			{ key: 'Uidrvperfperfil', label: 'Perfil', _style: { width: '20%' } },
			{ key: 'Contrasenia', label: 'Contraseña', _style: { width: '20%' } },  
                     
                    {
                        key: 'show_details',
                        label: '',
                        _style: { width: '1%' },
                        filter: false,
                        sorter: false,
                        _props: { onClick: () => { }, "data-table-row-id": "", },
                    },
                ]}
                columnFilter
                tableFilter
                cleaner
                itemsPerPageSelect
                columnSorter
                pagination
                scopedColumns={{
                    show_details: (item) => {
                        return (
                            <td className="py-2">
                                <CButton color="primary" variant="outline" size="sm" onClick={() =>   setus_RowSelected(us_RowSelected === item.id ? "" : item.id) }>
                                    {us_RowSelected===item.id ? 'Ocultar' : 'Mostrar'}
                                </CButton>
                            </td>
                        )
                    },
                    details: (item) => {
                        return (
                            <>
                                <CCollapse visible={us_RowSelected===item.id}>
                                    <CCardBody>
									    
			<span className="text-muted"><strong>Cod. Solicitud:</strong> {item.Codigosolicitud}  </span>
			<span className="text-muted"><strong>Tipo de Solicitud:</strong> {item.Uidcertsolicitudtipo}  </span>
			<span className="text-muted"><strong>Tipo de Documento:</strong> {item.Uidcerttipodocumento}  </span>
			<span className="text-muted"><strong>Nro. de Documento:</strong> {item.Identificacion}  </span>
			<span className="text-muted"><strong>Primer Nombre:</strong> {item.Nombre1}  </span>
			<span className="text-muted"><strong>Segundo Nombre:</strong> {item.Nombre2}  </span>
			<span className="text-muted"><strong>Apellido Paterno:</strong> {item.Apellidopaterno}  </span>
			<span className="text-muted"><strong>Apellido Materno:</strong> {item.Apellidomaterno}  </span>
			<span className="text-muted"><strong>Fecha Nacimiento:</strong> {item.Fechanacimiento}  </span>
			<span className="text-muted"><strong>Nacionalidad:</strong> {item.Uidcertnacionalidad}  </span>
			<span className="text-muted"><strong>Celular:</strong> {item.Celular}  </span>
			<span className="text-muted"><strong>Celular 2:</strong> {item.Celular2}  </span>
			<span className="text-muted"><strong>Email:</strong> {item.Email}  </span>
			<span className="text-muted"><strong>Email2:</strong> {item.Email2}  </span>
			<span className="text-muted"><strong>Sexo:</strong> {item.Uidcertsexo}  </span>
			<span className="text-muted"><strong>Provincia:</strong> {item.Uidcertprovincia}  </span>
			<span className="text-muted"><strong>Ciudad:</strong> {item.Uidcertcanton}  </span>
			<span className="text-muted"><strong>Dirección Completa:</strong> {item.Direccion}  </span>
			<span className="text-muted"><strong>Con RUC:</strong> {item.Aplicaruc}  </span>
			<span className="text-muted"><strong>Tipo de Documento:</strong> {item.Rl_tipoidentificacion}  </span>
			<span className="text-muted"><strong>Nro. de Documento:</strong> {item.Rl_identificacion}  </span>
			<span className="text-muted"><strong>Primer Nombre:</strong> {item.Rl_primernombre}  </span>
			<span className="text-muted"><strong>Segundo Nombre:</strong> {item.Rl_segundonombre}  </span>
			<span className="text-muted"><strong>Apellido Paterno:</strong> {item.Rl_apellidopaterno}  </span>
			<span className="text-muted"><strong>Apellido Materno:</strong> {item.Rl_apellidomaterno}  </span>
			<span className="text-muted"><strong>Ruc:</strong> {item.De_ruc}  </span>
			<span className="text-muted"><strong>Razón Social:</strong> {item.De_razonsocial}  </span>
			<span className="text-muted"><strong>Area:</strong> {item.De_area}  </span>
			<span className="text-muted"><strong>Cargo del Solicitante:</strong> {item.De_cargosolicitante}  </span>
			<span className="text-muted"><strong>Formato de Firma:</strong> {item.Uidcertformatofirma}  </span>
			<span className="text-muted"><strong>Años de Vigencia:</strong> {item.Uidcertvigencia}  </span>
			<span className="text-muted"><strong>Identificación:</strong> {item.Pg_identificacion}  </span>
			<span className="text-muted"><strong>Razón Social/Nombres Apellidos:</strong> {item.Pg_razonsocialnombreapellido}  </span>
			<span className="text-muted"><strong>Dirección:</strong> {item.Pg_direccion}  </span>
			<span className="text-muted"><strong>Correo:</strong> {item.Pg_correo}  </span>
			<span className="text-muted"><strong>Precio sin impuestos:</strong> {item.Pg_preciosinimpuestos}  </span>
			<span className="text-muted"><strong>Porcentaje impuesto:</strong> {item.Pg_porcentajeimpuesto}  </span>
			<span className="text-muted"><strong>Impuestos:</strong> {item.Pg_impuestos}  </span>
			<span className="text-muted"><strong>Precio con impuesto:</strong> {item.Pg_precioconimpuestos}  </span>
			<span className="text-muted"><strong>Cód. Promocional:</strong> {item.Codigopromocional}  </span>
			<span className="text-muted"><strong>Cédula lado frontal:</strong> {item.Adj_cedulaladofrontal}  </span>
			<span className="text-muted"><strong>Cédula lado posterior:</strong> {item.Adj_cedulaladoposterior}  </span>
			<span className="text-muted"><strong>Foto con cédula en mano:</strong> {item.Adj_fotorostroconcedula}  </span>
			<span className="text-muted"><strong>Hoja de RUC (SRI):</strong> {item.Adj_hojaruc}  </span>
			<span className="text-muted"><strong>Constitución de la Compañia:</strong> {item.Adj_constitucioncompania}  </span>
			<span className="text-muted"><strong>Nombramiento del Representante legal:</strong> {item.Adj_nombramientorepresentante}  </span>
			<span className="text-muted"><strong>Aceptación del Representante legal:</strong> {item.Adj_aceptacionnombramiento}  </span>
			<span className="text-muted"><strong>Documento adicional:</strong> {item.Adj_documentoadicional}  </span>
			<span className="text-muted"><strong>Cédula Representante:</strong> {item.Adj_cedularepresentante}  </span>
			<span className="text-muted"><strong>Autorización del Representante:</strong> {item.Adj_autorizacionrepresentante}  </span>
			<span className="text-muted"><strong>Estado:</strong> {item.Uidcertestadosolicitud}  </span>
			<span className="text-muted"><strong>Jsoncorreccion:</strong> {item.Jsoncorreccion}  </span>
			<span className="text-muted"><strong>Parroquia:</strong> {item.Parroquia}  </span>
			<span className="text-muted"><strong>Cod. Dactilar:</strong> {item.Coddactilar}  </span>
			<span className="text-muted"><strong>Perfil:</strong> {item.Uidrvperfperfil}  </span>
			<span className="text-muted"><strong>Contraseña:</strong> {item.Contrasenia}  </span>  
                                        
                                        <div className="bg-light">
                                            <CertsolicitudesUpdate _id={item.id} _isUpdate={() => _fc_Oup_Update_Create()} />
                                            <CertsolicitudesDelete _id={item.id} _isDeleted={(x) => _fc_Oup_Delete(x)} />
                                        </div>
                                    </CCardBody>
                                </CCollapse>
                            </>
                        )
                    },
                }}
            />
        </>
    )
}

export default CertsolicitudesTable