import { IDevice } from "./Devices.dto";
import { IUser } from "../User/Users.dto";

export class Device implements IDevice {
    rainIndicator: boolean
    playMusic: boolean
    lightsControl: boolean
    user: IUser
    constructor(rainIndicator: boolean, playMusic: boolean, lightsControl: boolean, user: IUser) {
        this.rainIndicator = rainIndicator
        this.playMusic = playMusic
        this.lightsControl = lightsControl
        this.user = { ...user }
    }
    changeRainIndicator(value: boolean) {
        this.rainIndicator = value
    }
    changePlayMusic(value: boolean) {
        this.playMusic = value
    }
    changeLightsControl(value: boolean) {
        this.lightsControl = value
    }

}

export default class Devices {
    public deviceList: IDevice[] = []

    getDevicesByUser(username: string): IDevice[] {
        return this.deviceList.filter((device) => device.user.username === username)
    }
}