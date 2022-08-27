import { createStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootreducer'

export const store = createStore(rootReducer)

window.store = store
