import { createStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './rootreducer'

const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer)

export const store = createStore(persistedReducer)
export const { dispatch } = store
export const persistor = persistStore(store)

// TODO: remove this
window.store = store
