import { UserAction, UserActionType } from "./UserAction";
import { UsersState } from './UserState'
import Users from "../../model/User/Users";

const defaultInit: UsersState = {
    users: new Users()
}
const usersReducer = (initState: UsersState = defaultInit, action: UserAction) => {
    switch (action.type) {
        case UserActionType.USER_GET_LIST:
            return initState.users.getUsers()

        case UserActionType.USER_FILTER_USERS_BY_USERNAME:
            return initState.users.filterUserByName(action.searchText)

        case UserActionType.USER_DELETE_USER_FROM_LIST:
            return initState.users.deleteUser(action.username)

        case UserActionType.USER_REST_PASSWORD:
            return initState.users.resetPassword(action.newUser)
    }
    return initState
}

export default usersReducer;