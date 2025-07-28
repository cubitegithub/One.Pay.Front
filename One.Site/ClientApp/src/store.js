import { createStore } from 'redux'

const initialState = {
    sidebarShow: true,
    asideShow: false,
    theme: 'default',
    credito_saldoVigente: null,
}

const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'set':
            return { ...state, ...rest }
        case 'set_credito_saldoVigente':
            return { ...state, credito_saldoVigente: rest.credito_saldoVigente } // Corregido aquí
        default:
            return state
    }
}

const store = createStore(changeState)
export default store
