import React from 'react';

const FormularioPago = React.lazy(() =>
    import('./views/Pay/FormularioPago')
);

/*const FormularioSolicitud = React.lazy(() =>
    import('./views/certsolicitud/formularioSolicitud')
);

const Certsolicitudes = React.lazy(() =>
    import('./views/Cert/Certsolicitudes/Index')
);*/

const routes = [
    {
        path: '/FormularioPago',
        name: 'Formulario Pago',
        element: FormularioPago,
        exact: true,
    },
    /*{
        path: '/formularioSolicitud',
        name: 'Formulario Solicitud',
        element: FormularioSolicitud,
        exact: true,
    },
    {
        path: '/solicitudes',
        name: 'Formulario Solicitud',
        element: Certsolicitudes,
        exact: true,
    },*/
];

export default routes;
