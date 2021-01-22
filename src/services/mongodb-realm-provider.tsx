import React from 'react'
import { App } from 'realm-web'
import { RealmContext } from './mongodb-realm-context'

export interface RealmProviderProps {
    appId: string;
}

export default function RealmProvider({ appId, children }: React.PropsWithChildren<RealmProviderProps>) {
    const realmApp = App.getApp(appId);
    return (
        <RealmContext.Provider value={{ app: realmApp }}>
            {children}
        </RealmContext.Provider>
    )
}

