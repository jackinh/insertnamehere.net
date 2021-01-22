import React from 'react'
import RealmProvider from './src/services/mongodb-realm-provider'

export default function WrapWithRealmProvider({ element }) {
    return <RealmProvider appId={process.env.REALM_APP_ID}>{element}</RealmProvider>;
}