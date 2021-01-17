import React from 'react'

import { Text } from '../common'

function UserDetail({ user }: { user: Realm.User }) {
    return <><Text>Logged in with user id: {user.id}</Text></>;
}

export default UserDetail;