import React from 'react'
import { Credentials, User} from 'realm-web'

import useRealm from '../services/mongodb-realm'

interface Props {
    setUser: (user: User) => void;
    email: React.RefObject<HTMLInputElement>;
    password: React.RefObject<HTMLInputElement>;
}

function LoginButton({setUser, email, password}: Props) {
    const { realmApp } = useRealm();
    const loginAnonymous = async () => {
        console.info(`email: ${email.current?.value} | password: ${password.current?.value}`);
        const credentials = Credentials.emailPassword(email.current?.value, password.current?.value);
        let user: User;
        try {
            user = await realmApp.logIn(credentials);
        } catch(error) {
            console.error(`Failed logging in! Error: ${error}`);
            return;
        }
        setUser(user);
    };
    return <><button onClick={loginAnonymous}>Log In</button></>;
}

export default LoginButton;
