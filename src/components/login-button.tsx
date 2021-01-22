import React from 'react'
import { Credentials, User} from 'realm-web'

import useRealm from '../services/mongodb-realm'

interface Props {
    loginWithEmailAndPassword: () => void;
}

function LoginButton({ loginWithEmailAndPassword }: Props) {
    return <><button onClick={loginWithEmailAndPassword}>Log In</button></>;
}

export default LoginButton;
