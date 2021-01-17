import styled from '@emotion/styled';
import { PageProps } from 'gatsby';
import React from 'react'

import { Text, GetTokenAndTokenIdFromSearch } from '../common';
import { RealmApp } from '../mongodb-realm'

const PanelDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
    max-width: 25%;
`;

function ResetPasswordPage({ location }: PageProps) {
    const params = GetTokenAndTokenIdFromSearch(location.search);
    if(!params) {
        return <>Error!</>
    }

    const { token, tokenId } = params;
    const [resettingPassword, setResettingPassword] = React.useState(false);
    const [resetEmailSent, setResetEmailSent] = React.useState(false);
    const newPassRef = React.useRef<HTMLInputElement>();

    const resetPassword = async () => {
        setResettingPassword(true);
        try {
            await RealmApp.emailPasswordAuth.resetPassword(token, tokenId, newPassRef.current?.value);
        } catch(error) {
            console.error(`Ran into an error resetting user password on mongodb cloud! Error: ${error}`);
            // TODO(Jack): Make error visible in html
            return;
        }
        setResetEmailSent(true);
    }

    if(!resettingPassword) {
        return (
            <PanelDiv>
                <Text>New Password:</Text>
                <input type="password" required ref={newPassRef} />
                <button onClick={resetPassword}>Reset Password</button>
            </PanelDiv>
        );
    } else {
        return (
            <>
                {
                    resetEmailSent ? <Text>Password reset!</Text> : <Text>Resetting...</Text>
                }
            </>
        )
    }
}

export default ResetPasswordPage;