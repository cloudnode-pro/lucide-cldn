import {Icon} from "../Icon.js";

export class CameraOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="2" x2="22" y1="2" y2="22"/><path d="M7 7H4A2 2 0 0 0 2 9V18A2 2 0 0 0 4 20H20M9.5 4H14.5L17 7H20A2 2 0 0 1 22 9V16.5"/><path d="M14.1 15.1A3 3 0 1 1 10 11"/></svg>`
        ).node);
    }
}
