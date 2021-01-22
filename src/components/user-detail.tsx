import React from 'react'

import { Text } from '../common'

export default function UserDetail({ user }: { user: Realm.User }) {
    return <><Text>Logged in with user id: {user.id}</Text></>;
}