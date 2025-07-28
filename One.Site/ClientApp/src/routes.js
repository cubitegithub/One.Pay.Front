import React from 'react';

const FormularioSolicitud = React.lazy(() =>
    import('./views/certsolicitud/formularioSolicitud')
);

const Certsolicitudes = React.lazy(() =>
    import('./views/Cert/Certsolicitudes/Index')
);

const routes = [
    {
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
    },
];

export default routes;
