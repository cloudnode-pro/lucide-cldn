import {Icon} from "../Icon.js";

export class BluetoothConnected extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 7 17 17 12 22V2L17 7 7 17"/><line x1="18" x2="21" y1="12" y2="12"/><line x1="3" x2="6" y1="12" y2="12"/></svg>`
        ).node);
    }
}
