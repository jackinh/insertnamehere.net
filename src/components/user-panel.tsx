import styled from '@emotion/styled';
import React from 'react'
import { User } from 'realm-web'
import { css } from '@emotion/core'

import UserDetail from './user-detail'
import LoginButton from './login-button'
import LogoutButton from './logout-button'
import { RealmApp } from '../mongodb-realm'
import { Text } from '../common'

// NOTE(Jack): I want to use the object style (like Text above) but I'm not sure how to use the selectors very well
const PanelDiv = styled.div`
display: flex;
align-items: center;
margin: 1em;
position: absolute;
right: 0%;

p:nth-child(n) {
    margin: 0 0.3em 0 0;
}

input:nth-child(n) {
    margin: 0 0.7em 0 0;
}
`;

function UserPanel() {
    const [user, setUser] = React.useState<User | null>(RealmApp.currentUser);
    const emailRef = React.useRef<HTMLInputElement>();
    const passRef = React.useRef<HTMLInputElement>();

    return (
        <PanelDiv>
            {
                user ? 
                    (
                        <>
                            <UserDetail user={user} />
                            <LogoutButton user={user} setUser={setUser}/>
                        </>
                    ) : 
                    (
                        <>
                            <Text>Email:</Text>
                            <input type="text" required ref={emailRef} />
                            <Text>Password:</Text>
                            <input type="password" required ref={passRef} />
                            <LoginButton setUser={setUser} email={emailRef} password={passRef} />
                        </>
                    )
            }
        </PanelDiv>
    )
}

export default UserPanel;
