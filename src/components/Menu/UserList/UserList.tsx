import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../../redux/user/UserAction';
import { UsersState } from '../../../redux/user/UserState';

export default function UserList() {
    const availableUsers = useSelector<UsersState>((users) => users)
    const dispatch = useDispatch()

    return (
        <div>User List</div>
    );
}
