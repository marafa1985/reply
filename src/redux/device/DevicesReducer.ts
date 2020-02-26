import { DeviceAction, DeviceActionType } from "./DevicesAction";
import { DevicesState } from './DevicesState'
import Devices from "../../model/Device/Devices";

const defaultInit: DevicesState = {
    devices: new Devices()
}
const devicesReducer = (initState: DevicesState = defaultInit, action: DeviceAction) => {
    switch (action.type) {
        case DeviceActionType.DEVICE_GET_LIST:
            return { ...initState.devices }
        case DeviceActionType.DEVICE_GET_BY_USER:
            return { ...initState.devices.getDevicesByUser(action.username) }
    }
    return initState
}


export default devicesReducer;