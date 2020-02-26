import { IUser } from "../User/Users.dto";

export enum DeviceType {
    TYPE_A = 'TYPE_A',
    TYPE_B = 'TYPE_B',
    TYPE_C = 'TYPE_C',
}

export interface IDevice {
    rainIndicator: boolean
    playMusic: boolean
    lightsControl: boolean
    user: IUser
}