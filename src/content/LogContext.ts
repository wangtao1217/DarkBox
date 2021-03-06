import { createContext } from 'react'

import { LogContextType, LogAction, LogState } from './types'
import user_store from '../storage/user_store'


export const log_initial = {
    islogged: !!user_store.getItem().userId,
    user: {
        profile: {
            avaterUrl: null,
            nickname: null,
            userId: null,
            description: null
        }
    },
    show: false,
}

export const log_reducer = (state: LogState, action: LogAction) => {
    switch (action.type) {
        case 'log_in':
            user_store.setItem(action.load.user)
            return {
                ...state,
                islogged: true,
                user: action.load.user,
            }
        case 'log_out':
            user_store.removeItem()
            return {
                ...state,
                islogged: false,
                user: {},
            }
        case 'show_form':
            return {
                ...state,
                show: !state.show
            }
    }
}

export const log_context: LogContextType = {
    state: log_initial,
    dispatch: () => { }
}

export const LogContext = createContext(log_context)
