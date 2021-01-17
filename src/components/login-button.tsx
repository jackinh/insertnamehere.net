import React from 'react'
import { App, Credentials, User} from 'realm-web'

import { RealmApp } from '../mongodb-realm'

interface Props {
    setUser: (user: User) => void;
    email: React.RefObject<HTMLInputElement>;
    password: React.RefObject<HTMLInputElement>;
}

function LoginButton({setUser, email, password}: Props) {
    const loginAnonymous = async () => {
        console.info(`email: ${email.current?.value} | password: ${password.current?.value}`);
        const credentials = Credentials.emailPassword(email.current?.value, password.current?.value);
        let user: User;
        try {
            user = await RealmApp.logIn(credentials);
        } catch(error) {
            console.error(`Failed logging in! Error: ${error}`);
            return;
        }
        setUser(user);
    };
    return <><button onClick={loginAnonymous}>Log In</button></>;
}

export default LoginButton;
