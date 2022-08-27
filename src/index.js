import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)
const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate
                    loading={<div>Loading...</div>}
                    persistor={persistor}
                >
                    <App />
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
)
