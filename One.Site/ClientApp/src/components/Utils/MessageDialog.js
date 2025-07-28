import React, { useEffect } from 'react'

import CIcon from '@coreui/icons-react'
import {
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CButton,
} from '@coreui/react-pro'

import {
    cilInfo,
    cilWarning,
    cilXCircle,
    cilCheckCircle,
} from '@coreui/icons'

const iconMap = {
    info: cilInfo,
    warning: cilWarning,
    error: cilXCircle,
    success: cilCheckCircle,
    default: null,
}

const colorMap = {
    info: 'text-info',
    warning: 'text-warning',
    error: 'text-danger',
    success: 'text-success',
    default: 'text-body',
}

const MessageDialog = ({
    visible,
    type = 'default',
    title = 'Mensaje',
    message,
    customHtml,
    onClose,
    onAfterClose, // ✅ NUEVO
    delay,
    modalBackground = true,
    closeOnEscape = true,
    closeOnBackdropClick = true,
    closeButton = true,
}) => {
    useEffect(() => {
        if (visible && delay) {
            const timer = setTimeout(() => {
                handleClose()
            }, delay * 1000)
            return () => clearTimeout(timer)
        }
    }, [visible, delay])

    const handleClose = () => {
        if (onClose) onClose()
        if (onAfterClose) onAfterClose()
    }

    const icon = iconMap[type] || null
    const colorClass = colorMap[type] || 'text-body'

    return (
        <CModal
            visible={visible}
            backdrop={modalBackground}
            onClose={closeOnBackdropClick ? handleClose : undefined}
            keyboard={closeOnEscape}
        >
            <CModalHeader closeButton={closeButton} onClose={handleClose}>
                {icon && <CIcon icon={icon} className={`${colorClass} me-2`} size="xl" />}
                <CModalTitle>{title}</CModalTitle>
            </CModalHeader>
            <CModalBody>
                {message && <p>{message}</p>}
                {customHtml && <div>{customHtml}</div>}
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={handleClose}>
                    Cerrar
                </CButton>
            </CModalFooter>
        </CModal>
    )
}

export default MessageDialog


 

/**
 * ===============================
 * Ejemplos de uso de <MessageDialog />
 * ===============================
 * 
 * ✅ 1. Mensaje simple sin funciones adicionales
 * 
 * <MessageDialog
 *   visible={visible}
 *   type="info"
 *   title="Información"
 *   message="Este es un mensaje informativo."
 *   onClose={() => setVisible(false)}
 * />
 * 
 * ✅ 2. Mensaje con autocierre (delay = 5 segundos), sin onAfterClose
 * 
 * <MessageDialog
 *   visible={visible}
 *   type="success"
 *   title="Guardado exitosamente"
 *   message="Se cerrará automáticamente en 5 segundos."
 *   delay={5}
 *   onClose={() => setVisible(false)}
 * />
 * 
 * ✅ 3. Mensaje con función que se ejecuta al cerrarse (por botón o timeout)
 * 
 * <MessageDialog
 *   visible={visible}
 *   type="warning"
 *   title="Precaución"
 *   message="Esta acción puede afectar los datos."
 *   delay={4}
 *   onClose={() => setVisible(false)}
 *   onAfterClose={() => console.log("Cierre completado")}
 * />
 * 
 * ✅ 4. Mensaje con contenido HTML y sin autocierre
 * 
 * <MessageDialog
 *   visible={visible}
 *   type="error"
 *   title="Error de servidor"
 *   message="Hubo un problema al guardar."
 *   customHtml={(
 *     <ul>
 *       <li>Verifica tu conexión</li>
 *       <li>Intenta nuevamente</li>
 *     </ul>
 *   )}
 *   onClose={() => setVisible(false)}
 * />
 * 
 * ✅ 5. Solo cierre manual, sin botón ni fondo
 * 
 * <MessageDialog
 *   visible={visible}
 *   type="default"
 *   title="Modal personalizado"
 *   message="Este modal no tiene fondo ni se cierra con ESC."
 *   closeButton={false}
 *   modalBackground={false}
 *   closeOnBackdropClick={false}
 *   closeOnEscape={false}
 *   onClose={() => setVisible(false)}
 * />
 */


/**
 * ==========================================
 * Cómo usar <MessageDialog /> desde función
 * ==========================================
 * 
 * 1. Estado inicial:
 * 
 * const [mensajeVisible, setMensajeVisible] = useState(false)
 * const [mensajeConfig, setMensajeConfig] = useState({})
 * 
 * 2. Función reutilizable para mostrar mensajes:
 * 
 * const mostrarMensaje = ({
 *   type = 'info',
 *   title = 'Mensaje',
 *   message = '',
 *   customHtml = null,
 *   delay,
 *   modalBackground = true,
 *   closeOnEscape = true,
 *   closeOnBackdropClick = true,
 *   closeButton = true,
 *   onAfterClose,
 * }) => {
 *   setMensajeConfig({
 *     type,
 *     title,
 *     message,
 *     customHtml,
 *     delay,
 *     modalBackground,
 *     closeOnEscape,
 *     closeOnBackdropClick,
 *     closeButton,
 *     onAfterClose,
 *   })
 *   setMensajeVisible(true)
 * }
 * 
 * 3. Llamada desde cualquier lugar, ejemplo:
 * 
 * const handleGuardar = async () => {
 *   const response = await fetch('/api/guardar', { method: 'POST' })
 *   if (response.ok) {
 *     mostrarMensaje({
 *       type: 'success',
 *       title: 'Éxito',
 *       message: 'Guardado correctamente.',
 *       delay: 3,
 *       onAfterClose: () => cerrarModal()  // ejecuta cuando se cierre el mensaje
 *     })
 *   } else {
 *     mostrarMensaje({
 *       type: 'error',
 *       title: 'Error',
 *       message: 'Hubo un problema al guardar.'
 *     })
 *   }
 * }
 * 
 * 4. Render del componente (en JSX):
 * 
 * <MessageDialog
 *   visible={mensajeVisible}
 *   onClose={() => setMensajeVisible(false)}
 *   {...mensajeConfig}
 * />
 */
