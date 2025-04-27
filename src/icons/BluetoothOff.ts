import {Icon} from "../Icon.js";

export class BluetoothOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17 12 22V12L7 17M2 2 22 22M14.5 9.5 17 7 12 2V6.5"/></svg>`
        ).node);
    }
}
