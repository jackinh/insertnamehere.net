import React from 'react'
import { User } from 'realm-web'

function LogoutButton({user, setUser}: React.PropsWithRef<{ user: User, setUser: (user: User) => void }>) {
    const logoutUser = async () => {
        await user.logOut();
        setUser(null);
    };
    return <><button onClick={logoutUser}>Log Out</button></>
}

export default LogoutButton;