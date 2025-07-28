import React, { Component, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './scss/style.scss';

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
);

// Layout principal
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Suspense fallback={loading}>
                    <Routes>                        
                        <Route path="*" element={<DefaultLayout />} /> {/* Todas las rutas internas se manejan dentro del layout */}
                    </Routes>
                </Suspense>
            </HashRouter>
        );
    }
}

export default App;
