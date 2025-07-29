import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppHeader, AppFooter } from '../components';
import { CSpinner } from '@coreui/react-pro';

// Lazy load componentes página
const FormularioPago = lazy(() => import('../views/Pay/FormularioPago'));
const Page401 = lazy(() => import('../views/pages/page401/Page401'));
const Page404 = lazy(() => import('../views/pages/page404/Page404'));
const Page500 = lazy(() => import('../views/pages/page500/Page500'));
const PagoNoDisponible = lazy(() => import('../views/Pay/PagoNoDisponible'));

const DefaultLayout = () => {
    return (
        <>
            <AppHeader />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent">
                <Suspense fallback={<CSpinner color="primary" />}>
                    <Routes>
                        {/* Redirigir raíz al formulario */}
                        <Route path="/" element={<Navigate to="/FormularioPago/:idParam" replace />} />

                        {/* Rutas internas */}
                        <Route path="/FormularioPago/:idParam" element={<FormularioPago />} />
                        <Route path="/401" element={<Page401 />} />
                        <Route path="/500" element={<Page500 />} />
                        <Route path="/PagoNoDisponible" element={<PagoNoDisponible />} />

                        {/* Ruta 404 */}
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
                <AppFooter />
            </div>
        </>
    );
};

export default DefaultLayout;
