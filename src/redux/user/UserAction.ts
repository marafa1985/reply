import { IUser } from "../../model/User/Users.dto"

export enum UserActionType {
    USER_GET_LIST = '@user/GET_LIST',
    USER_FILTER_USERS_BY_USERNAME = '@user/FILTER_USERS_BY_USERNAME',
    USER_DELETE_USER_FROM_LIST = '@user/DELETE_USER_FROM_LIST',
    USER_REST_PASSWORD = '@user/REST_PASSWORD',
}

export interface GetUserList {
    type: UserActionType.USER_GET_LIST
}

export interface FilterUsersByUSERNAME {
    type: UserActionType.USER_FILTER_USERS_BY_USERNAME
    searchText: string
}

export interface DeleteUserFromList {
    type: UserActionType.USER_DELETE_USER_FROM_LIST
    username: string
}

export interface ResetUserPassword {
    type: UserActionType.USER_REST_PASSWORD
    newUser: IUser
}

export type UserAction = GetUserList
    | FilterUsersByUSERNAME
    | DeleteUserFromList
    | ResetUserPassword

export const getUserList = (): GetUserList => {
    return {
        type: UserActionType.USER_GET_LIST
    }
}

export const filterUsersByUSERNAME = (searchText: string): FilterUsersByUSERNAME => {
    return {
        type: UserActionType.USER_FILTER_USERS_BY_USERNAME,
        searchText,
    }
}

export const deleteUserFromList = (username: string): DeleteUserFromList => {
    return {
        type: UserActionType.USER_DELETE_USER_FROM_LIST,
        username,
    }
}
export const ResetUserPassword = (newUser: IUser): ResetUserPassword => {
    return {
        type: UserActionType.USER_REST_PASSWORD,
        newUser
    }
}