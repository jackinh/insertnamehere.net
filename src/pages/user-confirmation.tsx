import { PageProps } from 'gatsby';
import React from 'react'

import { Text, GetTokenAndTokenIdFromSearch } from '../common';
import useRealm from '../services/mongodb-realm'

function UserConfirmationPage({ location }: PageProps) {
    const params = GetTokenAndTokenIdFromSearch(location.search);
    if(!params) {
        return <>Error!</>
    }

    const { realmApp } = useRealm();
    const { token, tokenId } = params;
    const [confirmed, setConfirmed] = React.useState(false);

    const confirmUser = async () => {
        try {
            await realmApp.emailPasswordAuth.confirmUser(token, tokenId);
        } catch(error) {
            console.error(`Ran into an error confirming user on mongodb cloud! Error: ${error}`);
            // TODO(Jack): Make error visible in html
            return;
        }
        setConfirmed(true);
    }

    if(!confirmed) {
        confirmUser();
    }

    return (
        <>
            {
                confirmed ? <Text>Confirmed!</Text> : <Text>Confirming...</Text>
            }
        </>
    )
}

export default UserConfirmationPage;