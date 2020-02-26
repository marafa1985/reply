import { IUser } from './Users.dto'
export default class Users {
    public userList: IUser[] = []

    getUsers = (): IUser[] => {
        return { ...this.userList }
    }

    filterUserByName = (searchText: string): IUser[] => {
        return this.userList.filter((user) => user.username.toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()))
    }

    deleteUser(username: string): IUser[] {
        return this.userList
            .filter((user) => user.username !== username)
    }

    resetPassword({ username, password }: IUser): IUser[] {
        this.userList.map((user) => {
            if (user.username === username) {
                return { ...user, password: password }
            }
            return user
        })
        return { ...this.userList }
    }
}