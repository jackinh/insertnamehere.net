import React, { createContext } from 'react'
import { App } from 'realm-web'

export type RealmContextProps = {
    app?: App;
}

export const RealmContext: React.Context<RealmContextProps> = createContext({});