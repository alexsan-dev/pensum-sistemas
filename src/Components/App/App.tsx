// REACT
import React from 'react'

// ROUTER
import { BrowserRouter } from 'react-router-dom'

// PROVIDERS
import withAlerts from '@weareluastudio/lualert'
import MainProvider from 'Providers/Main'

// RUTAS
import Router from 'Router/Router'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<MainProvider>
				<Router />
			</MainProvider>
		</BrowserRouter>
	)
}

export default withAlerts(App, {
	confirmText: 'Aceptar',
	cancelText: 'Cancelar',
	confirmColor: '#511F73',
	blurred: true,
	zIndex: 5002,
})
