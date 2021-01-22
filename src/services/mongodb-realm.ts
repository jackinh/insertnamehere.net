import { useContext } from 'react'

import { RealmContext } from './mongodb-realm-context'

export default function useRealm() {
    const context = useContext(RealmContext);

    if(!context) {
        throw new Error(`useRealm must be used inside RealmProvider context`);
    }

    if(!context.app) {
        throw new Error(`'app' has not been assigned to RealmProvider`);
    }
    
    return {
        realmApp: context.app
    }
}