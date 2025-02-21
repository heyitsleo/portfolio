import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from './components/GlobalStyle'
import App from './App'

import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)
