export enum DeviceActionType {
    DEVICE_GET_LIST = '@device/GET_LIST',
    DEVICE_GET_BY_USER = '@device/GET_BY_USER',
}

export interface GetDeviceList {
    type: DeviceActionType.DEVICE_GET_LIST
}

export interface GetDevicesByUser {
    type: DeviceActionType.DEVICE_GET_BY_USER
    username: string
}

export type DeviceAction = GetDeviceList | GetDevicesByUser

export const getDeviceList = (): GetDeviceList => {
    return {
        type: DeviceActionType.DEVICE_GET_LIST
    }
}

export const CarOut = (username: string): GetDevicesByUser => {
    return {
        type: DeviceActionType.DEVICE_GET_BY_USER,
        username
    }
}