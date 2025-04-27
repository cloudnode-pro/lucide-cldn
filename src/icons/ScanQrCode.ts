import {Icon} from "../Icon.js";

export class ScanQrCode extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 12V16A1 1 0 0 1 16 17H12M17 3H19A2 2 0 0 1 21 5V7M17 8V7M21 17V19A2 2 0 0 1 19 21H17M3 7V5A2 2 0 0 1 5 3H7M7 21H5A2 2 0 0 1 3 19V17"/><rect width="5" height="5" x="7" y="7" rx="1"/></svg>`
        ).node);
    }
}
